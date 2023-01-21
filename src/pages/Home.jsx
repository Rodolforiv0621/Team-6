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

function Home() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonGrid>
            <IonRow class="ion-text-center ion-justify-content-center ion-align-items-center">
              <IonCol size="2">
                <IonButton routerLink="/settings" color="medium">
                  <IonIcon icon={cog} />
                </IonButton>
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
                <IonButton routerLink="/AddEyedrop" color="medium">
                  <IonIcon icon={add} />
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
