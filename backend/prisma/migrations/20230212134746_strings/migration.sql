/*
  Warnings:

  - You are about to drop the column `title` on the `tutorial` table. All the data in the column will be lost.
  - Added the required column `Title` to the `Tutorial` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tutorial` DROP COLUMN `title`,
    ADD COLUMN `Title` VARCHAR(191) NOT NULL,
    MODIFY `Grade` VARCHAR(191) NOT NULL;
