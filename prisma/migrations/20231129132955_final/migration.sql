-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "userEmail" TEXT;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User"("email") ON DELETE SET NULL ON UPDATE CASCADE;
