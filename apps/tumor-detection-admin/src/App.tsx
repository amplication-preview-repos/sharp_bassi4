import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ImageDataList } from "./imageData/ImageDataList";
import { ImageDataCreate } from "./imageData/ImageDataCreate";
import { ImageDataEdit } from "./imageData/ImageDataEdit";
import { ImageDataShow } from "./imageData/ImageDataShow";
import { ModelMetadataList } from "./modelMetadata/ModelMetadataList";
import { ModelMetadataCreate } from "./modelMetadata/ModelMetadataCreate";
import { ModelMetadataEdit } from "./modelMetadata/ModelMetadataEdit";
import { ModelMetadataShow } from "./modelMetadata/ModelMetadataShow";
import { DetectionResultList } from "./detectionResult/DetectionResultList";
import { DetectionResultCreate } from "./detectionResult/DetectionResultCreate";
import { DetectionResultEdit } from "./detectionResult/DetectionResultEdit";
import { DetectionResultShow } from "./detectionResult/DetectionResultShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { httpAuthProvider } from "./auth-provider/ra-auth-http";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"TumorDetection"}
        dataProvider={dataProvider}
        authProvider={httpAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="ImageData"
          list={ImageDataList}
          edit={ImageDataEdit}
          create={ImageDataCreate}
          show={ImageDataShow}
        />
        <Resource
          name="ModelMetadata"
          list={ModelMetadataList}
          edit={ModelMetadataEdit}
          create={ModelMetadataCreate}
          show={ModelMetadataShow}
        />
        <Resource
          name="DetectionResult"
          list={DetectionResultList}
          edit={DetectionResultEdit}
          create={DetectionResultCreate}
          show={DetectionResultShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
