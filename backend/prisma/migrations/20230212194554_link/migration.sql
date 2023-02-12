/*
  Warnings:

  - Added the required column `Link` to the `Tutorial` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tutorial` ADD COLUMN `Link` VARCHAR(191) NOT NULL;
