import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  BooleanInput,
} from "react-admin";

import { ImageDataTitle } from "../imageData/ImageDataTitle";
import { ModelMetadataTitle } from "../modelMetadata/ModelMetadataTitle";

export const DetectionResultEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="detectionScore" source="detectionScore" />
        <ReferenceInput
          source="imageData.id"
          reference="ImageData"
          label="ImageData"
        >
          <SelectInput optionText={ImageDataTitle} />
        </ReferenceInput>
        <BooleanInput label="isTumorDetected" source="isTumorDetected" />
        <ReferenceInput
          source="modelMetadata.id"
          reference="ModelMetadata"
          label="ModelMetadata"
        >
          <SelectInput optionText={ModelMetadataTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
