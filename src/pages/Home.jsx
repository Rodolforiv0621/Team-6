import {
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
} from "@ionic/react";
import { Virtuoso } from 'react-virtuoso';
import "./Home.css";
import { add, cog } from "ionicons/icons";
import { useState } from "react";


function Home() {
  const [sch, setSch] = useState(true)
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
                  <IonSegmentButton onClick={()=> setSch(true)} value="default">
                    <IonLabel>Schedule</IonLabel>
                  </IonSegmentButton>
                  <IonSegmentButton onClick={()=> setSch(false)} value="segment">
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
      ): (<IonContent class="ion-padding">
      <Virtuoso
        style={{height: '100%'}}
        totalCount={1}
        itemContent={() => {
          return (
            <div style={{height:'60px'}}>
              <IonItem>
                <IonAvatar slot="start">
                  <img src="https://d3pq5rjvq8yvv1.cloudfront.net/catalog/product/cache/1/image/265x265/9df78eab33525d08d6e5fb8d27136e95/e/y/eye10.jpg" />
                </IonAvatar>
                <IonLabel>
                  <h2>[Your Eyedrop]</h2>
                  <p>[For which eye]</p>
                  <p>[How many times per day]</p>
                </IonLabel>
                <IonItem>
                  <p>
                  Starts:[This time] 
                  <br></br>
                  Ends:[This time]
                  </p>
                </IonItem>
              </IonItem>
            </div>
          );
        }}
      />
    </IonContent>)
      }
    </IonPage>
  );
}

export default Home;
