<script lang="ts">
			import type { FirebasePropertyData } from "../../../types/PropertyData";

	export let data: FirebasePropertyData;
</script>

<div class="mx-auto text-center rounded shadow bg-gray-400 w-3/4 text-white h-full py-4 mt-16">
	<img src={data.Image} alt={data.Name} class="mx-auto w-5 h-5" />
<h1>{data.Name}</h1>
<br />
<h2>{data.Address}</h2>
<br />
<h2>{data.City}, {data.State} {data.Zip}</h2>
<br />
<a href="/{data.Name.toLowerCase()}/financing" class="ml-4"><button class="bg-black border-white rounded px-2 py-1 shadow-sm text-white">Financing</button></a>
<a href="/{data.Name.toLowerCase()}/floorplan" class="ml-4"><button class="bg-black border-white rounded px-2 py-1 shadow-sm text-white">Floor Plan</button></a>
<a href="/{data.Name.toLowerCase()}/settings" class="ml-4"><button class="bg-black border-white rounded px-2 py-1 shadow-sm text-white">Settings</button></a>
</div>