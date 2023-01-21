
import {
  IonCol,
  IonGrid,
  IonHeader,
  IonIcon,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  IonButton
} from "@ionic/react";
import { arrowBackOutline } from "ionicons/icons";

function Settings() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonGrid class="ion-text-center ion-justify-content-center">
            <IonRow>
              <IonCol size="2">
                <IonButton href="/home"><IonIcon icon={arrowBackOutline} size="large" /></IonButton>
              </IonCol>
              <IonCol size="8">
                <IonTitle>Settings</IonTitle>
              </IonCol>
              <IonCol size="2"></IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonHeader>
    </IonPage>
  );
}
export default Settings;
