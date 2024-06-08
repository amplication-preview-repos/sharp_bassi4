import { DetectionResult as TDetectionResult } from "../api/detectionResult/DetectionResult";

export const DETECTIONRESULT_TITLE_FIELD = "id";

export const DetectionResultTitle = (record: TDetectionResult): string => {
  return record.id?.toString() || String(record.id);
};
