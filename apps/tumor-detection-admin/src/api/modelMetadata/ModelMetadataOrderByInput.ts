import { SortOrder } from "../../util/SortOrder";

export type ModelMetadataOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  parameters?: SortOrder;
  trainedAt?: SortOrder;
  updatedAt?: SortOrder;
  version?: SortOrder;
};
