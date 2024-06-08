import { DetectionResult } from "../detectionResult/DetectionResult";
import { JsonValue } from "type-fest";

export type ModelMetadata = {
  createdAt: Date;
  detectionResults?: Array<DetectionResult>;
  id: string;
  parameters: JsonValue;
  trainedAt: Date | null;
  updatedAt: Date;
  version: string | null;
};
