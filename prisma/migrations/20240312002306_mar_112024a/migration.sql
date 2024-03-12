/*
  Warnings:

  - You are about to drop the column `address1` on the `contact` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `contact` DROP COLUMN `address1`,
    ADD COLUMN `address` VARCHAR(191) NULL;
