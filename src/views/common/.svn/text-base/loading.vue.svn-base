<template>
	<div class="loading" v-show="showLoading">
		<Spin size="large" fix :style='{width:loadwidth+"px",height:loadheight+"px"}'>
		</Spin>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				showLoading: false,
				loadwidth: 0,
				loadheight: 0
			};
		},
		mounted() {
			this.loadwidth = document.documentElement.clientWidth ;
			this.loadheight = document.documentElement.clientHeight ;
		},
		beforeDestroy() {

		},
		methods: {

		}
	};
</script>

<style>
	.ivu-spin-fix {
		z-index: 120;
		background: hsla(0, 0%, 100%, .9);
		transition: all .6s;
		/*left: 250px;
		top: 100px;*/
	}
</style>