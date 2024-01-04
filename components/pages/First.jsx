import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  useIonRouter,
} from '@ionic/react';
import { useTestStore } from '../test-store';
import { Redirect } from 'react-router';
const Home = () => {
  const history = useIonRouter()
  const [isErrorState, setErrorState] = useTestStore((state)=>[state.isErrorState, state.setErrorState])

  if(isErrorState){
    return <Redirect to={{
      pathname: '/tabs-2',
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
          First page 
          <button 
          onClick={() => setErrorState(true)}
          className='p-3 bg-black text-white w-32 text-sm'>
            Redirect to second page
          </button>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
