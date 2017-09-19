<template>
	<section>
		<section class="btnGroup">
			<Button type="success" size='large' icon="plus" @click='addRow'>新增</Button>
		</section>

		<row>
			<Table :context="self" :data="tableList" :columns="tabeleColumns" :height="tableheight" border></Table>
			<page-bar :page-model="pageModel" v-on:refresh='refreshData' ref="pagebar"></page-bar>
		</row>
		<model ref="editDialog" :modal-options.sync="editOptions"></model>
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
			add
		},
		data() {
			return {
				self: this,
				tableList: [{
						"id": 2,
						"name": "二大队",
						"projectname": "旅客摆渡车"
					},
					{
						"id": 3,
						"name": "三大队",
						"projectname": "电源车"
					},
					{
						"id": 4,
						"name": "四大队",
						"projectname": "除冰车"
					},
					{
						"id": 5,
						"name": "五大队",
						"projectname": "引导车"
					}
				],
				tableheight: '',
				pageModel: { //分页参数
					url: '/unitList.json',
					menu: [20, 50, 100],
					param: {}
				},
				editOptions: {
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
					title: '部门名称',
					key: 'name',
					//					width: 150,
					align: 'center',
				}, {
					title: '收费项目名称',
					key: 'projectname',
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
				}]
			}
		},
		//		beforeUpdate() {
		//			const that = this;
		//			this.$nextTick(() => {
		//				setTimeout(function() {
		//					that.tableheight = document.documentElement.clientHeight - 220
		//				}, 0);
		//
		//			})
		//		},
		mounted() {
			const that = this;
			this.$nextTick(() => {
				setTimeout(function() {
					that.tableheight = document.documentElement.clientHeight - 220
				}, 500);

			})
		},
		methods: {
			refreshData: function(data) {
				//更新表格数据
				if(data == undefined || data == null) {
					this.tableList = [];
				} else {
					this.tableList = data;

				}
			},
			rowDelete(id) {
				let _this = this;
				_this.$Modal.confirm({
					title: '提示',
					content: '<p>确认删除该条信息吗？</p>',
					okText: '确认',
					cancelText: '取消',
					onOk: () => {
						_this.tableList.splice(id, 1)
						//						_this.$axios.delete('http://localhost:3003/unitData/' + id).then((res) => {
						//							_this.$refs.pagebar.getData();
						//						})
					}
				});
			},
			rowEdit(params) {
				//				this.id = id;
				//				this.$refs.editDialog.params.id = id;
				this.$refs.editDialog.params = params;
				this.$refs.editDialog.show = true;
				this.$refs.editDialog.$children[0].getData();
				let self = this;
				this.$refs.editDialog.confirm().then((res) => {
					let dataObject = self.$refs.editDialog.$children[0].postData();

					self.tableList = self.tableList.map((t, index) => {
						return t.id === dataObject.id ?
							test : t;
					});
					// 点击确定按钮的回调处理
					//					self.$refs.editDialog.$children[0].postData().then(() => {
					//						self.$refs.pagebar.getData();
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