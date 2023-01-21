import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonLabel,
  IonPage,
  IonRow,
  IonSegment,
  IonSegmentButton,
  IonToolbar,
  IonButton,
} from "@ionic/react";
import "./Home.css";
import { add, cog } from "ionicons/icons";
import { useHistory } from "react-router-dom";
//import { IonButton } from "@ionic/core/components";
//const history = useHistory();
function Home() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonGrid>
            <IonRow>
              <IonCol size="2">
                <IonButton href="/settings"><IonIcon icon={cog} size="large" /></IonButton>
              </IonCol>
              <IonCol size="8">
                <IonSegment value="default">
                  <IonSegmentButton value="default">
                    <IonLabel>Schedule</IonLabel>
                  </IonSegmentButton>
                  <IonSegmentButton value="segment">
                    <IonLabel>My Drops</IonLabel>
                  </IonSegmentButton>
                </IonSegment>
              </IonCol>
              <IonCol size="2">
                <IonButton href="/AddEyedrop">
                  <IonIcon icon={add} size="large" /> 
                  </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding"></IonContent>
    </IonPage>
  );
}

export default Home;
