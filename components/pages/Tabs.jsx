import {  Route } from 'react-router-dom';
import { IonRouterOutlet, IonTabs } from '@ionic/react';
import Home from './Feed';


const Tabs = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/tabs" render={() =>  <Home />} exact={true} />
        <Route path="/tabs-2" render={() => <Home />} exact={true} />
        <Route path="/tabs-3" render={() => <Home />} exact={true} />
      </IonRouterOutlet>
    </IonTabs>
  );
};

export default Tabs;
