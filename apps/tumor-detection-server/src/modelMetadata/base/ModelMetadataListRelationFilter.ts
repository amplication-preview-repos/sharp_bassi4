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
import { ModelMetadataWhereInput } from "./ModelMetadataWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ModelMetadataListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ModelMetadataWhereInput,
  })
  @ValidateNested()
  @Type(() => ModelMetadataWhereInput)
  @IsOptional()
  @Field(() => ModelMetadataWhereInput, {
    nullable: true,
  })
  every?: ModelMetadataWhereInput;

  @ApiProperty({
    required: false,
    type: () => ModelMetadataWhereInput,
  })
  @ValidateNested()
  @Type(() => ModelMetadataWhereInput)
  @IsOptional()
  @Field(() => ModelMetadataWhereInput, {
    nullable: true,
  })
  some?: ModelMetadataWhereInput;

  @ApiProperty({
    required: false,
    type: () => ModelMetadataWhereInput,
  })
  @ValidateNested()
  @Type(() => ModelMetadataWhereInput)
  @IsOptional()
  @Field(() => ModelMetadataWhereInput, {
    nullable: true,
  })
  none?: ModelMetadataWhereInput;
}
export { ModelMetadataListRelationFilter as ModelMetadataListRelationFilter };
