import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DetectionResultResolverBase } from "./base/detectionResult.resolver.base";
import { DetectionResult } from "./base/DetectionResult";
import { DetectionResultService } from "./detectionResult.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DetectionResult)
export class DetectionResultResolver extends DetectionResultResolverBase {
  constructor(
    protected readonly service: DetectionResultService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
