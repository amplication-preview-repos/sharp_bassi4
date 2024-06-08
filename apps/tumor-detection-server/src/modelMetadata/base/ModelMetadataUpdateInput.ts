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
import { DetectionResultUpdateManyWithoutModelMetadataItemsInput } from "./DetectionResultUpdateManyWithoutModelMetadataItemsInput";
import { ValidateNested, IsOptional, IsDate, IsString } from "class-validator";
import { Type } from "class-transformer";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";

@InputType()
class ModelMetadataUpdateInput {
  @ApiProperty({
    required: false,
    type: () => DetectionResultUpdateManyWithoutModelMetadataItemsInput,
  })
  @ValidateNested()
  @Type(() => DetectionResultUpdateManyWithoutModelMetadataItemsInput)
  @IsOptional()
  @Field(() => DetectionResultUpdateManyWithoutModelMetadataItemsInput, {
    nullable: true,
  })
  detectionResults?: DetectionResultUpdateManyWithoutModelMetadataItemsInput;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  parameters?: InputJsonValue;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  trainedAt?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  version?: string | null;
}

export { ModelMetadataUpdateInput as ModelMetadataUpdateInput };
