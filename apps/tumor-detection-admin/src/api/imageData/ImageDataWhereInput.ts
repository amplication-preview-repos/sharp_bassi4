import { DetectionResultListRelationFilter } from "../detectionResult/DetectionResultListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ImageDataWhereInput = {
  detectionResults?: DetectionResultListRelationFilter;
  filePath?: JsonFilter;
  id?: StringFilter;
  uploadedAt?: DateTimeNullableFilter;
};
