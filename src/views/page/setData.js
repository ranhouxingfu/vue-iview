module.exports = function() {
	var data = {
		tableList : [],
		projectList : [],
		unitList:[],
		chargeData:[],
		projectData:[],
		unitData:[],
	};
	//var rows = [], projectData = [],unitData=[];
	var total = 0;
	data.chargeData.push({
		id:1,
		name : 'xxxxxxxxxxxxxxx',
		standard : 2236.85,
		flylanding : null,
		money : 366843.10,
		money1 : 346078.68,
		tax : 20764.72,
		department : '',
		mark : ''
	}, {
		id:2,
		name : 'xxxxxxxxxxxxxxx',
		standard : '476.85',
		flylanding : 164,
		money : 78203.40,
		money1 : 73776.79,
		tax : 4426.61,
		department : '',
		mark : ''
	}, {
		id:3,
		name : 'xxxxxxxxxxxxxxx',
		standard : '476',
		flylanding : 164,
		money : 78203.40,
		money1 : 73776.79,
		tax : 4426.61,
		department : '',
		mark : ''
	}, {
		id:4,
		name : 'xxxxxxxxxxxxxxx',
		standard : 102,
		flylanding : 164,
		money : 78203.40,
		money1 : 73776.79,
		tax : 4426.61,
		department : '',
		mark : ''
	}, {
		id:5,
		name : 'xxxxxxxxxxxxxxx',
		standard : 120,
		flylanding : 164,
		money : 78203.40,
		money1 : 73776.79,
		tax : 4426.61,
		department : '',
		mark : ''
	}, {
		id:6,
		name : 'xxxxxxxxxxxxxxx',
		standard : 150,
		flylanding : 164,
		money : 78203.40,
		money1 : 73776.79,
		tax : 4426.61,
		department : '',
		mark : ''
	}, {
		id:7,
		name : 'xxxxxxxxxxxxxxx',
		standard : 608,
		flylanding : 164,
		money : 78203.40,
		money1 : 73776.79,
		tax : 4426.61,
		department : '',
		mark : ''
	}, {
		id:8,
		name : 'xxxxxxxxxxxxxxx',
		standard : 304,
		flylanding : 164,
		money : 78203.40,
		money1 : 73776.79,
		tax : 4426.61,
		department : '',
		mark : ''
	}, {
		id:9,
		name : 'xxxxxxxxxxxxxxx',
		standard : 150,
		flylanding : 164,
		money : 78203.40,
		money1 : 73776.79,
		tax : 4426.61,
		department : '',
		mark : ''
	}, {
		id:10,
		name : 'xxxxxxxxxxxxxxx',
		standard : 2310,
		flylanding : 164,
		money : 78203.40,
		money1 : 73776.79,
		tax : 4426.61,
		department : '',
		mark : ''
	}, {
		id:11,
		name : 'xxxxxxxxxxxxxxx',
		standard : 267,
		flylanding : 164,
		money : 78203.40,
		money1 : 73776.79,
		tax : 4426.61,
		department : '',
		mark : ''
	})

	data.projectData.push({
		id:1,
		type : 'A330',
		costname : 'xxxxxxxxxxxxxxx',
		standard : 2940
	}, {
		id:2,
		type : 'A330',
		costname : 'xxxxxxxxxxxxxxx',
		standard : 2940
	}, {
		id:3,
		type : 'A330',
		costname : 'xxxxxxxxxxxxxxx',
		standard : 2940
	}, {
		id:4,
		type : 'A330',
		costname : 'xxxxxxxxxxxxxxx',
		standard : 2940
	}, {
		id:5,
		type : 'A330',
		costname : 'xxxxxxxxxxxxxxx',
		standard : 2940
	}, {
		id:6,
		type : 'A330',
		costname : 'xxxxxxxxxxxxxxx',
		standard :2940
	}, {
		id:7,
		type : 'A330',
		costname : 'xxxxxxxxxxxxxxx',
		standard :2940
	}, {
		id:8,
		type : 'A330',
		costname : 'xxxxxxxxxxxxxxx',
		standard : 2940
	}, {
		id:9,
		type : 'A330',
		costname : 'xxxxxxxxxxxxxxx',
		standard : '2940'
	}, {
		id:10,
		type : 'A330',
		costname : 'xxxxxxxxxxxxxxx',
		standard : 2940
	}, {
		id:11,
		type : 'A330',
		costname : 'xxxxxxxxxxxxxxx',
		standard : 2940
	}, {
		id:12,
		type : '其他',
		costname : 'xxxxxxxxxxxxxxx',
		standard : '普通飞机160元/次'
	}, {
		id:13,
		type : '其他',
		costname : 'xxxxxxxxxxxxxxx',
		standard : '宽体飞机320元/次'
	}, {
		id:14,
		type : '其他',
		costname : 'xxxxxxxxxxxxxxx',
		standard : '55元/次'
	}, {
		id:15,
		type : '其他',
		costname : 'xxxxxxxxxxxxxxx',
		standard : '40元/次'
	}, {
		id:16,
		type : '其他',
		costname : 'xxxxxxxxxxxxxxx',
		standard : '45元/小时'
	}, {
		id:17,
		type : '其他',
		costname : 'xxxxxxxxxxxxxxx',
		standard : '600元/小时'
	}, {
		id:18,
		type : '其他',
		costname : 'xxxxxxxxxxxxxxx',
		standard : '120元/次'
	}, {
		id:19,
		type : '其他',
		costname : 'xxxxxxxxxxxxxxx',
		standard : '宽体飞机480元/次'
	}, {
		id:20,
		type : '其他',
		costname : 'xxxxxxxxxxxxxxx',
		standard : '普通飞机160元/次'
	}, {
		id:21,
		type : '其他',
		costname : 'xxxxxxxxxxxxxxx',
		standard : '宽体飞机400元/次'
	}, {
		id:22,
		type : '其他',
		costname : '电源车',
		standard : '普通飞机200元/次'
	}, {
		id:23,
		type : '其他',
		costname : '非例行检查',
		standard : '160元/人*小时'
	}, {
		id:24,
		type : '其他',
		costname : '除冰液',
		standard : '45元/公升'
	}, {
		id:25,
		type : '其他',
		costname : '升降平台车',
		standard : '195元/小时'
	})
	data.unitData.push({
		id:1,
		name:'一大队',
		projectname:'机组摆渡车'
	},{
		id:2,
		name:'二大队',
		projectname:'旅客摆渡车'
	},{
		id:3,
		name:'三大队',
		projectname:'电源车'
	},{
		id:4,
		name:'四大队',
		projectname:'除冰车'
	},{
		id:5,
		name:'五大队',
		projectname:'引导车'
	})
	data.tableList.push({
		total : data.chargeData.length,
		rows : data.chargeData,
	})
	data.projectList.push({
		total : data.projectData.length,
		rows : data.projectData
	})
	data.unitList.push({
		total : data.unitData.length,
		rows : data.unitData
	})
	return data
}