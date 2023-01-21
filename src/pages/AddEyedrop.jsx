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
} from "@ionic/react";
import { arrowBackOutline, add, atOutline } from "ionicons/icons";

function AddEyedrop() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonGrid class="ion-text-center ion-justify-content-center">
            <IonRow>
              <IonCol size="2">
                <IonIcon icon={arrowBackOutline} size="large" />
              </IonCol>
              <IonCol size="8">
                <IonTitle style={{ width: "auto" }}>Add Eyedrop</IonTitle>
              </IonCol>
              <IonCol size="2">
                <IonIcon icon={add} size="large" />
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
