<template>
	<form @submit.prevent="submit">
		<div class="user-info">
			<!--<div class="info-row">
				<div class="info-name">id</div>
				<div class="info-value">
					<Input v-model="data.id" style="width: 120px"></Input>
				</div>
			</div>-->
			<div class="info-row">
				<div class="info-name">机型名称</div>
				<div class="info-value">
					<Input v-model="data.type" style="width: 200px"></Input>
				</div>
			</div>
			<div class="info-row">
				<div class="info-name">费用名称</div>
				<div class="info-value">
					<Input v-model="data.costname" style="width: 300px"></Input>
				</div>
			</div>
			<div class="info-row">
				<div class="info-name">收费标准</div>
				<div class="info-value">
					<Input v-model="data.standard" style="width: 200px"></Input>
				</div>
			</div>
		</div>
	</form>
</template>

<script>
	export default {
		data() {
			return {
				self: this,
				data: {
					costname: '',
					standard: '', //收费标准
					type: '',
					id: Math.floor(Math.random() * 100 + 1),
				},

			}
		},
		//		mounted() {
		//			this.getData()
		//		},
		methods: {
			postData() {
				return this.data
				//				return this.$axios({
				//						method: 'post',
				//						url: 'http://localhost:3003/projectData',
				//						data: this.data
				//					}).then((response) => {})
				//					.catch(function(error) {});
			}

		}
	}
</script>

<style>

</style>