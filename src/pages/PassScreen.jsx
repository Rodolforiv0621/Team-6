import {
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonPage,
    IonRow,
    IonTitle,
    IonToolbar,
    IonButton,
    IonInput
    
  } from "@ionic/react";
  import { arrowBackOutline, add, eyedropOutline } from "ionicons/icons";
  import "./Home.css";
  

  function PassScreen() {
      //page used to for user to enter their passocode
    return (
      <IonPage>
        <IonHeader>
        <IonToolbar>
          <IonGrid>
            <IonRow class="ion-text-center ion-justify-content-center ion-align-items-center">
              {/* Title */}
              <IonCol size="10">
                <IonTitle size="small">Enter Passcode</IonTitle>
              </IonCol>
              
            </IonRow>
          </IonGrid>
        </IonToolbar>
        </IonHeader>
        <div style={{ height: "30vh" }}></div>
        <IonContent class="ion-text-center ion-justify-content-center ion-align-items-center">
          {/* User input passcode */}
        <IonInput placeholder="****" type="number"></IonInput>
            <IonButton routerLink="/home" color="medium">
                    Submit
            </IonButton>
        </IonContent>
      </IonPage>
    );
  }
  
  export default PassScreen;