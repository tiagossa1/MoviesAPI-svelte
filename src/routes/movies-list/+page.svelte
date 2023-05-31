<script lang="ts">
	import { fade } from 'svelte/transition';
	import type { Movie } from '../../types/movie';
	import type { Response } from '../../types/response';
	import MovieCard from '$lib/movie-card.svelte';
	import { onMount } from 'svelte';

	let movies: Movie[] = [];

	onMount(async () => {
		try {
			const response = await fetch('https://localhost:7212/api/Movies');
			movies = ((await response.json()) as Response<Movie[]>)?.value;
		} catch (error) {}
	});
</script>

<div class="p-10">
	<div class="grid grid-cols-3">
		{#each movies as movie}
			<div transition:fade>
				<MovieCard {movie} />
			</div>
		{/each}
	</div>
</div>
