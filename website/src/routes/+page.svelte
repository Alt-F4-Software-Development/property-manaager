<script lang="ts">
	import type { FirebasePropertyData } from '../../types/PropertyData';

	let PropertyListElement: HTMLDivElement;
	export let data: { PropertyList: FirebasePropertyData[] };
	let PropertyList = data.PropertyList;
	console.log(PropertyList)
</script>

<div bind:this={PropertyListElement} class="block p-7">
	<div class="w-full h-full">
		{#each PropertyList as property}
			<a href="/{property.Name.toLowerCase()}">
				<div class="text-center border-black py-3 border-2 my-5 rounded-lg">
					<div class="property-list-item-image">
						<img src={property.Image} alt={property.Name} class="ml-auto mr-auto w-5 h-5" />
					</div>
					<div class="property-list-item-info">
						<h2>{property.Name}</h2>
					</div>
				</div>
			</a>
		{/each}
	</div>
	<br />
	<a href="/new"><button class="rounded bg-black px-2 py-1 text-white">New Property</button></a>
</div>
