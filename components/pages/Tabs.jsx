import { Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { cog, flash, list } from 'ionicons/icons';

import Home from './Feed';
import Lists from './Lists';
import ListDetail from './ListDetail';
import Settings from './Settings';

const Tabs = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/tabs/feed" render={() => <Home />} exact={true} />
        <Route path="/tabs/lists" render={() => <Lists />} exact={true} />
        <Route path="/tabs/lists/:listId" render={() => <ListDetail />} exact={true} />
        <Route path="/tabs/settings" render={() => <Settings />} exact={true} />
        <Route path="/tabs" render={() => <Redirect to="/tabs/feed" />} exact={true} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
   
      </IonTabBar>
    </IonTabs>
  );
};

export default Tabs;
