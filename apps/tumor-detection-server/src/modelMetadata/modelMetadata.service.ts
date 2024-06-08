import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ModelMetadataServiceBase } from "./base/modelMetadata.service.base";

@Injectable()
export class ModelMetadataService extends ModelMetadataServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
