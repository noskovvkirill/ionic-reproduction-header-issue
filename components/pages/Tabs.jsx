import {  Route } from 'react-router-dom';
import { IonRouterOutlet, IonTabs, IonTabBar } from '@ionic/react';
import Home from './Feed';


const Tabs = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/tabs" render={() =>  <Home />} exact={true} />
        <Route path="/tabs-2" render={() => <Home />} exact={true} />
        <Route path="/tabs-3" render={() => <Home />} exact={true} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
      
      </IonTabBar>
    </IonTabs>
  );
};

export default Tabs;
