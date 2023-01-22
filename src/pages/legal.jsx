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
    IonContent,
    
  } from "@ionic/react";
  import { arrowBackOutline } from "ionicons/icons";
  
  function legal() {
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
                  <IonTitle>Legal</IonTitle>
                </IonCol>
                <IonCol size="2"></IonCol>
              </IonRow>
            </IonGrid>
          </IonToolbar>
        </IonHeader>
        <IonContent class="ion-padding">
          <p>
          Enclosed herein are Aviya LLC's Terms of Use ("Terms"). Please read these Terms carefully before using this site. By using and or visiting this site, you agree to the Terms disclosed herein. If you do not agree to these Terms, you should cease all use of and access to this site.
This site is owned and operated by Aviya LLC, a California limited liability company. Aviya LLC reserves the right to revise or remove any part of the Terms at its sole discretion at any time and without any prior notice to you. Any revisions to the Terms are effective immediately. If you disagree with the Terms, you should cease your use of this site. Your continued use of this site constitutes your acceptance of the Terms.
Disclaimer
The information on this site is provided as a resource only, and should not be used as a substitute for a professional diagnosis or medical treatment. The services provided on the site are provided
"as-is" and as available and Aviya expressly disclaims all warranties and conditions of any kind, whether express or implied, including but not limited to, the warranties or conditions of merchantability, fitness for a particular purpose, title, or non-infringement. Aviya LLC does not guarantee and does not promise any specific results from the use of the site. Aviya LLC makes no warranty that the service will be uninterrupted, secure, error-free or free of viruses.
Intellectual Property
The content on this site, including without limitation, any text, software, graphics, photos, sounds, music, videos, audiovisual combinations, patents, interactive features, any trademarks, service marks and logos contained therein and any other materials you may view on, access through, or contribute to this site (collectively,
"Materials") are owned by or licensed to Aviya LLC, subject to copyright, trademark and other intellectual property rights under United States laws, foreign laws, and international conventions.
No Materials from this site may be copied, reproduced, republished, uploaded, posted, transmitted, or distributed in any way without written permission of the rights owner.
Third Party Websites and Services

Our site may contain links to third-party sites that are not owned or controlled by Aviya LLC. These Terms do not apply to such third-party sites. Aviya LLC has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party sites or services. We advise you to read the terms and conditions and privacy policy of any third-party site that you visit.
Governing Law
These Terms shall be governed and construed in accordance with the laws of the State of California and the United States. You also consent to the adjudication of any disputes arising in connection with our site in the state and federal courts located in Los Angeles County. You also agree to attempt to mediate any such dispute and to abide by all limitations of liability contained herein.
Limitation of Liability
To the extent permitted under applicable law, under no circumstances, including, but not limited to, negligence, shall Aviya LLC be liable for any lost profits, indirect, consequential, exemplary, incidental, compensatory, punitive, special or consequential damages that result from the use of, or the inability to use, this site or the materials on it.
Indemnity
You agree to indemnify, defend and hold Aviya LLC and its directors, officers, employees, agents, and contractors harmless from and against any and all claims, damages, losses, costs (including without limitation reasonable attorneys' fees) or other expenses that arise directly or indirectly out of or from (i) your breach of any provision of these Terms, or (il) your activities in connection with this site.
Contact Us
If you have any questions about these Terms, please email mydropsaviya@gmail.com
          </p>
          
          </IonContent>
        
      </IonPage>
    );
  }
  export default legal;