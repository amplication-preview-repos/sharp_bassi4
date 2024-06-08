import { ImageData } from "../imageData/ImageData";
import { ModelMetadata } from "../modelMetadata/ModelMetadata";

export type DetectionResult = {
  createdAt: Date;
  detectionScore: number | null;
  id: string;
  imageData?: ImageData | null;
  isTumorDetected: boolean | null;
  modelMetadata?: ModelMetadata | null;
  updatedAt: Date;
};
