import {
  IonButtons,
  IonButton,
  IonCol,
  IonContent,
  IonDatetime,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  useIonPicker,
  IonRow,
  IonSegment,
  IonSegmentButton,
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
              <IonCol size="1">
                <IonIcon icon={arrowBackOutline} size="large" />
              </IonCol>
              <IonCol size="10">
                {savedMedicine ? (
                  <IonTitle>Add Eyedrop</IonTitle>
                ) : (
                  <IonTitle>manual Entry</IonTitle>
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
          <IonLabel><h1>Eye Drop Name</h1>
          <IonInput placeholder="Enter Eyedrop name"></IonInput>
          </IonLabel>
        </IonItem>
        ) : (
          <IonItem>
            <IonLabel>
              <ion-input placeholder="Eyedrop Name"></ion-input>
            </IonLabel>
            <IonIcon icon={medkit} slot="start"></IonIcon>
          </IonItem>
        )}
        {/* add the form input here */        
        (
          <IonItem>
            <IonLabel>
              <h1>which eye?</h1>
              <p>            
              <IonToolbar>
          <IonGrid>
            <IonRow>
              
              <IonCol size="12">
                <IonSegment value="default">
                  <IonSegmentButton value="left">
                    <IonLabel>Left</IonLabel>
                  </IonSegmentButton>
                  <IonSegmentButton value="default">
                    <IonLabel>Both</IonLabel>
                  </IonSegmentButton>
                  <IonSegmentButton value="right">
                    <IonLabel>right</IonLabel>
                  </IonSegmentButton>
                </IonSegment>
              </IonCol>
              
            </IonRow>
          </IonGrid>
        </IonToolbar>              </p>
            </IonLabel>
          </IonItem>
        )} 
        {/* add the form input here */  
              
        (
          <IonItem>
            <IonLabel>
              <h1>Start Date</h1>
              <p>            
                <IonDatetime presentation="date" preferWheel={true}></IonDatetime>
              </p>
            </IonLabel>
          </IonItem>
        )} 
        {(
          <IonItem>
            <IonLabel>
              <h1>Number of days</h1>
              <ion-input placeholder="Number of days"></ion-input>
            </IonLabel>
          </IonItem>
        )}
        {(
          <IonItem>
            <IonLabel>
              <h1>How often?</h1>
              <ion-input placeholder="Times per day"></ion-input>
            </IonLabel>
          </IonItem>
        )}
        {
        (
          <IonItem>
            <IonLabel>
              <h1>Alarm</h1>
              <p>            
                <IonDatetime presentation="time" preferWheel={true}></IonDatetime>
              </p>
            </IonLabel>
          </IonItem>
        )}
      </IonContent>
    </IonPage>
  );
}

export default AddEyedropForm;
