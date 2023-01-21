import {
  IonButton,
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
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";
import { add, cog } from "ionicons/icons";

function Home() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonGrid>
            <IonRow>
              <IonCol size="2">
                <IonIcon icon={cog} size="large" />
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
                <IonIcon icon={add} size="large" />
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
