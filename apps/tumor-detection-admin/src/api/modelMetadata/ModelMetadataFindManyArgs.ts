import { ModelMetadataWhereInput } from "./ModelMetadataWhereInput";
import { ModelMetadataOrderByInput } from "./ModelMetadataOrderByInput";

export type ModelMetadataFindManyArgs = {
  where?: ModelMetadataWhereInput;
  orderBy?: Array<ModelMetadataOrderByInput>;
  skip?: number;
  take?: number;
};
