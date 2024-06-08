import { DetectionResult } from "../detectionResult/DetectionResult";
import { JsonValue } from "type-fest";

export type ImageData = {
  createdAt: Date;
  detectionResults?: Array<DetectionResult>;
  filePath: JsonValue;
  id: string;
  updatedAt: Date;
  uploadedAt: Date | null;
};
