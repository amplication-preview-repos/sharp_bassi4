import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
  BooleanField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { IMAGEDATA_TITLE_FIELD } from "../imageData/ImageDataTitle";
import { MODELMETADATA_TITLE_FIELD } from "../modelMetadata/ModelMetadataTitle";

export const DetectionResultList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"DetectionResults"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
