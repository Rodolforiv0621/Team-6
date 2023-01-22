//import { IonContent, IonList } from "@ionic/core/components";
import {
  IonCol,
  IonGrid,
  IonHeader,
  IonIcon,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  IonButton,
  IonItem,
  IonLabel,
  IonList,
  IonContent,
  IonSelectOption,
  IonSelect,
  IonInput,
  IonToggle,
  IonModal,
  IonCha
} from "@ionic/react";
import {
  arrowBackOutline,
  linkSharp,
  mail,
  documentTextOutline,
} from "ionicons/icons";
import { useState } from "react";



function Settings() {
const [passcode, setPasscode] = useState(0);
const [isChecked, setIsChecked] = useState(false);
const togglePasscodeCheck = () =>{
  
  setIsChecked(!isChecked);
  localStorage.setItem("isAuthed", JSON.stringify(isChecked));
  console.log("coming from toggle: " +JSON.parse(localStorage.getItem("isAuthed")));
  //return passcodeIsChecked;
}
const changePasscode = (e) =>{
  //console.log(e.target.value)
  
  //localStorage.setItem("passcode", JSON.stringify(passcode));
  if(isChecked){
    setPasscode(e.target.value);
    localStorage.setItem("passcode", JSON.stringify(passcode));
    //console.log(JSON.parse(localStorage.getItem("passcode")));
  }else{
    setPasscode(-1);
    localStorage.setItem("passcode", JSON.stringify(passcode));
    //console.log(JSON.parse(localStorage.getItem("passcode")));
  }
}
const [isOpen, setIsOpen] = useState(false);
function toggle() {
  let temp = isOpen
  setIsOpen(!temp)
}

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
                <IonTitle size="small">Settings</IonTitle>
              </IonCol>
              <IonCol size="2"></IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <IonList>
          <IonItem class="ionlabel padding">
            <IonLabel>Sound</IonLabel>
            <IonSelect placeholder="Make a Selection">
              <IonSelectOption value="">No Sound</IonSelectOption>
              <IonSelectOption value="nes">Ascending</IonSelectOption>
              <IonSelectOption value="n64">Chime</IonSelectOption>
              <IonSelectOption value="ps">Marimba</IonSelectOption>
              <IonSelectOption value="genesis">Merry</IonSelectOption>
              <IonSelectOption value="saturn">Tri-tone</IonSelectOption>
              <IonSelectOption value="snes">Xylophone</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem class="ionlabel padding">
            <IonLabel slot="start">Snooze Duration: </IonLabel>
            <IonInput placeholder="Enter minutes" type="number"></IonInput>
            <IonLabel slot="end">min</IonLabel>
          </IonItem>

          <IonItem class="ionlabel padding">
            <IonLabel>Gap Between Drops:</IonLabel>
            <IonInput placeholder=" Enter minutes" type="number"></IonInput>
            <IonLabel slot="end">min</IonLabel>
          </IonItem>
        </IonList>

        <div style={{ height: "5vh" }}></div>
        <IonItem>
            <IonLabel>Passcode</IonLabel>
            <IonToggle slot="end"   onClick={() => {
              toggle()
              togglePasscodeCheck();
            } }></IonToggle>
            <IonModal isOpen={isOpen}>
            <IonHeader>
            <IonToolbar>
              <IonTitle>Enter New Passcode</IonTitle>
                <IonButton slot="end" onClick={() => setIsOpen(false)}>Close</IonButton>
            </IonToolbar>
          </IonHeader>
          <div style={{ height: "30vh" }}></div>
          <IonContent className="ion-text-center ion-justify-content-center ion-align-items-center">
          <IonInput placeholder="***" type="number"  onIonChange={changePasscode}></IonInput>
            <IonButton routerLink="/home" color="medium" onClick={() => setIsOpen(false)}>
                    Submit
            </IonButton>
          </IonContent>
        </IonModal>
            
          </IonItem>
        
        <div style={{ height: "5vh" }}></div>
        <IonList>
          <IonItem href="Https://www.eyedropalarm.com/how-to-put-in-eyedrops.html">
            <IonLabel>How To Put In EyeDrops </IonLabel>
            <IonIcon icon={linkSharp}></IonIcon>
          </IonItem>
          <IonItem href="https://www.eyedropalarm.com/#help">
            <IonLabel>Help </IonLabel>
            <IonIcon icon={linkSharp}></IonIcon>
          </IonItem>

          <IonItem routerLink="/legal">
            <IonLabel>Legal </IonLabel>
            <IonIcon icon={documentTextOutline}></IonIcon>
          </IonItem>
          <IonItem href="https://www.eyedropalarm.com/#help">
            <IonLabel>Contact Support</IonLabel>
            <IonIcon icon={mail}></IonIcon>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
}
export default Settings;
