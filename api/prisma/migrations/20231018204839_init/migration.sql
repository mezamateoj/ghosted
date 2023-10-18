-- AlterEnum
ALTER TYPE "Status" ADD VALUE 'READY';

-- AlterTable
ALTER TABLE "Jobs" ALTER COLUMN "location" DROP NOT NULL;
