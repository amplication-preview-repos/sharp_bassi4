import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ModelMetadataResolverBase } from "./base/modelMetadata.resolver.base";
import { ModelMetadata } from "./base/ModelMetadata";
import { ModelMetadataService } from "./modelMetadata.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ModelMetadata)
export class ModelMetadataResolver extends ModelMetadataResolverBase {
  constructor(
    protected readonly service: ModelMetadataService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
