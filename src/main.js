import Vue from 'vue';
import iView from 'iview';
import VueRouter from 'vue-router';
import Routers from './router';
import 'babel-polyfill';
import Util from './libs/util';
import App from './app.vue';
import 'iview/dist/styles/iview.css';
import echarts from 'echarts';
import loading from './views/common/loading';
import Promise from 'promise-polyfill';  
import EventSource from 'eventsource-polyfill';
import Vuex from 'vuex';
import store from './views/page/vuex-test/vuex/store2.js';
if (!window.Promise) {  
  window.Promise = Promise;  
}  
if(!window.EventSource){
	window.EventSource=EventSource
}
const Axios = Util.ajax;
Vue.prototype.$axios = Axios;
Vue.prototype.$echarts = echarts;
Vue.use(VueRouter);
Vue.use(Vuex);

Vue.use(iView);



// 路由配置
const RouterConfig = {
//  mode: 'history',
    routes: Routers
};

const router = new VueRouter(RouterConfig);
//loading加载
var help = new Vue({
	el: '#help',
	render: h => h(loading)
})
router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    Util.title(to.meta.title);
    next();
});

router.afterEach(() => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});



new Vue({
    el: '#app',
    router: router,
    store,
    render: h => h(App)
});
var loadinginstace;
//http request 拦截器
Axios.interceptors.request.use(
		
	config => {
		//		if(store.state.token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
		//			config.headers.Authorization = `token ${store.state.token}`;
		//		}
		help.$children[0].showLoading = true;
		return config;
	},
	err => {
		loadinginstace.close()

		//help.$children[0].showLoading = false;
		iView.Message.error('网络不给力，请稍后再试');
		return Promise.reject(err);
	});

// http response 拦截器
Axios.interceptors.response.use(
	response => {
		setTimeout(function() {
			help.$children[0].showLoading = false;
		}, 800)
		return response;
	},
	error => {
		if(error.response) {
			switch(error.response.status) {
				case 401:
					// 返回 401 清除token信息并跳转到登录页面
					//store.commit(types.LOGOUT);
					router.replace({
						path: 'login',
						query: {
							redirect: router.currentRoute.fullPath
						}
					})
			}
			help.$children[0].showLoading = false;
			iView.Message.error('加载失败');
		}
		return Promise.reject(error) // 返回接口返回的错误信息
	});