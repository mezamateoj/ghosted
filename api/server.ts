import {app} from './index'
const port = process.env.PORT || 8000;


app.listen(port, () => {
	console.log(`Server v5 is listening on port: ${port}`);
});
