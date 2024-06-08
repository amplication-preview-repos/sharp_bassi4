import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ImageDataWhereUniqueInput } from "../imageData/ImageDataWhereUniqueInput";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { ModelMetadataWhereUniqueInput } from "../modelMetadata/ModelMetadataWhereUniqueInput";

export type DetectionResultWhereInput = {
  detectionScore?: FloatNullableFilter;
  id?: StringFilter;
  imageData?: ImageDataWhereUniqueInput;
  isTumorDetected?: BooleanNullableFilter;
  modelMetadata?: ModelMetadataWhereUniqueInput;
};
