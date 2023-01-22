//TODO use alarm/alert component
//Badge icon if possible
//Maybe themes for eye sensitivty under settings
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
  IonInput,
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
  const [manualName, setManualName] = useState("");
  const [medicationEye, setMedicationEye] = useState("both");
  const [startDate, setStartDate] = useState("");
  const [numberOfDays, setNumberOfDays] = useState("");
  const [timesPerDay, setTimesPerDay] = useState("");
  const [alarm, setAlarm] = useState("");
  const [isLocalStorageChange, setIsLocalStorageChange] = useState(false);

  function handleSubmit() {
    setIsLocalStorageChange(true);
    console.log(medicationEye);
    console.log(startDate);
    console.log(numberOfDays);
    console.log(timesPerDay);
    console.log(alarm);
    let medName = savedMedicine ? match.params.id : manualName;
    let tempData = {
      medName: medName,
      eye: medicationEye,
      start: startDate,
      days: numberOfDays,
      reps: timesPerDay,
      alarm: alarm,
    };
    localStorage.setItem("dropData", JSON.stringify(tempData));
    setIsLocalStorageChange(false);
    console.log(localStorage.getItem("dropData"));
  }

  useEffect(() => {
    if (match.params.id === "manual") {
      setSavedMedicine(false);
    } else {
      setSavedMedicine(true);
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
              <p>Saved Medicine</p>
            </IonLabel>
            <IonIcon icon={eyedropOutline} slot="start" size="large"></IonIcon>
          </IonItem>
        ) : (
          <IonItem>
            <IonLabel>
              <IonInput
                placeholder="Eyedrop Name"
                onIonInput={(e) => setManualName(e.target.value)}
              ></IonInput>
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
                          medicationEye === "Both" ? "default" : "Both"
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
            <IonDatetime
              presentation="date"
              preferWheel={true}
              onIonChange={(e) => setStartDate(e.detail.value)}
            ></IonDatetime>
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>
            <h1>Number of days</h1>
            <IonInput
              placeholder="Number of days"
              type="number"
              onIonInput={(e) => setNumberOfDays(e.target.value)}
            ></IonInput>
          </IonLabel>
        </IonItem>

        <IonItem>
          <IonLabel>
            <h1>How often?</h1>
            <IonInput
              placeholder="Times per day"
              type="number"
              onIonInput={(e) => setTimesPerDay(e.target.value)}
            ></IonInput>
          </IonLabel>
        </IonItem>

        <IonItem>
          <IonLabel>
            <h1>Alarm</h1>
            <IonDatetime
              presentation="time"
              preferWheel={true}
              onIonChange={(e) => setAlarm(e.detail.value)}
            ></IonDatetime>
          </IonLabel>
        </IonItem>
        <IonButton expand="block" onClick={() => handleSubmit()}>
          Submit
        </IonButton>
      </IonContent>
    </IonPage>
  );
}

export default AddEyedropForm;
