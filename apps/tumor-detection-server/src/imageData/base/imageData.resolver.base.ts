/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { GraphQLUpload } from "graphql-upload";
import { FileUpload } from "src/storage/base/storage.types";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { ImageData } from "./ImageData";
import { ImageDataCountArgs } from "./ImageDataCountArgs";
import { ImageDataFindManyArgs } from "./ImageDataFindManyArgs";
import { ImageDataFindUniqueArgs } from "./ImageDataFindUniqueArgs";
import { CreateImageDataArgs } from "./CreateImageDataArgs";
import { UpdateImageDataArgs } from "./UpdateImageDataArgs";
import { DeleteImageDataArgs } from "./DeleteImageDataArgs";
import { DetectionResultFindManyArgs } from "../../detectionResult/base/DetectionResultFindManyArgs";
import { DetectionResult } from "../../detectionResult/base/DetectionResult";
import { ImageDataService } from "../imageData.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ImageData)
export class ImageDataResolverBase {
  constructor(
    protected readonly service: ImageDataService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "ImageData",
    action: "read",
    possession: "any",
  })
  async _imageDataItemsMeta(
    @graphql.Args() args: ImageDataCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [ImageData])
  @nestAccessControl.UseRoles({
    resource: "ImageData",
    action: "read",
    possession: "any",
  })
  async imageDataItems(
    @graphql.Args() args: ImageDataFindManyArgs
  ): Promise<ImageData[]> {
    return this.service.imageDataItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => ImageData, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "ImageData",
    action: "read",
    possession: "own",
  })
  async imageData(
    @graphql.Args() args: ImageDataFindUniqueArgs
  ): Promise<ImageData | null> {
    const result = await this.service.imageData(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ImageData)
  @nestAccessControl.UseRoles({
    resource: "ImageData",
    action: "create",
    possession: "any",
  })
  async createImageData(
    @graphql.Args() args: CreateImageDataArgs
  ): Promise<ImageData> {
    return await this.service.createImageData({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ImageData)
  @nestAccessControl.UseRoles({
    resource: "ImageData",
    action: "update",
    possession: "any",
  })
  async updateImageData(
    @graphql.Args() args: UpdateImageDataArgs
  ): Promise<ImageData | null> {
    try {
      return await this.service.updateImageData({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => ImageData)
  @nestAccessControl.UseRoles({
    resource: "ImageData",
    action: "delete",
    possession: "any",
  })
  async deleteImageData(
    @graphql.Args() args: DeleteImageDataArgs
  ): Promise<ImageData | null> {
    try {
      return await this.service.deleteImageData(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => ImageData)
  async uploadFilePath(
    @graphql.Args({
      name: "file",
      type: () => GraphQLUpload,
    })
    file: FileUpload,
    @graphql.Args()
    args: ImageDataFindUniqueArgs
  ): Promise<ImageData> {
    return await this.service.uploadFilePath(args, file);
  }

  @graphql.Mutation(() => ImageData)
  async deleteFilePath(
    @graphql.Args()
    args: ImageDataFindUniqueArgs
  ): Promise<ImageData> {
    return await this.service.deleteFilePath(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [DetectionResult], { name: "detectionResults" })
  @nestAccessControl.UseRoles({
    resource: "DetectionResult",
    action: "read",
    possession: "any",
  })
  async findDetectionResults(
    @graphql.Parent() parent: ImageData,
    @graphql.Args() args: DetectionResultFindManyArgs
  ): Promise<DetectionResult[]> {
    const results = await this.service.findDetectionResults(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
