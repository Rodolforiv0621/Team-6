
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
import medication from "../data/medication";

function AddEyedrop({ eyedrop }) {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonGrid class="ion-text-center ion-justify-content-center">
            <IonRow>
              <IonCol size="2">
                <IonButton routerLink="/home" color="medium"><IonIcon icon={arrowBackOutline} /></IonButton>
              </IonCol>
              <IonCol size="8">
                <IonTitle>Add Eyedrop</IonTitle>
              </IonCol>
              <IonCol size="2">
                <IonButton routerLink="/AddEyedropForm" color="medium"><IonIcon icon={add} /></IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <IonSearchbar></IonSearchbar>
        {medication.map(item => (<IonButton expand="block" color="medium">{`${item}`}</IonButton>))}
      </IonContent>
    </IonPage>
    
  );
}

export default AddEyedrop;
