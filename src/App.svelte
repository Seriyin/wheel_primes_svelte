<script lang="ts">
	import {Content, Table, TableCell, TableContainer, TableRow} from 'carbon-components-svelte';
	import {chunked} from './utils'
	export let bindings;

	let init_siever = 100
	let init_primes = 7

	$: p_sieved_pritchard =  (bindings.sieve_pritchard_w(init_siever) as number[])

	$: n_p_primes_pritchard = (bindings.n_primes_pritchard_w(init_primes) as number[])

	$: p_sieved_segmented = (bindings.sieve_segmented_w(init_siever) as number[])

	$: n_p_primes_segmented = (bindings.n_primes_segmented_w(init_primes) as number[])

</script>

<Content>
	<div>
		<h1>The Prime-Sieving App</h1>
	</div>


	<div>
		<h3>Sieving by limit</h3>
		<input type=number bind:value={init_siever}>	
	</div>

	<div>
		<h3>Sieving N primes</h3>
		<input type=number bind:value={init_primes}>	
	</div>

	<div>
		<h2>Pritchard Wheel Sieve</h2>
	</div>
	
	<div>
		<h3>Sieving by limit</h3>

		<TableContainer>
			<Table size="compact">
				{#each chunked(p_sieved_pritchard, 10) as row}
					<TableRow>
						{#each row as cell}
							<TableCell>{cell}</TableCell>
						{/each}
					</TableRow>
				{/each}	
				
			</Table>
		</TableContainer>
	</div>
	

	<div>
		<h3>Sieving N primes</h3>

		<TableContainer>
			<Table size="compact">
				{#each chunked(n_p_primes_pritchard, 10) as row}
					<TableRow>
						{#each row as cell}
							<TableCell>{cell}</TableCell>
						{/each}
					</TableRow>
				{/each}	
				
			</Table>
		</TableContainer>	
	</div>

	<div>
		<h2>Segmented Erastothenes Sieve</h2>
	</div>

	<div>
		<h3>Sieving by limit</h3>

		<TableContainer>
			<Table size="compact">
				{#each chunked(p_sieved_segmented, 10) as row}
					<TableRow>
						{#each row as cell}
							<TableCell>{cell}</TableCell>
						{/each}
					</TableRow>
				{/each}	
				
			</Table>
		</TableContainer>	
	</div>


	<div>
		<h3>Sieving N primes</h3>


		<TableContainer>
			<Table size="compact">
				{#each chunked(n_p_primes_segmented, 10) as row}
					<TableRow>
						{#each row as cell}
							<TableCell>{cell}</TableCell>
						{/each}
					</TableRow>
				{/each}	
				
			</Table>
		</TableContainer>	
	</div>


</Content>

<style>
	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 5em;
		font-weight: 100;
		margin-top: 1%;
		margin-bottom: 3%;
	}

	h2 {
		color: coral;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 200;
		margin-top: 2%;
		margin-bottom: 2%;
	}

	h3 {
		color: lightpink;
		text-transform: capitalize;
		font-size: xx-large;
		font-weight: 100;
		margin-top: 1%;
		margin-bottom: 1%;
	}

	@media (min-width: 640px) {}
</style>
