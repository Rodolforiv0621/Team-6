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
  IonButton,
} from "@ionic/react";
import { medkit, arrowBackOutline } from "ionicons/icons";
import { useEffect, useState } from "react";

function AddEyedropForm({ match }) {
  const [savedMedicine, setSavedMedicine] = useState(true);

  useEffect(() => {
    if (match.params.id === "manual") {
      setSavedMedicine(false);
    }
  });
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonGrid>
            <IonRow class="ion-text-start ion-justify-content-center ion-align-items-center">
              <IonCol size="2">
                <IonButton routerLink="/addeyedrop" color="medium">
                  <IonIcon icon={arrowBackOutline} />
                </IonButton>
              </IonCol>
              <IonCol size="8">
                {savedMedicine ? (
                  <IonTitle>Add Eyedrop</IonTitle>
                ) : (
                  <IonTitle>Manual Entry</IonTitle>
                )}
              </IonCol>
              <IonCol size="2"></IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        {savedMedicine ? (
          <IonItem>
            <IonLabel>
              <h1>{match.params.id}</h1>
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
