import { ImageDataWhereInput } from "./ImageDataWhereInput";
import { ImageDataOrderByInput } from "./ImageDataOrderByInput";

export type ImageDataFindManyArgs = {
  where?: ImageDataWhereInput;
  orderBy?: Array<ImageDataOrderByInput>;
  skip?: number;
  take?: number;
};
