import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ImageDataModuleBase } from "./base/imageData.module.base";
import { ImageDataService } from "./imageData.service";
import { ImageDataController } from "./imageData.controller";
import { ImageDataResolver } from "./imageData.resolver";

@Module({
  imports: [ImageDataModuleBase, forwardRef(() => AuthModule)],
  controllers: [ImageDataController],
  providers: [ImageDataService, ImageDataResolver],
  exports: [ImageDataService],
})
export class ImageDataModule {}
