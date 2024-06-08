import { DetectionResultCreateNestedManyWithoutImageDataItemsInput } from "./DetectionResultCreateNestedManyWithoutImageDataItemsInput";
import { InputJsonValue } from "../../types";

export type ImageDataCreateInput = {
  detectionResults?: DetectionResultCreateNestedManyWithoutImageDataItemsInput;
  filePath?: InputJsonValue;
  uploadedAt?: Date | null;
};
