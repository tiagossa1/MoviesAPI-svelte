<script lang="ts">
	import type { Movie } from '../types/movie';
	import { Card } from 'flowbite-svelte';

	export let movie: Movie;

	const hoursToMinutes = (totalMinutes: number) => {
		const hours = Math.floor(totalMinutes / 60);
		const minutes = totalMinutes % 60;

		return { hours, minutes };
	};

	const movieInHoursAndMinutes = hoursToMinutes(movie.runtimeInMinutes);
	const movieRuntime = `${movieInHoursAndMinutes.hours}h ${movieInHoursAndMinutes.minutes}min`;
</script>

<Card>
	<h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
		{movie.title}
	</h5>

	<div class="mb-3">
		<div class="grid grid-cols-3">
			<div>
				<span class="text-gray-400">Release Date</span>
			</div>
			<div />
			<div>
				<span class="text-gray-400">Runtime</span>
			</div>
		</div>

		<div class="grid grid-cols-3">
			<div>{new Date(movie.releaseDate).toLocaleDateString()}</div>
			<div />
			<div>{movieRuntime}</div>
		</div>
	</div>

	<p>{movie.plot}</p>

	{#if movie.homepageUrl}
		<a href={movie.homepageUrl} class="inline-flex items-center text-blue-600 hover:underline">
			Know more
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-5 h-5 ml-2"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
				/></svg
			>
		</a>
	{/if}
</Card>
