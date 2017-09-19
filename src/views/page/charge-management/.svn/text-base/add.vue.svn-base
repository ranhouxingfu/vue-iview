<template>
	<section>
		<section class="btnGroup">
			<Button type="success" icon="android-done" @click='saveData'>保存</Button>
			<Button icon="ios-undo" @click='goBack'>返回</Button>
		</section>
		<div class="user-info">
			<div class="info-row">
				<div class="info-name">费用名称</div>
				<div class="info-value">
					<Input v-model="data.costName" style="width: 300px"></Input>
				</div>
			</div>
			<div class="info-row">
				<div class="info-name">收费标准</div>
				<div class="info-value">
					<Input v-model="data.standard" style="width: 200px"></Input>
				</div>
			</div>
			<div class="info-row">
				<div class="info-name">起降架次</div>
				<div class="info-value">
					<Input v-model="data.flylanding" style="width: 200px"></Input>
				</div>
			</div>
			<div class="info-row">
				<div class="info-name">金额</div>
				<div class="info-value">
					<Input v-model="data.money" style="width: 200px"></Input>
				</div>
			</div>
			<div class="info-row">
				<div class="info-name">不含税金额</div>
				<div class="info-value">
					<Input v-model="data.nonTaxable" style="width: 200px"></Input>
				</div>
			</div>
			<div class="info-row">
				<div class="info-name">税金</div>
				<div class="info-value">
					<Input v-model="data.tax" style="width: 200px"></Input>
				</div>
			</div>
			<div class="info-row">
				<div class="info-name">收费部门</div>
				<div class="info-value">
					<Select v-model="data.department" style="width:260px">
						<Option v-for="item in departmentList" :value="item.value" :key="item">{{ item.label }}</Option>
					</Select>
					<!--<Input v-model="data.unit" style="width: 200px"></Input>-->
				</div>
			</div>
			<div class="info-row">
				<div class="info-name">备注</div>
				<div class="info-value">
					<Input v-model="data.mark" style="width: 95%"></Input>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
	export default {
		data() {
			return {
				data: {
					department: '',
					standard: '',
					flylanding: '',
					tax: '',
					nonTaxable: '',
					money: '',
					costName: '',
					mark: '',
					id: Math.floor(Math.random() * 100 + 1),
					param: 'add'
				},
				departmentList: [{
					value: '综合业务室',
					label: '综合业务室',
				}, {
					value: '值机室',
					label: '值机室',
				}, {
					value: '未定岗人员',
					label: '未定岗人员',
				}, {
					value: '商务调度室',
					label: '商务调度室',
				}, {
					value: '旅客服务室',
					label: '旅客服务室',
				}, {
					value: '行李室',
					label: ' 行李室',
				}]
			}
		},
		methods: {
			goBack() {
				this.$router.back(-1)
			},
			saveData() {
				this.$router.push({
					path: 'chargeManagement',
					query: this.data
				});
			}
		}
	}
</script>

<style>

</style>