import { ModelMetadata as TModelMetadata } from "../api/modelMetadata/ModelMetadata";

export const MODELMETADATA_TITLE_FIELD = "version";

export const ModelMetadataTitle = (record: TModelMetadata): string => {
  return record.version?.toString() || String(record.id);
};
