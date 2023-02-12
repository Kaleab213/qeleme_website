-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fist_name` VARCHAR(191) NOT NULL,
    `last_name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `referesh_password` VARCHAR(191) NOT NULL,
    `phone_number` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tutorial` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `authorUsername` VARCHAR(191) NOT NULL,
    `Grade` INTEGER NOT NULL,
    `Subject` VARCHAR(191) NOT NULL,
    `Chapter` VARCHAR(191) NOT NULL,
    `Chapter_Title` VARCHAR(191) NOT NULL,
    `Lesson` VARCHAR(191) NOT NULL,
    `Lesson_Title` VARCHAR(191) NOT NULL,
    `Context` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Tutorial` ADD CONSTRAINT `Tutorial_authorUsername_fkey` FOREIGN KEY (`authorUsername`) REFERENCES `User`(`username`) ON DELETE RESTRICT ON UPDATE CASCADE;
