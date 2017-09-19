<template>
	<Row>
		<Col :xs='24'>
		<p class="noData" <!-- v-show='noData'>暂无数据</p>-->
		<div id="goodsBarEchart" class="echarts-item" :style='{height:400+"px",width: "100%"}'></div>
		</Col>
	</Row>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		mounted() {
			this.drawBar()
		},
		methods: {
			drawBar() {
				// 基于准备好的dom，初始化echarts实例
				let myBarChart = this.$echarts.init(document.getElementById('goodsBarEchart'));
				let self = this;
//				if(self.lineData.length > 0 || self.seriesData.length > 0) {
//					self.noData = false
//				} else {
//					self.noData = true
//				}
				// 绘制图表
				myBarChart.setOption({
					tooltip: {
						trigger: 'item',
					},
					legend: {
						x: 'center',
						y: 'bottom',
						data: ['货邮重量', '去年货邮重量', '增长率'] // 别忘了this  
					},
					color: ['#4572A7', '#AA4643', '#89A54E'],
					xAxis: {
						data:['一月','二月','三月','四月','五月','六月','七月']
					},
					yAxis: [{
						type: 'value',
						name: '旅客吞吐量',
						axisLabel: {
							formatter: '{value} Kg'
						}
					}, {
						type: 'value',
						name: '增长率',
						axisLabel: {
							formatter: '{value} %'
						},
						splitLine: {
							show: false
						}
					}],
					series: [{
						name: "货邮重量",
						type: "bar",
						data: [104,220,302,440,550,610,420]
					}, {
						name: "去年货邮重量",
						type: "bar",
						data: [104,204,350,480,150,260,340]
					}, {
						name: "增长率",
						type: "line",
						yAxisIndex: 1,
						data: [10,20,30,40,50,60,40]
					}]
				}, true);
			},
		}
	}
</script>

<style>

</style>