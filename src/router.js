const routers = [{
		path: '/',
		meta: {
			title: '机场收费管理系统'
		},
		redirect: '/login'
	},
	{
		path: '/index',
		meta: {
			title: '机场收费管理系统'
		},
		component: resolve => require(['./views/common/index.vue'], resolve),
		children: [{
			path: '/chargeManagement',
			name:'收费管理',
			meta: {
				title: '收费管理'
			},
			component: resolve => require(['./views/page/charge-management/charge-management.vue'], resolve),
		},{
			path: '/chargeProject',
			name:'收费项目管理',
			meta: {
				title: '收费项目管理'
			},
			component: resolve => require(['./views/page/charge-project/charge-project.vue'], resolve),
		},{
			path: '/chargeUnit',
			name:'收费部门管理',
			meta: {
				title: '收费部门管理'
			},
			component: resolve => require(['./views/page/charge-unit/charge-unit.vue'], resolve),
		},{
			path: '/test',
			name:'统计分析',
			meta: {
				title: '统计分析'
			},
			component: resolve => require(['./views/page/statistical-analysis/test.vue'], resolve),
		},{
			path:'/chargeManagementAdd',
			name:'收费管理新增',
			meta: {
				title: '收费管理'
			},
			component: resolve => require(['./views/page/charge-management/add.vue'], resolve),
		},{
			path:'/chargeManagementEdit',
			name:'收费管理编辑',
			meta: {
				title: '收费管理'
			},
			component: resolve => require(['./views/page/charge-management/edit.vue'], resolve),
		},{
			path:'/vuex',
			name:'vuex笔记',
			meta: {
				title: 'vuex笔记'
			},
			component: resolve => require(['./views/page/vuex-test/note.vue'], resolve),
		}],
	},
	{
		path: '/login',
		meta: {
			title: '机场收费管理系统'
		},
		component: resolve => require(['./views/common/login.vue'], resolve)
	},
]
export default routers;