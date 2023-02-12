/*
  Warnings:

  - You are about to drop the `tutorial` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `tutorial` DROP FOREIGN KEY `Tutorial_authorUsername_fkey`;

-- DropTable
DROP TABLE `tutorial`;

-- DropTable
DROP TABLE `user`;

-- CreateTable
CREATE TABLE `author` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fist_name` VARCHAR(191) NOT NULL,
    `last_name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `hash` VARCHAR(191) NOT NULL,
    `referesh_password` VARCHAR(191) NULL,

    UNIQUE INDEX `author_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tutorials` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `authorUsername` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `Grade` INTEGER NOT NULL,
    `Subject` VARCHAR(191) NOT NULL,
    `Content` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tutorials` ADD CONSTRAINT `tutorials_authorUsername_fkey` FOREIGN KEY (`authorUsername`) REFERENCES `author`(`username`) ON DELETE CASCADE ON UPDATE CASCADE;
