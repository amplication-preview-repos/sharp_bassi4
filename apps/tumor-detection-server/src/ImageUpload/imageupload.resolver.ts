import * as graphql from "@nestjs/graphql";
import { ImageUploadService } from "./imageupload.service";

export class ImageUploadResolver {
  constructor(protected readonly service: ImageUploadService) {}
}
