import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { initializeApp } from 'firebase/app';
import { doc, getDoc, getFirestore, type DocumentData } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyBtXxk3kH9wf0qKd2R6Ku1qGVNBQ0kuA2M',
	authDomain: 'muntean-property-manager.firebaseapp.com',
	projectId: 'muntean-property-manager',
	storageBucket: 'muntean-property-manager.appspot.com',
	messagingSenderId: '623784494694',
	appId: '1:623784494694:web:79ee2bb9cf949404b48fa7',
	measurementId: 'G-94KDF4M8B0'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const load = (async ({ params }) => {
	console.log(params);
	let retData: DocumentData | boolean = false;
	const docum = await getDoc(doc(db, `properties/${params.property}`));
	if (docum.exists()) {
		retData = docum.data();
	}
	console.log(retData);
	if (retData == false) {
		throw error(404, 'Not found');
	} else {
		return retData;
	}
}) satisfies PageLoad;
