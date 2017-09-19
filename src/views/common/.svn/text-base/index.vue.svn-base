<style scoped>
	.console-body {
		position: absolute;
		width: 100%;
		top: 0;
		bottom: 0;
		background-color: #fff;
		z-index: 100;
	}
	
	.layout {
		background: #fffff;
	}
	
	.layout-logo {
		width: 100px;
		height: 30px;
		background: #5b6270;
		border-radius: 3px;
		float: left;
		position: relative;
		top: 15px;
		left: 20px;
	}
	
	.layout-nav {
		/*width: 420px;*/
		margin: 0 auto;
	}
	
	.layout-assistant {
		width: 300px;
		margin: 0 auto;
		height: inherit;
	}
	
	.layout-breadcrumb {
		border-bottom: 1px solid gainsboro;
		padding: 14px 15px 14px 10px;
		background-color: #F5F7F9;
	}
	
	.layout-content {
		position: relative;
		bottom: 0;
		left: 0;
		padding-left: 250px;
	}
	
	.layout-content-main {
		padding: 10px;
	}
	
	.layout-copy {
		position: fixed;
		bottom: 0;
		margin-left: -10px;
		width: 100%;
		z-index: 12;
		border-bottom: 0;
		text-align: center;
		height: 40px;
		line-height: 40px;
		background-color: #F5F7F9;
		color: #9ea7b4;
	}
	
	.sidebar {
		width: 250px;
		position: fixed;
		top: 50px;
		bottom: 0;
		background-color: #f9f9f9;
		z-index: 102;
		overflow-x: hidden;
		overflow-y: auto;
		height: auto;
		border-right: 1px solid gainsboro!important;
	}
	
	.ivu-menu-dark {
		background-color: #464c5b;
	}
	
	.ivu-menu-vertical.ivu-menu-light:after {
		width: 0!important;
	}
	
	.ivu-menu-dark.ivu-menu-vertical .ivu-menu-item {
		color: #9ea7b4;
	}
	
	.ivu-menu-dark.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu) .ivu-menu-vertical.ivu-menu-light:after {
		content: none!important;
	}
	
	.ivu-menu-light.ivu-menu-horizontal .ivu-menu-item,
	.ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu {
		color: #fff;
	}
	
	.ivu-menu-light.ivu-menu-horizontal .ivu-menu-item-active,
	.ivu-menu-light.ivu-menu-horizontal .ivu-menu-item:hover,
	.ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu-active,
	.ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu:hover {
		color: #e4eaec;
		border-bottom: none;
		background-color: rgba(0, 0, 0, .1);
	}
	
	.ivu-select-dropdown .ivu-menu-item:hover {
		color: #495060!important;
	}
	
	.ivu-dropdown-item {
		font-size: 14px!important;
	}
	
	.ivu-menu-horizontal.ivu-menu-light:after {
		background: none!important;
	}
	/*顶部*/
	
	.topbar {
		position: fixed!important;
		top: 0;
		left: 0;
		z-index: 101;
		clear: both;
		height: 50px!important;
		font-size: 12px;
		width: 100%;
		/*background: #09c;*/
		background: #34495e;
	}
	
	.topbar-info:hover {
		/*background: #2b3946;*/
		background: #008fbf;
		cursor: pointer;
		overflow: hidden;
		transition: all .3s linear;
	}
	
	.topbar .ivu-col {
		/*background: #09c;*/
		font-size: 20px;
		color: #fff;
		height: 50px;
		line-height: 50px;
	}
	
	.user-box {
		float: right;
		z-index: 2;
	}

	.topbar-info {
		float: left;
		width: 100px;
		height: 50px;
		background: #34495e;
		border-left: 1px solid #008fbf;
		color: #fff;
		font-size: 14px;
		text-align: center;
		text-overflow: ellipsis;
		white-space: nowrap;
		margin-right: 15px;
		overflow: hidden;
		transition: all .3s linear;
	}
	
	.topbar-info .ivu-select-dropdown {
		z-index: 112;
	}
	
	.topbar-info>.ivu-dropdown {
		width: 100px;
	}
	
	.topbar-info a {
		color: #fff;
	}
	
	.user-name {
		color: white;
	}
	
	.user-name:hover {
		color: white;
	}
	
	.console-topbar .ivu-col .topbar-home-link {
		display: inline-block;
		height: 50px;
		box-sizing: border-box;
		padding: 0 20px;
		color: #fff;
		font-size: 14px;
		line-height: 50px;
		border-right: 1px solid #008fbf;
	}
	
	.sidebar>ul>li:first-child>div {}
	
	.content {
		padding: 10px;
		background: #ffffff;
		/*padding-bottom: 30px;*/
		overflow-y: auto;
	}
	
	.sidebar .ivu-icon {
		font-size: 20px;
	}
	
	.ivu-menu {
		width: 100%;
	}
	
	.ivu-menu-horizontal {
		height: 50px;
		line-height: 50px;
		float: left;
	}
	
	.layout-logo-left {
		width: 90%;
		height: 50px;
		/*background: #5b6270;*/
		/*border-radius: 3px;*/
		margin: 0 auto;
		line-height: 50px;
		color: white;
		text-align: center;
		vertical-align: middle;
		overflow: hidden;
	}
	
	.fade-enter-active,
	.fade-leave-active {
		animation-name: fade;
		animation-duration: 0s;
		animation-timing-function: linear;
	}
	
	
	.monthcol {
		background: #fff;
		display: block;
		margin: 0;
		padding: 0;
		outline: 0;
		list-style: none;
		color: #495060;
		font-size: 14px;
		position: relative;
	}
	
	.monthcol li {
		position: relative;
		cursor: pointer;
		z-index: 1;
		transition: all .2s ease-in-out;
		border-bottom: 1px solid #eee;
	}
	
	.monthcol li a {
		color: #495060;
		margin: 5px 24px;
		width: 100%;
		display: inline-block;
	}
</style>
<template>
	<div class="layout console-body">
		<div class="sidebar">
			<Menu active-name="1-2" width="auto" :open-names="['1']" accordion="" @on-select="routeTo">
				<Menu-item :name="citem.key" v-for="citem in menuList" :key="citem.id">
					<span class="layout-text">{{citem.name}}</span>
				</Menu-item>
			</Menu>
		</div>
		<div class="layout-content">
			<Row class="topbar">
				<i-col span="6">
					<div class="layout-logo-left">
						<h3><Icon type="ios-home-outline" style="font-size: 40px;position: relative;top: 3px;"></Icon>&nbsp;收费管理系统</h3></div>
				</i-col>
				<i-col span="18">
					<section class="user-box">
						<!--<div class="user-head">

						</div>-->
						<div class="topbar-info">
							<Dropdown @on-click="routeTo" trigger='click'>
								<a href="javascript:void(0)">
									admin
									<Icon type="arrow-down-b"></Icon>
								</a>
								<Dropdown-menu slot="list">
									<Dropdown-item name='person'>
										<Icon type="person"></Icon>个人信息</Dropdown-item>
									<Dropdown-item name="login">
										<Icon type="log-out"></Icon>退出</Dropdown-item>
								</Dropdown-menu>
							</Dropdown>
						</div>
					</section>
				</i-col>
			</Row>
			<Row style="top:50px;position: fixed;width: 100%;z-index: 13;">
				<i-col span="24">
					<div class="layout-breadcrumb">
						<Breadcrumb separator=">">
							<Breadcrumb-item>收费管理系统</Breadcrumb-item>
							<Breadcrumb-item>{{this.$route.name.replace('/','')}}</Breadcrumb-item>
						</Breadcrumb>
					</div>
				</i-col>
			</Row>
			<Row style="top:100px;overflow-y: auto;" id="content">
				<i-col span="24">
					<div class="content" :style='{height:contentHeight}'>
						<transition name="fade" appear mode="out-in">
							<router-view></router-view>
						</transition>
						<div class="layout-copy">
							2016-2018 &copy; 成都酷睿科技有限公司
						</div>
					</div>
				</i-col>
			</Row>
		</div>
	</div>
</template>

<script>
	import css from '../assets/css/style.css';
	export default {
		data() {
			return {
				contentHeight: '',
				menuList: [{
						key: 'chargeManagement',
						name: '收费管理',
						icon: '',
						id: '1'
					},
					{
						key: 'chargeProject',
						name: '收费项目管理',
						icon: '',
						id: '2'

					}, {
						key: 'chargeUnit',
						name: '收费部门管理',
						icon: '',
						id: '3'

					}, {
						key: 'test',
						name: '统计分析',
						icon: '',
						id: '4'

					},
					{
						key: 'vuex',
						name: 'vuex笔记',
						icon: '',
						id: '7'

					}
				],
				visible: false
			}
		},
		mounted() {
			this.contentHeight = `${document.documentElement.clientHeight - 150}px`;
			window.onresize = () => {
				return(() => {
					this.contentHeight = `${document.documentElement.clientHeight - 150}px`;
				})()
			}
		},
		watch: {
			screenWidth(val) {
				if(!this.timer) {
					this.contentHeight = val
					this.timer = true
					let that = this
					setTimeout(function() {
						that.init()
						that.timer = false
					}, 400)
				}
			}
		},
		methods: {
			routeTo(e) {
				let _this = this;
				_this.$router.push(e);
			},
		}
	}
</script>