import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  useIonRouter,
} from '@ionic/react';
import { Redirect } from 'react-router';
import { useTestStore } from '../test-store';

const Second = () => {
  const history = useIonRouter()
  const [isErrorState, setErrorState] = useTestStore((state)=>[state.isErrorState, state.setErrorState])
  if (!isErrorState) {
    return <Redirect to={{
      pathname: '/tabs',
      search: '?page=1',
    }}
    />
  }
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{history.routeInfo.pathname}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" fullscreen>
        <div className='flex flex-col gap-2'>
          Second page 
          <button
          onClick={() => setErrorState(false)}
          className='p-3 bg-black text-white w-32 text-sm'>
            Redirect to first page
          </button>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Second;
