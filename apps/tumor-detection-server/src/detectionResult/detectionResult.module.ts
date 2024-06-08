import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DetectionResultModuleBase } from "./base/detectionResult.module.base";
import { DetectionResultService } from "./detectionResult.service";
import { DetectionResultController } from "./detectionResult.controller";
import { DetectionResultResolver } from "./detectionResult.resolver";

@Module({
  imports: [DetectionResultModuleBase, forwardRef(() => AuthModule)],
  controllers: [DetectionResultController],
  providers: [DetectionResultService, DetectionResultResolver],
  exports: [DetectionResultService],
})
export class DetectionResultModule {}
