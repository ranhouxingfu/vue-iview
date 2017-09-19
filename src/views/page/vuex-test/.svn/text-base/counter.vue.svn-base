<template>
	<div>
		Count is {{$store.state.count}}
		<Button-group>
			<Button type="success" @click='increment'>+</Button>
			<Button type="primary" @click='decrement'>-</Button>
		</Button-group>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'
	export default {
		computed: mapGetters([

		]),
		methods: {
			//			mapActions([
			//				'increment',
			//				'decrement'
			//			])
			increment() {
				this.$store.dispatch('increment')
			},
			decrement() {
				this.$store.dispatch('decrement')
			}
		}
	}
</script>

<style>

</style>