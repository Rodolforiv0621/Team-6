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
  IonList,
  IonItem,
  IonLabel,
} from "@ionic/react";
import { arrowBackOutline, add, eyedropOutline } from "ionicons/icons";
import "./Home.css";
import medication from "../data/medication";

function AddEyedrop({ eyedrop }) {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonGrid>
            <IonRow class="ion-text-center ion-justify-content-center ion-align-items-center">
              <IonCol size="2">
                <IonButton routerLink="/home" color="medium">
                  <IonIcon icon={arrowBackOutline} />
                </IonButton>
              </IonCol>
              <IonCol size="8">
                <IonTitle>Add Eyedrop</IonTitle>
              </IonCol>
              <IonCol size="2">
                <IonButton routerLink="/addeyedrop/manual" color="medium">
                  <IonIcon icon={add} />
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <IonSearchbar></IonSearchbar>
        <IonList lines="full">
          {medication.map((item) => (
            <IonItem key={item} routerLink={`/addeyedrop/${item}`}>
              <IonLabel>{`${item}`}</IonLabel>
              <IonIcon icon={eyedropOutline} slot="start"></IonIcon>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
}

export default AddEyedrop;
