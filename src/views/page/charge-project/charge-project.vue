<template>
	<section>
		<section class="btnGroup">
			<Button type="success" icon="plus" @click='addRow'>新增</Button>
		</section>
		<Collapse v-model="searchModel" ref='searchBox' class='search'>
			<Panel name="1">
				查询条件
				<section slot="content" class="form searchBox">
					<ul>
						<li>
							<label>机型：</label>
							<Select v-model="typeModel" style="width:200px" filterable>
								<Option-group v-for='item in typeList' :label="item.label" :value="item.value" :key="item">
									<Option v-for="item in item.children" :value="item.value" :key="item">{{ item.label }}</Option>
								</Option-group>
							</Select>
							<Button type="info" icon='search'>查询</Button>
						</li>
					</ul>
				</section>
			</Panel>
		</Collapse>

		<row class='marginTop'>
			<Table :context="self" :data="tableList" :columns="tabeleColumns" :height="tableheight" border></Table>
			<page-bar :page-model="pageModel" v-on:refresh='refreshData' ref="pagebar"></page-bar>
		</row>
		<model ref="editDialog" :modal-options.sync="modalOptions"></model>
		<model ref="addDialog" :modal-options.sync="addOptions"></model>
	</section>
</template>

<script>
	import pageBar from '../../common/table-pagebar.vue'
	import model from '../../common/modal.vue'
	import edit from './edit.vue'
	import add from './add.vue'
	export default {
		components: {
			pageBar,
			model,
			edit,
			add,
		},
		data() {
			return {
				self: this,
				searchModel: '1',
				tableList: [{
						"id": 1,
						"type": "A330",
						"costname": "国内地面服务费",
						"standard": 2940
					},
					{
						"id": 2,
						"type": "A330",
						"costname": "配载、通信、集装及旅客、行李服务",
						"standard": 2940
					},
					{
						"id": 3,
						"type": "A330",
						"costname": "货物和邮件服务",
						"standard": 2940
					},
					{
						"id": 4,
						"type": "A330",
						"costname": "站坪服务（基本收费）",
						"standard": 2940
					},
					{
						"id": 5,
						"type": "A330",
						"costname": "飞机服务(过站服务)",
						"standard": 2940
					},
					{
						"id": 6,
						"type": "A330",
						"costname": "飞机勤务（一般勤务）",
						"standard": 2940
					},
					{
						"id": 7,
						"type": "A330",
						"costname": "例行检查",
						"standard": 2940
					},
					{
						"id": 8,
						"type": "A330",
						"costname": "飞机放行",
						"standard": 2940
					},
					{
						"id": 9,
						"type": "A330",
						"costname": "签牌费",
						"standard": "2940"
					},
					{
						"id": 10,
						"type": "A330",
						"costname": "航前／航后",
						"standard": 2940
					},
					{
						"id": 11,
						"type": "A330",
						"costname": "停场费",
						"standard": 2940
					},
					{
						"id": 12,
						"type": "其他",
						"costname": "牵引车",
						"standard": "普通飞机160元/次"
					},
					{
						"id": 13,
						"type": "其他",
						"costname": "牵引车",
						"standard": "宽体飞机320元/次"
					},
					{
						"id": 14,
						"type": "其他",
						"costname": "旅客摆渡车",
						"standard": "55元/次"
					},
					{
						"id": 15,
						"type": "其他",
						"costname": "机组摆渡车",
						"standard": "40元/次"
					},
					{
						"id": 16,
						"type": "其他",
						"costname": "客梯车",
						"standard": "45元/小时"
					},
					{
						"id": 17,
						"type": "其他",
						"costname": "除冰车",
						"standard": "600元/小时"
					},
					{
						"id": 18,
						"type": "其他",
						"costname": "引导车",
						"standard": "120元/次"
					},
					{
						"id": 19,
						"type": "其他",
						"costname": "气源车",
						"standard": "宽体飞机480元/次"
					},
					{
						"id": 20,
						"type": "其他",
						"costname": "气源车",
						"standard": "普通飞机160元/次"
					},
					{
						"id": 21,
						"type": "其他",
						"costname": "电源车",
						"standard": "宽体飞机400元/次"
					},
					{
						"id": 22,
						"type": "其他",
						"costname": "电源车",
						"standard": "普通飞机200元/次"
					},
					{
						"id": 23,
						"type": "其他",
						"costname": "非例行检查",
						"standard": "160元/人*小时"
					},
					{
						"id": 24,
						"type": "其他",
						"costname": "除冰液",
						"standard": "45元/公升"
					},
					{
						"id": 25,
						"type": "其他",
						"costname": "升降平台车",
						"standard": "195元/小时"
					}
				],
				tableheight: '',
				pageModel: { //分页参数
					url: '/projectList.json',
					menu: [20, 50, 100],
					param: {}
				},
				modalOptions: { //弹框
					title: '编辑',
					url: edit,
					show: false,
					showTitle: true,
					width: '900px',
					height: 'auto',
					top: '8%',
					showCancelButton: true,
					cancelButtonText: '取消',
					showConfirmButton: true,
					confirmButtonText: '提交',
					confirmButtonClass: 'ivu-btn-success ivu-btn ivu-btn-large'
				},
				addOptions: {
					title: '新增',
					url: add,
					show: false,
					showTitle: true,
					width: '900px',
					height: 'auto',
					top: '8%',
					showCancelButton: true,
					cancelButtonText: '取消',
					showConfirmButton: true,
					confirmButtonText: '提交',
					confirmButtonClass: 'ivu-btn-success ivu-btn ivu-btn-large'
				},
				tabeleColumns: [{
					title: '机型名称',
					key: 'type',
					//					width: 150,
					align: 'center',
				}, {
					title: '费用名称',
					key: 'costname',
					align: 'center'
				}, {
					title: '收费标准',
					key: 'standard',
					//					width: 150,
					align: 'center',
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
										this.rowEdit(params.row)
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
		//		beforeUpdate() {
		//			const that = this;
		//			this.$nextTick(() => {
		//				setTimeout(function() {
		//					that.tableheight = document.documentElement.clientHeight - that.$refs.searchBox.$el.offsetHeight - 220
		//				}, 0);
		//
		//			})
		//		},
		mounted() {
			const that = this;
			this.$nextTick(() => {
				setTimeout(function() {
					that.tableheight = document.documentElement.clientHeight - that.$refs.searchBox.$el.offsetHeight - 220
				}, 500);

			})
		},
		methods: {
			refreshData: function(data) {
				//				debugger;
				//更新表格数据
				if(data == undefined || data == null) {
					this.tableList = [];
				} else {
					this.tableList = data;

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
				//												_this.$axios.delete('/projectList.json/' + id).then((res) => {
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
						//						debugger;
						_this.tableList.splice(index, 1)
					}
				});
			},
			rowEdit(params) {
				//				this.id = id;
				//				this.$refs.editDialog.params.id = id;
				this.$refs.editDialog.params = params;
				this.$refs.editDialog.show = true;
				this.$refs.editDialog.$children[0].getData()
				let self = this;
				this.$refs.editDialog.confirm().then((res) => {
					let dataObject = self.$refs.editDialog.$children[0].postData();

					self.tableList = self.tableList.map((t, index) => {
						return t.id === dataObject.id ?
							test : t;
					});
					// 点击确定按钮的回调处理
					//					self.$refs.editDialog.$children[0].postData().then(() => {
					//											self.$refs.pagebar.getData();

					//					});
					self.$refs.editDialog.show = false;
				}).catch(() => {
					// 点击取消按钮的回调处理		
					self.$refs.editDialog.show = false;
				});
			},
			addRow() {
				this.$refs.addDialog.show = true;
				let self = this;
				this.$refs.addDialog.confirm().then((res) => {
					let dataObject = self.$refs.addDialog.$children[0].postData();

					 self.tableList.push(dataObject)
					// 点击确定按钮的回调处理
					//					self.$refs.addDialog.$children[0].postData().then(() => {
					//						self.$refs.pagebar.getData();
					//					});
					self.$refs.addDialog.show = false;
				}).catch(() => {
					// 点击取消按钮的回调处理		
					self.$refs.addDialog.show = false;
				});
			}
		}
	}
</script>

<style>

</style>