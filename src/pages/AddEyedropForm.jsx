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
  IonSegment,
  IonSegmentButton,
  IonDatetime,
} from "@ionic/react";
import { eyedropOutline, arrowBackOutline } from "ionicons/icons";
import { useEffect, useState } from "react";

function AddEyedropForm({ match }) {
  const date = new Date();
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [savedMedicine, setSavedMedicine] = useState(true);
  const [medicationEye, setMedicationEye] = useState("both");
  const [startDate, setStartDate] = useState(
    `${month[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`
  );

  useEffect(() => {
    if (match.params.id === "manual") {
      setSavedMedicine(false);
    } else {
      setSavedMedicine(true);
    }
  });
  // useEffect(() => {
  //   console.log(startDate);
  // }, [startDate]);

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
                  <IonTitle size="small">Add Eyedrop</IonTitle>
                ) : (
                  <IonTitle size="small">Manual Entry</IonTitle>
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
            <IonIcon icon={eyedropOutline} slot="start" size="large"></IonIcon>
          </IonItem>
        ) : (
          <IonItem>
            <IonLabel>
              <ion-input placeholder="Eyedrop Name"></ion-input>
            </IonLabel>
            <IonIcon icon={eyedropOutline} slot="start"></IonIcon>
          </IonItem>
        )}
        <IonItem>
          <IonLabel>
            <h1>Which Eye?</h1>
            <IonToolbar>
              <IonGrid>
                <IonRow>
                  <IonCol size="12">
                    <IonSegment>
                      <IonSegmentButton
                        value={`${
                          medicationEye === "Left" ? "default" : "Left"
                        }`}
                        onClick={() => setMedicationEye("Left")}
                      >
                        <IonLabel>Left</IonLabel>
                      </IonSegmentButton>
                      <IonSegmentButton
                        value={`${
                          medicationEye === "both" ? "default" : "both"
                        }`}
                        onClick={() => setMedicationEye("Both")}
                      >
                        <IonLabel>Both</IonLabel>
                      </IonSegmentButton>
                      <IonSegmentButton
                        value={`${
                          medicationEye === "Right" ? "default" : "Right"
                        }`}
                        onClick={() => setMedicationEye("Right")}
                      >
                        <IonLabel>Right</IonLabel>
                      </IonSegmentButton>
                    </IonSegment>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonToolbar>
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>
            <h1>Start Date</h1>
            <IonDatetime presentation="date" preferWheel={true}></IonDatetime>
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>
            <h1>Number of days</h1>
            <ion-input placeholder="Number of days" type="number"></ion-input>
          </IonLabel>
        </IonItem>

        <IonItem>
          <IonLabel>
            <h1>How often?</h1>
            <ion-input placeholder="Times per day" type="number"></ion-input>
          </IonLabel>
        </IonItem>

        <IonItem>
          <IonLabel>
            <h1>Alarm</h1>
            <p>
              <IonDatetime presentation="time" preferWheel={true}></IonDatetime>
            </p>
          </IonLabel>
        </IonItem>
        <IonButton expand="block">Submit</IonButton>
      </IonContent>
    </IonPage>
  );
}

export default AddEyedropForm;
