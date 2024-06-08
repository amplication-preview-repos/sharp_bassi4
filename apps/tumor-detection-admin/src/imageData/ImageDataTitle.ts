import { ImageData as TImageData } from "../api/imageData/ImageData";

export const IMAGEDATA_TITLE_FIELD = "id";

export const ImageDataTitle = (record: TImageData): string => {
  return record.id?.toString() || String(record.id);
};
