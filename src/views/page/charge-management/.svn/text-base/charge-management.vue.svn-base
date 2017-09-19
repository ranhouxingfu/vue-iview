<template>
	<section>
		<section class="btnGroup">
			<Button type="success" icon="plus" @click='goToAdd'>新增</Button>
		</section>
		<Collapse v-model="searchModel" ref='searchBox' class='search'>
			<Panel costName="1">
				查询条件
				<section slot="content" class="form searchBox">
					<ul>
						<li>
							<label>应收单位：</label>
							<Select v-model="unitModel" style="width:150px">
								<Option v-for="item in unitList" :value="item.value" :key="item">{{ item.label }}</Option>
							</Select>
							<label>机型：</label>
							<Select v-model="typeModel" style="width:200px" filterable>
								<Option-group v-for='item in typeList' :label="item.label" :key="item">
									<Option v-for="item in item.children" :value="item.value" :key="item">{{ item.label }}</Option>
								</Option-group>
							</Select>
						</li>
						<li>
							<label>开始日期：</label>
							<Date-picker class='dateBox' type="month" format='yyyy-MM' placeholder="选择月"></Date-picker>
							<label>结束日期：</label>
							<Date-picker type="month" class='dateBox' format='yyyy-MM' placeholder="选择月"></Date-picker>
							<Button type="info" icon='search'>查询</Button>
						</li>
					</ul>
				</section>
			</Panel>
		</Collapse>
		<row class='marginTop'>
			<Table :context="self" :data="tableList" :columns="tabeleColumns" :height='tableheight' border></Table>
			<page-bar :page-model="pageModel" v-on:refresh='refreshData' ref="pagebar"></page-bar>
		</row>
	</section>
</template>

<script>
	import pageBar from '../../common/table-pagebar.vue'
	export default {
		components: {
			pageBar
		},
		data() {
			return {
				self: this,
				tableList: [{
						"id": 1,
						"costName": "国内地面服务收费",
						"standard": 2236.85,
						"flylanding": '',
						"money": 366843.1,
						"nonTaxable": 346078.68,
						"tax": 20764.72,
						"department": "",
						"mark": ""
					},
					{
						"id": 2,
						"costName": "配载、通信、集装及旅客、行李服务",
						"standard": "476.85",
						"flylanding": 164,
						"money": 78203.4,
						"nonTaxable": 73776.79,
						"tax": 4426.61,
						"department": "",
						"mark": ""
					},
					{
						"id": 3,
						"costName": "货物和邮件服务",
						"standard": "476",
						"flylanding": 164,
						"money": 78203.4,
						"nonTaxable": 73776.79,
						"tax": 4426.61,
						"department": "",
						"mark": ""
					},
					{
						"id": 4,
						"costName": "站坪服务（基本收费）",
						"standard": 102,
						"flylanding": 164,
						"money": 78203.4,
						"nonTaxable": 73776.79,
						"tax": 4426.61,
						"department": "",
						"mark": ""
					},
					{
						"id": 5,
						"costName": "飞机服务（过站服务）",
						"standard": 120,
						"flylanding": 164,
						"money": 78203.4,
						"nonTaxable": 73776.79,
						"tax": 4426.61,
						"department": "",
						"mark": ""
					},
					{
						"id": 6,
						"costName": "飞机勤务（一般勤务）",
						"standard": 150,
						"flylanding": 164,
						"money": 78203.4,
						"nonTaxable": 73776.79,
						"tax": 4426.61,
						"department": "",
						"mark": ""
					},
					{
						"id": 7,
						"costName": "例行检查",
						"standard": 608,
						"flylanding": 164,
						"money": 78203.4,
						"nonTaxable": 73776.79,
						"tax": 4426.61,
						"department": "",
						"mark": ""
					},
					{
						"id": 8,
						"costName": "飞机放行",
						"standard": 304,
						"flylanding": 164,
						"money": 78203.4,
						"nonTaxable": 73776.79,
						"tax": 4426.61,
						"department": "",
						"mark": ""
					},
					{
						"id": 9,
						"costName": "签牌费",
						"standard": 150,
						"flylanding": 164,
						"money": 78203.4,
						"nonTaxable": 73776.79,
						"tax": 4426.61,
						"department": "",
						"mark": ""
					},
					{
						"id": 10,
						"costName": "航前/航后",
						"standard": 2310,
						"flylanding": 164,
						"money": 78203.4,
						"nonTaxable": 73776.79,
						"tax": 4426.61,
						"department": "",
						"mark": ""
					},
					{
						"id": 11,
						"costName": "停场费",
						"standard": 267,
						"flylanding": 164,
						"money": 78203.4,
						"nonTaxable": 73776.79,
						"tax": 4426.61,
						"department": "",
						"mark": ""
					}
				],
				tableheight: '',
				searchModel: '1',
				beginTime: '',
				endTime: '',
				pageModel: {
					url: '/tableList.json',
					menu: [20, 50, 100],
					param: {}
				},
				tabeleColumns: [{
					title: '费用名称',
					key: 'costName',
					width: 200,
					align: 'center',
					ellipsis: true,
				}, {
					title: '收费标准',
					key: 'standard',
					width: 150,
					align: 'center',
				}, {
					title: '起降架次',
					key: 'flylanding',
					width: 150,
					align: 'center',
				}, {
					title: '金额',
					key: 'money',
					width: 150,
					align: 'center',
				}, {
					title: '不含税金额',
					key: 'nonTaxable',
					width: 150,
					align: 'center',
				}, {
					title: '税金',
					key: 'tax',
					width: 150,
					align: 'center',
				}, {
					title: '收费部门',
					key: 'department',
					width: 150,
					align: 'center',
				}, {
					title: '备注',
					key: 'mark',
					align: 'center',
					ellipsis: true
				}, {
					title: '操作',
					key: 'mark',
					align: 'center',
					width: 150,
					render: (h, params) => {
						return h('div', [
							h('a', {
								class: 'edit',
								on: {
									click: () => {
										this.goToEdit(params.row)
									}
								}
							}, '编辑'),
							h('a', {
								class: 'delete',
								on: {
									click: () => {
										this.rowDelete(params.index)
									}
								}
							}, '删除'),
						])
					}
				}],
				unitModel: 'sichuan',
				unitList: [{
					value: 'sichuan',
					label: '四川航空'
				}, {
					value: 'xizang',
					label: '西藏航空'
				}, {
					value: 'xinan',
					label: '西南航空'
				}],
				typeModel: '',
				typeList: [{
						label: '空客',
						value: 'kongke',
						children: [{
							value: 'A319',
							label: 'A319'
						}, {
							value: 'A320',
							label: 'A320'
						}, {
							value: 'A321',
							label: 'A321'
						}, {
							value: 'A330-200',
							label: 'A330-200'
						}, {
							value: 'A330-300',
							label: 'A330-300'
						}, {
							value: 'A380',
							label: 'A380'
						}, {
							value: 'A33A',
							label: 'A33A',
						}]
					},
					{
						label: '波音',
						value: 'boyin',
						children: [{
							value: 'B737',
							label: 'B737'
						}, {
							value: 'B737-700',
							label: 'B737-700'
						}, {
							value: 'B737-800',
							label: 'B737-800'
						}, {
							value: 'B757',
							label: 'B757'
						}, {
							value: 'B777A',
							label: 'B777A'
						}]
					},
					{
						label: '其他',
						value: 'qita',
						children: [{
							value: 'ERJ-145',
							label: 'ERJ-145',
						}, {
							value: 'ERJ-149',
							label: 'ERJ-149',
						}]
					}
				]
			}
		},
//				beforeUpdate() {
//					//			debugger;
//					const that = this;
//					this.$nextTick(() => {
//						setTimeout(function() {
//		
//							that.tableheight = document.documentElement.clientHeight - that.$refs.searchBox.$el.offsetHeight - 220
//						}, 0);
//		
//					})
//				},
		mounted() {
			//			debugger;
			const that = this;
			this.$nextTick(() => {
				setTimeout(function() {
					that.tableheight = document.documentElement.clientHeight - that.$refs.searchBox.$el.offsetHeight - 220
				}, 500);

			})
			this.getData();
		},

		methods: {
			refreshData: function(data) {
				//更新表格数据
				//				if(data == undefined || data == null) {
				//					this.tableList = [];
				//				} else {
				//					this.tableList = data;
				//
				//				}
			},
			getData() { //模拟编辑
				let test = this.$route.query;
				if(JSON.stringify(test) != "{}") {
					if(test.param == 'add') {
						this.tableList.push(test)
					} else {
						this.tableList = this.tableList.map((t, index) => {
							return t.id === test.id ?
								test : t;
						});
					}

				}
			},
			rowDelete(index) {
				let _this = this;
//				_this.$Modal.confirm({
//					title: '提示',
//					content: '<p>确认删除该条信息吗？</p>',
//					okText: '确认',
//					cancelText: '取消',
//					onOk: () => {
//												_this.$axios.delete('/tableList.json/' + id).then((res) => {
//													_this.$refs.pagebar.getData();
//												})
//					}
//				});
				_this.$Modal.confirm({
					title: '提示',
					content: '<p>确认删除该条信息吗？</p>',
					okText: '确认',
					cancelText: '取消',
					onOk: () => {
						debugger;
						_this.tableList.splice(index, 1)
					}
				});
			},
			rowEdit(id) {
				//				this.router.push({
				//					path:'chargeManagementEdit',
				//					query:{
				//						id:id
				//					}
				//				}),
			},
			goToAdd() {
				this.$router.push('chargeManagementAdd');
			},
			goToEdit(params) {
				//				debugger;
				this.$router.push({
					path: 'chargeManagementEdit',
					query: params
				});
			}
		}
	}
</script>

<style>

</style>