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
                {/* Button is used to route back to home page */}
                <IonButton routerLink="/home" color="medium">
                  <IonIcon icon={arrowBackOutline} />
                </IonButton>
              </IonCol>
              {/* Title */}
              <IonCol size="8">
                <IonTitle size="small">Add Eyedrop</IonTitle>
              </IonCol>
              {/* Button used to add either manual medication or one from list */}
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
        {/* Mapped medication from txt file to items in app */}
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
