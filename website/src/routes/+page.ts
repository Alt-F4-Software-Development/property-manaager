import { collection, getDocs, getFirestore } from "@firebase/firestore";
import type { PageLoad } from "./$types";
import { initializeApp } from "@firebase/app";
import { getDownloadURL, getStorage, ref } from "@firebase/storage";
import type { FirebasePropertyData } from "../../types/PropertyData";

const firebaseConfig = {
    apiKey: "AIzaSyBtXxk3kH9wf0qKd2R6Ku1qGVNBQ0kuA2M",
    authDomain: "muntean-property-manager.firebaseapp.com",
    projectId: "muntean-property-manager",
    storageBucket: "muntean-property-manager.appspot.com",
    messagingSenderId: "623784494694",
    appId: "1:623784494694:web:79ee2bb9cf949404b48fa7",
    measurementId: "G-94KDF4M8B0"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const storage = getStorage(app);
  
export const load = (() => {
    const PropertyList: FirebasePropertyData[] = []
    return getDocs(collection(db, "properties")).then(async (querySnapshot) => {
        querySnapshot.forEach((doc) => {
            PropertyList.push(doc.data() as FirebasePropertyData);
            console.log(1)
        });
        for(let i=0; i<PropertyList.length; i++) {
            console.log(PropertyList[i].Image)
            try {
            PropertyList[i].Image = await getDownloadURL(ref(storage, `properties/${PropertyList[i].Name.toLowerCase()}.png`));
        } catch {
            PropertyList[i].Image = await getDownloadURL(ref(storage, `gs://muntean-property-manager.appspot.com/ouse.png`));
        }
        }
        return {PropertyList};
    })
}) satisfies PageLoad;