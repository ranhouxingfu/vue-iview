import axios from 'axios';
import env from '../config/env';
import Qs from 'qs';
let util = {

};
util.title = function(title) {
	title = title ? title + ' - Home' : 'iView project';
	window.document.title = title;
};

const ajaxUrl = env === 'development' ?
	'../src/views/page/data' :
	env === 'production' ?
	'../src/views/page/data' :
	'../airportcharges/src/views/page/data';

util.ajax = axios.create({
	baseURL: ajaxUrl,
	timeout: 30000
});

export default util;