<script lang="ts">
	import type { FirebasePropertyData } from "../../../../types/PropertyData";

    export let data: FirebasePropertyData;
	const handleSubmit = () => {
		console.log('Submitted');
		location.href = `/${data.Name.toLowerCase()}`;
	};
</script>

<form class="settingsForm" on:submit={handleSubmit}>
<h1>{data.Name}</h1>
<labet for="name">Name</labet>
<input type="text" id="name" name="name" value={data.Name} />
<labet for="address">Address</labet>
<input type="text" id="address" name="address" value={data.Address} />
<labet for="city">City</labet>
<input type="text" id="city" name="city" value={data.City} />
<labet for="state">State</labet>
<input type="text" id="state" name="state" value={data.State} />
<labet for="zip">Zip</labet>
<input type="text" id="zip" name="zip" value={data.Zip} />
<label for="image">Image</label><img src={data.Image} alt={data.Name} style="height: 25px" />
<input type="file" accept="image/*" id="image" name="image" class="block w-full text-sm text-slate-500
file:mr-4 file:py-2 file:px-4
file:rounded-full file:border-0
file:text-sm file:font-semibold
file:bg-violet-50 file:text-violet-700
hover:file:bg-violet-100" />
<label for="floorplanEnabled">Floorplan Enabled</label>
<input type="checkbox" id="floorplanEnabled" name="floorplanEnabled" checked={data.floorplanEnabled} />
<label for="financingEnabled">Financing Enabled</label>
<input type="checkbox" id="financingEnabled" name="financingEnabled" checked={data.financingEnabled} />
<label for="ExcelSheet">Excel Sheet</label>
<input type="text" id="ExcelSheet" name="ExcelSheet" value={data.ExcelSheet} />
</form>
