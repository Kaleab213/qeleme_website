/*
  Warnings:

  - You are about to drop the column `Chapter` on the `tutorial` table. All the data in the column will be lost.
  - You are about to drop the column `Chapter_Title` on the `tutorial` table. All the data in the column will be lost.
  - You are about to drop the column `Context` on the `tutorial` table. All the data in the column will be lost.
  - You are about to drop the column `Lesson` on the `tutorial` table. All the data in the column will be lost.
  - You are about to drop the column `Lesson_Title` on the `tutorial` table. All the data in the column will be lost.
  - Added the required column `Content` to the `Tutorial` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Tutorial` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `tutorial` DROP FOREIGN KEY `Tutorial_authorUsername_fkey`;

-- AlterTable
ALTER TABLE `tutorial` DROP COLUMN `Chapter`,
    DROP COLUMN `Chapter_Title`,
    DROP COLUMN `Context`,
    DROP COLUMN `Lesson`,
    DROP COLUMN `Lesson_Title`,
    ADD COLUMN `Content` VARCHAR(191) NOT NULL,
    ADD COLUMN `title` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Comment` (
    `comment_id` INTEGER NOT NULL AUTO_INCREMENT,
    `content` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`comment_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Tutorial` ADD CONSTRAINT `Tutorial_authorUsername_fkey` FOREIGN KEY (`authorUsername`) REFERENCES `User`(`username`) ON DELETE CASCADE ON UPDATE CASCADE;
