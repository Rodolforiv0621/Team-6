import {
  IonAlert,
  IonCheckbox,
  IonCol,
  IonContent,
  IonDatetime,
  IonDatetimeButton,
  IonGrid,
  IonHeader,
  IonIcon,
  IonLabel,
  IonModal,
  IonPage,
  IonRow,
  IonSegment,
  IonSegmentButton,
  IonToolbar,
  IonButton,
  IonList,
  IonListHeader,
  IonItem,
  IonAvatar,
  IonTitle,
  IonItemGroup,
  IonItemDivider,
  useIonAlert,
  IonFab,
  IonFabButton,
} from "@ionic/react";
import { Virtuoso } from "react-virtuoso";
import "./Home.css";
import { add, cog } from "ionicons/icons";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { add, cog, refresh, eyedropOutline } from "ionicons/icons";
import { useEffect, useState } from "react";


/**
 * calculates the current date + hour and compares to 
 * alarm date + hour
 * @returns currentDate and AlarmDate
 */
function GetAlarm(){
  const [today, setDate] = useState(new Date())
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date())
    }, 60 * 100)
    return () =>{
      clearInterval(timer)
    }
  }, [])
  const hour = today.getHours();
  //change testHour for presentation purposes
  const testHour = 8
  return [hour,testHour]
}

function Home() {
  const [dropAlert, showAlert] = useState(true)
  const [currentDate, alarmDate] = GetAlarm()

  const [sch, setSch] = useState(true);
  const [dropDataList, setDropDataList] = useState([]);
  const [isRefresh, setIsRefresh] = useState(false);

  // useEffect(() => {
  //   localStorage.setItem("dropData", null);
  // });
  useEffect(() => {
    // console.log(localStorage.getItem("dropData"));
    if (localStorage.getItem("dropData") !== null) {
      let tempArray = [...dropDataList];
      tempArray.push(JSON.parse(localStorage.getItem("dropData")));
      setDropDataList(tempArray);
      console.log(dropDataList);
    }
    setIsRefresh(false);
  }, [isRefresh]);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonGrid>
            <IonRow class="ion-text-start ion-justify-content-center ion-align-items-center">
              <IonCol size="2">
                <IonButton routerLink="/settings" color="medium">
                  <IonIcon icon={cog} />
                </IonButton>
              </IonCol>
              <IonCol size="8">
                <IonSegment value="default">
                  <IonSegmentButton
                    onClick={() => setSch(true)}
                    value={`${sch ? "default" : "segment"}`}
                  >
                    <IonLabel>Schedule</IonLabel>
                  </IonSegmentButton>
                  <IonSegmentButton
                    onClick={() => setSch(false)}
                    value={`${!sch ? "default" : "segment"}`}
                  >
                    <IonLabel>My Drops</IonLabel>
                  </IonSegmentButton>
                </IonSegment>
              </IonCol>
              <IonCol size="2">
                <IonButton routerLink="/AddEyedrop" color="medium">
                  <IonIcon icon={add} />{" "}
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonHeader>        
      {sch ? (
      <IonContent class="ion-padding">
      <div>
      { currentDate === alarmDate &&
        <IonAlert 
        isOpen={dropAlert}
        onDidDismiss={() => showAlert(false)}
        header="Alert"
        subHeader="Important message"
        message="Take your medication"
        buttons={['OK']}
        />
      }
      </div>
        <Virtuoso
          style={{height: '100%'}}
          totalCount={10}
          itemContent={() => {
            return (
              <div style={{height:'60px'}}>
                <IonItemGroup>
                  <IonItemDivider>
                    <IonDatetimeButton datetime="datetime"></IonDatetimeButton>
                    <IonModal keepContentsMounted={true}>
                      <IonDatetime id="datetime"></IonDatetime>
                    </IonModal>
                  </IonItemDivider>
                </IonItemGroup>
      </IonHeader>

      <IonButton expand="block" onClick={() => setIsRefresh(true)}>
        <IonIcon icon={refresh} />
      </IonButton>
      {sch ? (
        <IonContent class="ion-padding">
          <Virtuoso
            style={{ height: "100%" }}
            totalCount={10}
            itemContent={() => {
              return (
                <div style={{ height: "90px" }}>
                  <IonItemGroup>
                    <IonItemDivider>
                      <IonDatetimeButton datetime="datetime"></IonDatetimeButton>
                      <IonModal keepContentsMounted={true}>
                        <IonDatetime id="datetime"></IonDatetime>
                      </IonModal>
                    </IonItemDivider>
                  </IonItemGroup>

                  <IonItem>
                    <IonAvatar slot="start">
                      <img src="https://d3pq5rjvq8yvv1.cloudfront.net/catalog/product/cache/1/image/265x265/9df78eab33525d08d6e5fb8d27136e95/e/y/eye10.jpg" />
                    </IonAvatar>
                    <IonLabel>
                      <h2>[Eyedrop name here]</h2>
                      <p>[For which eye]</p>
                    </IonLabel>
                    <IonItem>
                      <IonCheckbox slot="end"></IonCheckbox>
                      <p>[Time slot]</p>
                    </IonItem>
                  </IonItem>
                </div>
              );
            }}
          />
        </IonContent>
      ) : (
        <IonContent class="ion-padding">
          {dropDataList.length > 0 ? (
            dropDataList.map((item) => (
              <IonList lines="full">
                <IonItem>
                  <IonLabel>
                    <h1>{item.medName}</h1>
                  </IonLabel>
                  <IonLabel>
                    <p>
                      <b>{item.eye}</b> eyes
                    </p>
                    <p>Starts: {item.start}</p>
                    <p>
                      <b>{item.reps}</b> per day
                    </p>
                    <p>Ends: {item.start}</p>
                  </IonLabel>
                  <IonIcon icon={eyedropOutline} slot="start"></IonIcon>
                </IonItem>
              </IonList>
            ))
          ) : (
            <div></div>
          )}
        </IonContent>
      )}
    </IonPage>
  );
}

export default Home;
