import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";
import AddEyedrop from "./pages/AddEyedrop";
import Settings from "./pages/Settings";
import AddEyedropForm from "./pages/AddEyedropForm";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import legal from "./pages/legal";
import { useState } from "react";
import PassScreen from "./pages/PassScreen";

setupIonicReact();
//const {passcodeIsChecked} = Settings()
function App() {
  const [myDropData, setMyDropData] = useState([]);

  function addDropData(dropData) {
    let temp = [...myDropData];
    temp.push(dropData);
    setMyDropData(temp);
  }

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          {/* <Route
            exact
            path="/"
            render={() => {
              return 1 + 2 === 2 ? <PassScreen /> : <Home />;
            }}
          /> */}
          <Route exact path="/home" component={Home} />
          <Route path="/addeyedrop" component={AddEyedrop}></Route>
          <Route
            exact
            path="/addeyedrop/:id"
            component={AddEyedropForm}
          ></Route>
          <Route path="/settings" component={Settings} />
          <Route path="/legal" component={legal} />
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
}

export default App;
