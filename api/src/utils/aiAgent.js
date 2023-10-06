// Load environment variables from .env file
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

import { CheerioWebBaseLoader } from "langchain/document_loaders/web/cheerio";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { RetrievalQAChain } from "langchain/chains";
import { ChatOpenAI } from "langchain/chat_models/openai";

// document loader
const loader = new CheerioWebBaseLoader(
    "https://www.getonbrd.com/jobs/programming/desarrollador-fullstack-java-nodejs-kibernum-remote"
);
const data = await loader.load();


// Split the Document into chunks for embedding and vector storage.
const textSplitter = new RecursiveCharacterTextSplitter({
    chunkSize: 500,
    chunkOverlap: 0,
});

const splitDocs = await textSplitter.splitDocuments(data);


// Embed and store the splits in a vector database (for demo purposes we use an unoptimized,
const embeddings = new OpenAIEmbeddings({
    openAIApiKey: process.env.OPENAI_API_KEY,
});
const vectorStore = await MemoryVectorStore.fromDocuments(splitDocs, embeddings);

// Retrieve relevant splits for any question using similarity_search.
const relevantDocs = await vectorStore.similaritySearch("What is the job position, company name and requeriments for the job?");


// Distill the retrieved documents into an answer using an LLM (e.g., gpt-3.5-turbo) with RetrievalQA chain.
const model = new ChatOpenAI({ modelName: "gpt-3.5-turbo", openAIApiKey: process.env.OPENAI_API_KEY }); // Use environment variable for API key
const chain = RetrievalQAChain.fromLLM(model, vectorStore.asRetriever());

const response = await chain.call({
    query: "What is the job position, company name and requeriments for the job?"
});
console.log(response);