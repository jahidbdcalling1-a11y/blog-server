-- AddForeignKey
ALTER TABLE "post" ADD CONSTRAINT "post_autheorId_fkey" FOREIGN KEY ("autheorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
