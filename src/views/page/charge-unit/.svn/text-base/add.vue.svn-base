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
				<div class="info-name">部门名称</div>
				<div class="info-value">
					<Input v-model="data.name" style="width: 200px"></Input>
				</div>
			</div>
			<div class="info-row">
				<div class="info-name">收费项目名称</div>
				<div class="info-value">
					<Input v-model="data.projectname" style="width: 300px"></Input>
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
//					id: '', //模拟数据用
					name: '',
					projectname: '', 
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
//						url: 'http://localhost:3003/unitData',
//						data: this.data
//					}).then((response) => {})
//					.catch(function(error) {});
			}

		}
	}
</script>

<style>

</style>