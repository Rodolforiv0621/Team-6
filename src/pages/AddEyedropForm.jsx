import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { medkit, arrowBackOutline } from "ionicons/icons";
import { useState } from "react";

function AddEyedropForm() {
  const [savedMedicine, setSavedMedicine] = useState(true);
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
                <IonTitle>Add Eyedrop</IonTitle>
              </IonCol>
              <IonCol size="2"></IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        {!savedMedicine ? (
          <IonItem>
            <IonLabel>
              <h1>H1 Heading</h1>
              <p>Paragraph</p>
            </IonLabel>
            <IonIcon icon={medkit} slot="start"></IonIcon>
          </IonItem>
        ) : (
          <IonItem>
            <IonLabel>
              <ion-input placeholder="Eyedrop Name"></ion-input>
            </IonLabel>
            <IonIcon icon={medkit} slot="start"></IonIcon>
          </IonItem>
        )}
        {/* add the form input here */}
      </IonContent>
    </IonPage>
  );
}

export default AddEyedropForm;
