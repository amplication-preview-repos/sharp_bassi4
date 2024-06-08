import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ModelMetadataModuleBase } from "./base/modelMetadata.module.base";
import { ModelMetadataService } from "./modelMetadata.service";
import { ModelMetadataController } from "./modelMetadata.controller";
import { ModelMetadataResolver } from "./modelMetadata.resolver";

@Module({
  imports: [ModelMetadataModuleBase, forwardRef(() => AuthModule)],
  controllers: [ModelMetadataController],
  providers: [ModelMetadataService, ModelMetadataResolver],
  exports: [ModelMetadataService],
})
export class ModelMetadataModule {}
