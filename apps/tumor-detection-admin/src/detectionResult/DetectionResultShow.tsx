import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  BooleanField,
} from "react-admin";

import { IMAGEDATA_TITLE_FIELD } from "../imageData/ImageDataTitle";
import { MODELMETADATA_TITLE_FIELD } from "../modelMetadata/ModelMetadataTitle";

export const DetectionResultShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="detectionScore" source="detectionScore" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="ImageData"
          source="imagedata.id"
          reference="ImageData"
        >
          <TextField source={IMAGEDATA_TITLE_FIELD} />
        </ReferenceField>
        <BooleanField label="isTumorDetected" source="isTumorDetected" />
        <ReferenceField
          label="ModelMetadata"
          source="modelmetadata.id"
          reference="ModelMetadata"
        >
          <TextField source={MODELMETADATA_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
