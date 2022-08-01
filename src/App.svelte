<script lang="ts">
	import {Content} from 'carbon-components-svelte';
	import {chunked} from './utils'
	export let bindings;

	let init_siever = 100
	let init_primes = 7

	$: p_sieved =  (bindings.sieve_pritchard(init_siever) as number[])

	$: n_p_primes = (bindings.n_primes_pritchard(init_primes) as number[])
</script>

<Content>
	<h1>The Prime-Sieving App</h1>

	<p>Sieving by limit</p>
	<input type=number bind:value={init_siever}>
 	<p>Sieve Result: </p>
	<ol>
		{#each chunked(p_sieved, 10) as sieved}
			<li> {sieved} </li>
		{/each}	
	</ol>


	<p>Sieving N primes</p>
	<input type=number bind:value={init_primes}>
	<p>Sieve Result: </p>
	<ol>
		{#each chunked(n_p_primes, 10) as sieved}
			<li> {sieved} </li>
		{/each}	
	</ol>

</Content>

<style>
	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {}
</style>
