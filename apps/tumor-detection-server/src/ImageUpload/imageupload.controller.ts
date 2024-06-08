import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ImageUploadService } from "./imageupload.service";

@swagger.ApiTags("imageUploads")
@common.Controller("imageUploads")
export class ImageUploadController {
  constructor(protected readonly service: ImageUploadService) {}
}
