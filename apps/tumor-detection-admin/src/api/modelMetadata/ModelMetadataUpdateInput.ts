import { DetectionResultUpdateManyWithoutModelMetadataItemsInput } from "./DetectionResultUpdateManyWithoutModelMetadataItemsInput";
import { InputJsonValue } from "../../types";

export type ModelMetadataUpdateInput = {
  detectionResults?: DetectionResultUpdateManyWithoutModelMetadataItemsInput;
  parameters?: InputJsonValue;
  trainedAt?: Date | null;
  version?: string | null;
};
