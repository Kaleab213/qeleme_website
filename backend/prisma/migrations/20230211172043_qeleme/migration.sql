/*
  Warnings:

  - You are about to drop the column `authorUsername` on the `tutorials` table. All the data in the column will be lost.
  - Added the required column `userId` to the `tutorials` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `tutorials` DROP FOREIGN KEY `tutorials_authorUsername_fkey`;

-- AlterTable
ALTER TABLE `tutorials` DROP COLUMN `authorUsername`,
    ADD COLUMN `userId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `tutorials` ADD CONSTRAINT `tutorials_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `author`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
