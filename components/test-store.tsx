import {create} from 'zustand';


export const useTestStore = create<{
    isErrorState: boolean;
    setErrorState: (isErrorState: boolean) => void;
}>((set) => ({
   isErrorState: false,
   setErrorState: (isErrorState: boolean) => set({isErrorState}),
}))
