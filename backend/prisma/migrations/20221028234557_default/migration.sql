/*
  Warnings:

  - You are about to drop the column `role` on the `Note` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Note" DROP COLUMN "role",
ALTER COLUMN "categories" SET DEFAULT ARRAY[]::TEXT[];
