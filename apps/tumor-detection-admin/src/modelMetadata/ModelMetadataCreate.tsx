import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { DetectionResultTitle } from "../detectionResult/DetectionResultTitle";

export const ModelMetadataCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="detectionResults"
          reference="DetectionResult"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DetectionResultTitle} />
        </ReferenceArrayInput>
        <div />
        <DateTimeInput label="trainedAt" source="trainedAt" />
        <TextInput label="version" source="version" />
      </SimpleForm>
    </Create>
  );
};
