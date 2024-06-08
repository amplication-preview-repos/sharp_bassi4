import { ImageDataWhereUniqueInput } from "../imageData/ImageDataWhereUniqueInput";
import { ModelMetadataWhereUniqueInput } from "../modelMetadata/ModelMetadataWhereUniqueInput";

export type DetectionResultCreateInput = {
  detectionScore?: number | null;
  imageData?: ImageDataWhereUniqueInput | null;
  isTumorDetected?: boolean | null;
  modelMetadata?: ModelMetadataWhereUniqueInput | null;
};
