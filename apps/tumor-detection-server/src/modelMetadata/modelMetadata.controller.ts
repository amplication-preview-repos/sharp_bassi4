import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ModelMetadataService } from "./modelMetadata.service";
import { ModelMetadataControllerBase } from "./base/modelMetadata.controller.base";

@swagger.ApiTags("modelMetadata")
@common.Controller("modelMetadata")
export class ModelMetadataController extends ModelMetadataControllerBase {
  constructor(
    protected readonly service: ModelMetadataService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
