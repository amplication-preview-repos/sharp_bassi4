import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ImageDataService } from "./imageData.service";
import { ImageDataControllerBase } from "./base/imageData.controller.base";

@swagger.ApiTags("imageData")
@common.Controller("imageData")
export class ImageDataController extends ImageDataControllerBase {
  constructor(
    protected readonly service: ImageDataService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
