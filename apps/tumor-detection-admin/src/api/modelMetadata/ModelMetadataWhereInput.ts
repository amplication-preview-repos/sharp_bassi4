import { DetectionResultListRelationFilter } from "../detectionResult/DetectionResultListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ModelMetadataWhereInput = {
  detectionResults?: DetectionResultListRelationFilter;
  id?: StringFilter;
  parameters?: JsonFilter;
  trainedAt?: DateTimeNullableFilter;
  version?: StringNullableFilter;
};
