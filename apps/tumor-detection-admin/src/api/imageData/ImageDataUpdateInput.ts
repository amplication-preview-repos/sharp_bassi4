import { DetectionResultUpdateManyWithoutImageDataItemsInput } from "./DetectionResultUpdateManyWithoutImageDataItemsInput";
import { InputJsonValue } from "../../types";

export type ImageDataUpdateInput = {
  detectionResults?: DetectionResultUpdateManyWithoutImageDataItemsInput;
  filePath?: InputJsonValue;
  uploadedAt?: Date | null;
};
