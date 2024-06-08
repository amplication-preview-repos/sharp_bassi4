/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsNumber,
  IsOptional,
  ValidateNested,
  IsBoolean,
} from "class-validator";
import { ImageDataWhereUniqueInput } from "../../imageData/base/ImageDataWhereUniqueInput";
import { Type } from "class-transformer";
import { ModelMetadataWhereUniqueInput } from "../../modelMetadata/base/ModelMetadataWhereUniqueInput";

@InputType()
class DetectionResultUpdateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  detectionScore?: number | null;

  @ApiProperty({
    required: false,
    type: () => ImageDataWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ImageDataWhereUniqueInput)
  @IsOptional()
  @Field(() => ImageDataWhereUniqueInput, {
    nullable: true,
  })
  imageData?: ImageDataWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isTumorDetected?: boolean | null;

  @ApiProperty({
    required: false,
    type: () => ModelMetadataWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ModelMetadataWhereUniqueInput)
  @IsOptional()
  @Field(() => ModelMetadataWhereUniqueInput, {
    nullable: true,
  })
  modelMetadata?: ModelMetadataWhereUniqueInput | null;
}

export { DetectionResultUpdateInput as DetectionResultUpdateInput };
