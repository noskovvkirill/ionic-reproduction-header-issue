import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  useIonRouter,
} from '@ionic/react';
import {  useCallback } from 'react';
import { itemAnimation } from '../../transition';



const Feed = () => {
  const history = useIonRouter()
  const selectRoute = useCallback(() => {
    const previousPath = history.routeInfo.pathname;
    console.log(previousPath)
    if (previousPath === '/tabs') {
      history.push('/tabs-2')
      return
    }
    if (previousPath === '/tabs-2') {
      history.push('/tabs-3')
      return
    }
    if (previousPath === '/tabs-3') {
      history.push('/tabs')
      return
    }
    console.log(history.routeInfo.pathname)
    history.push('/tabs-2')
  }, [history])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{history.routeInfo.pathname}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" fullscreen>
        <div className='flex flex-row gap-2'>
        {history.routeInfo.pathname !== '/tabs' && (
        <button 
           className='px-4 py-2 bg-zinc-500 rounded-md'
        onClick={() => {
          // back
          history.goBack(itemAnimation)
        }}>Back</button>
        )}
        {history.routeInfo.pathname !== '/tabs-3' && (
        <button 
        className='px-4 py-2 bg-red-200 rounded-md'
        onClick={() => {
         selectRoute()
        }}>Next</button>
        )}
       
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Feed;
