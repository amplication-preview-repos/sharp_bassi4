import { DetectionResultCreateNestedManyWithoutModelMetadataItemsInput } from "./DetectionResultCreateNestedManyWithoutModelMetadataItemsInput";
import { InputJsonValue } from "../../types";

export type ModelMetadataCreateInput = {
  detectionResults?: DetectionResultCreateNestedManyWithoutModelMetadataItemsInput;
  parameters?: InputJsonValue;
  trainedAt?: Date | null;
  version?: string | null;
};
