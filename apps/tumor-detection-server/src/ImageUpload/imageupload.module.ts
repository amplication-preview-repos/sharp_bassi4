import { Module } from "@nestjs/common";
import { ImageUploadService } from "./imageupload.service";
import { ImageUploadController } from "./imageupload.controller";
import { ImageUploadResolver } from "./imageupload.resolver";

@Module({
  controllers: [ImageUploadController],
  providers: [ImageUploadService, ImageUploadResolver],
  exports: [ImageUploadService],
})
export class ImageUploadModule {}
