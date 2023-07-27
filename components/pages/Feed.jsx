import Card from '../ui/Card';

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  useIonRouter,
  IonModal,
} from '@ionic/react';
import {  useCallback, useState } from 'react';
import { getHomeItems } from '../../store/selectors';
import Store from '../../store';
import { Virtuoso } from 'react-virtuoso';
import { itemAnimation } from '../../transition';

const Modal = ({isModal, setIsModal}) => {
  return(
    <IonModal
    canDismiss={true}
    initialBreakpoint={0.5}
    handle={true}
    breakpoints={[0, 0.5, 1]}
    onWillDismiss={() => setIsModal(false)}
    isOpen={isModal}
    >
      <IonHeader>
        <IonToolbar>
          <IonTitle>Modal</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <p>Modal content</p>
      </IonContent>
    </IonModal>
  )
}

const FeedCard = ({ title, type, text, author, authorAvatar, image }) => {
  const [isModal, setIsModal] = useState(false)
  return(<Card className="my-4 mx-auto">
    <div className="h-32 w-full relative">
      <img className="rounded-t-xl object-cover min-w-full min-h-full max-w-full max-h-full" src={image} alt="" />
    </div>
    <div className="px-4 py-4 bg-white rounded-b-xl dark:bg-gray-900">
      <h4 className="font-bold py-0 text-s text-gray-400 dark:text-gray-500 uppercase">{type}</h4>
      <h2 className="font-bold text-2xl text-gray-800 dark:text-gray-100">{title}</h2>
      <p className="sm:text-sm text-s text-gray-500 mr-1 my-3 dark:text-gray-400">{text}</p>
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 relative">
          <img src={authorAvatar} className="rounded-full object-cover min-w-full min-h-full max-w-full max-h-full" alt="" />
        </div>
        <h3 className="text-gray-500 dark:text-gray-200 m-l-8 text-sm font-medium">{author}</h3>
      </div>
    </div>
    <Modal isModal={isModal} setIsModal={setIsModal}/>
  </Card>)
}


const Feed = () => {
  const history = useIonRouter()
  const homeItems = Store.useState(getHomeItems);

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
          <IonTitle>Feed</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" fullscreen>
        <div className='flex flex-row gap-2'>
        <button 
        className='px-4 bg-zinc-500'
        onClick={() => {
         selectRoute()
        }}>Next</button>
        {history.routeInfo.pathname !== '/tabs' && (
        <button 
           className='px-4 bg-zinc-500'
        onClick={() => {
          // back
          history.goBack(itemAnimation)
        }}>Back</button>
        )}
        </div>
        <Virtuoso 
        components={({ Header: () => {
          return (
            <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Feed</IonTitle>
            </IonToolbar>
          </IonHeader>
          )
        } })  }
         className='ion-content-scroll-host'
          endReached={()=>{
              // add extra home items
              Store.update(s => {
                s.homeItems = [...s.homeItems, ...s.homeItems];
              }
              )
          }}
          totalCount={homeItems.length}
          itemContent={(index) => {
            const item = homeItems[index];
            return <FeedCard {...item} key={index} />;
          }}
        />

      </IonContent>
    </IonPage>
  );
};

export default Feed;
