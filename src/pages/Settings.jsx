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
  IonNote,
} from "@ionic/react";
import { arrowBackOutline, linkSharp, mail, documentTextOutline } from "ionicons/icons";

function Settings() {
  return (
    <IonPage>
      <IonHeader >
        <IonToolbar>
          <IonGrid>
            <IonRow class="ion-text-center ion-justify-content-center ion-align-items-center">
              <IonCol size="2">
                <IonButton routerLink="/home" color="medium">
                  <IonIcon icon={arrowBackOutline} />
                </IonButton>
              </IonCol>
              <IonCol size="8">
                <IonTitle>Settings</IonTitle>
              </IonCol>
              <IonCol size="2"></IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <IonList>
          <IonItem class = "ionlabel padding">
          <IonLabel >Sound</IonLabel>
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
        <IonItem class = "ionlabel padding">
          <IonLabel  slot="start">Snooze Duration: </IonLabel>
          <IonInput placeholder="Enter minutes" type="number"></IonInput><IonLabel slot="end">min</IonLabel>
          <IonNote slot="error">Invalid integer </IonNote>
        </IonItem>
        
        <IonItem class = "ionlabel padding">
          <IonLabel>Gap Between Drops:</IonLabel>
          <IonInput placeholder=" Enter minutes" type="number"></IonInput><IonLabel slot="end">min</IonLabel>
          <IonNote slot="error">Invalid integer</IonNote>
        </IonItem>
        </IonList>
        
       <div style={{height: "5vh"}}></div>
        <IonList>
        <IonItem href="Https://www.eyedropalarm.com/how-to-put-in-eyedrops.html">
        <IonLabel>How To Put In EyeDrops </IonLabel><IonIcon icon={linkSharp}></IonIcon>
      </IonItem>
      <IonItem href="https://www.eyedropalarm.com/#help">
        <IonLabel>Help </IonLabel><IonIcon icon={linkSharp}></IonIcon>
      </IonItem>
        
      <IonItem routerLink="/legal">
        <IonLabel>Legal </IonLabel><IonIcon icon={documentTextOutline}></IonIcon>
      </IonItem>
      <IonItem href="https://www.eyedropalarm.com/#help">
        <IonLabel>Contact Support</IonLabel><IonIcon icon={mail}></IonIcon>
      </IonItem>
        </IonList>
        
        </IonContent>
      
    </IonPage>
  );
}
export default Settings;
