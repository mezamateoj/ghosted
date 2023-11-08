/*
  Warnings:

  - You are about to drop the column `userId` on the `Jobs` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[clerkId]` on the table `Jobs` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `clerkId` to the `Jobs` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Jobs" DROP CONSTRAINT "Jobs_userId_fkey";

-- DropIndex
DROP INDEX "Jobs_userId_key";

-- AlterTable
ALTER TABLE "Jobs" DROP COLUMN "userId",
ADD COLUMN     "clerkId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Jobs_clerkId_key" ON "Jobs"("clerkId");

-- AddForeignKey
ALTER TABLE "Jobs" ADD CONSTRAINT "Jobs_clerkId_fkey" FOREIGN KEY ("clerkId") REFERENCES "User"("clerkId") ON DELETE RESTRICT ON UPDATE CASCADE;
