import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  BooleanInput,
} from "react-admin";

import { ImageDataTitle } from "../imageData/ImageDataTitle";
import { ModelMetadataTitle } from "../modelMetadata/ModelMetadataTitle";

export const DetectionResultCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
