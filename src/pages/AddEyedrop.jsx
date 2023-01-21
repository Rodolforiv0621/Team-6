
import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonPage,
  IonRow,
  IonSearchbar,
  IonTitle,
  IonToolbar,
  IonButton,
} from "@ionic/react";
import { arrowBackOutline, add } from "ionicons/icons";
import "./Home.css";

function AddEyedrop() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonGrid class="ion-text-center ion-justify-content-center">
            <IonRow>
              <IonCol size="2">
                <IonButton routerLink="/home"><IonIcon icon={arrowBackOutline} size="large" /></IonButton>
              </IonCol>
              <IonCol size="8">
                <IonTitle>Add Eyedrop</IonTitle>
              </IonCol>
              <IonCol size="2">
                <IonButton routerLink="/AddEyedropForm"><IonIcon icon={add} size="large" /></IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonSearchbar></IonSearchbar>
      </IonContent>
    </IonPage>
  );
}

export default AddEyedrop;
