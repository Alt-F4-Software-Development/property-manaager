<script lang="ts">
	import '../app.postcss';
	export let data
</script>

<div class="bg-slate-50 rounded-b h-50 py-2">
	<a href="/" class="ml-4"><button class="bg-black border-white rounded px-2 py-1 shadow-sm text-white">Home</button></a>
	<a href="/new" class="ml-4"><button class="bg-black border-white rounded px-2 py-1 shadow-sm text-white">New Property</button></a>
	{#if data.name != undefined}
		<a href="/{data.name?.toLowerCase()}" class="ml-4"><button class="bg-black border-white rounded px-2 py-1 shadow-sm text-white">View Property</button></a>
	{/if}
</div>
<slot />
