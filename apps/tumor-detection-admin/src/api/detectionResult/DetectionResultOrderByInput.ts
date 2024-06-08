import { SortOrder } from "../../util/SortOrder";

export type DetectionResultOrderByInput = {
  createdAt?: SortOrder;
  detectionScore?: SortOrder;
  id?: SortOrder;
  imageDataId?: SortOrder;
  isTumorDetected?: SortOrder;
  modelMetadataId?: SortOrder;
  updatedAt?: SortOrder;
};
