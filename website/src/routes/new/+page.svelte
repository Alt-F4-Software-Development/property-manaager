<script lang="ts">
	import { uploadBytes, ref, getStorage } from '@firebase/storage';
	import { initializeApp } from 'firebase/app';
	import { getFirestore, setDoc, doc, getDoc } from 'firebase/firestore';

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
	const storage = getStorage(app);
	let Name = '';
	let Address = '';
	let City = '';
	let State = '';
	let Zip = '';
	let ImageFile: any;
	let ExcelSheet = '';
	let floorplanEnabled = false;
	let financingEnabled = false;
	const handleSubmit = async () => {
        if((await getDoc(doc(db, 'properties', Name.toLowerCase()))).exists()) {
            alert('Property already exists');
            return;
        }
		if (ImageFile != undefined) {
			uploadBytes(ref(storage, `properties/${Name.toLowerCase()}.png`), ImageFile).then((snapshot) => {
                console.log('Uploaded a blob or file!');
			});
		}
        setDoc(doc(db, 'properties', Name.toLowerCase()), {
            Name,
            Address,
            City,
            State,
            Zip,
            ExcelSheet,
            floorplanEnabled,
            financingEnabled
        });
	};
</script>

<div class="mx-auto text-center rounded-3xl shadow bg-gray-400 w-3/4 text-white h-full py-4 mt-16">
	<h1 class="text-3xl">New Property</h1>
	<br />
	<form class="mx-auto" on:submit={handleSubmit}>
		<label for="name">Name: </label>
		<br />
		<input
			type="text"
			required
			id="name"
			name="name"
			class="form-input rounded shadow text-black"
			bind:value={Name}
		/>
		<br />
		<br />
		<label for="address">Address: </label>
		<br />
		<input
			type="text"
			required
			id="address"
			name="address"
			class="form-input rounded shadow"
			bind:value={Address}
		/>
		<br />
		<br />
		<label for="city">City: </label>
		<br />
		<input
			type="text"
			required
			id="city"
			name="city"
			class="form-input rounded shadow"
			bind:value={City}
		/>
		<br />
		<br />
		<label for="state">State: </label>
		<br />
		<input
			type="text"
			required
			id="state"
			name="state"
			class="form-input rounded shadow"
			bind:value={State}
		/>
		<br />
		<br />
		<label for="zip">Zip: </label>
		<br />
		<input
			type="text"
			required
			id="zip"
			name="zip"
			class="form-input rounded shadow"
			bind:value={Zip}
		/>
		<br />
		<br />
		<label for="image">Image: </label>
		<br />
		<input
			type="file"
			accept="image/*"
			id="image"
			name="image"
			bind:value={ImageFile}
			class="block text-sm text-white
    file:mr-4 file:py-2 file:px-4
    file:rounded-full file:border-0
    file:text-sm file:font-semibold
    file:bg-black file:text-white
    hover:file:bg-gray-950 mx-auto my-3"
		/>
		<br />
		<label for="floorplanEnabled">Floorplan Enabled</label>
		<input
			type="checkbox"
			id="floorplanEnabled"
			name="floorplanEnabled"
			bind:checked={floorplanEnabled}
		/>
		<br />
		<label for="financingEnabled">Financing Enabled</label>
		<input
			type="checkbox"
			id="financingEnabled"
			bind:checked={financingEnabled}
			name="financingEnabled"
		/>
		{#if financingEnabled}
			<br />
			<br />
			<label for="ExcelSheet">Excel Sheet: </label>
			<br />
			<input type="text" required id="ExcelSheet" bind:value={ExcelSheet} name="ExcelSheet" />
		{/if}
		<br />
		<br />
		<button class="rounded bg-black px-2 py-1 text-white" type="submit">Submit</button>
	</form>
</div>
