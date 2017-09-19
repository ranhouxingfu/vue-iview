<style scoped>
	.loginBox {
		width: 100%;
		height: 100%;
		background-image: url(../assets/img/login.jpg);
	}
	
	.wrapper {
		position: absolute;
		width: 100%;
		height: 100%;
		padding: 20px 500px 20px 20px;
		background-color: rgba(0, 0, 0, 0.2);
		color: white;
	}
	
	.login-content h3 {
		font-size: 30px;
		font-weight: 500;
	}
	
	.login-info {
		position: fixed;
		top: 50%;
		left: 30%;
		width: 40%;
		height: 50%;
		-webkit-transform: translateX(-50%) translateY(-50%);
	}
	
	.login-content ul {
		margin-top: 30px;
		font-size: 16px;
	}
	
	.login-content li {
		line-height: 30px;
	}
	
	.login-check {
		position: absolute;
		top: 50%;
		right: 75px;
		width: 350px;
		height: 50%;
		-webkit-transform: translateY(-50%);
	}
	
	.login-main {
		margin-bottom: 0!important;
		position: fixed;
		top: 0;
		right: 0;
		height: 100%;
		min-height: 600px;
		padding: 0;
		color: #76838f;
		width: 500px;
		background-color: white;
	}
</style>

<template>
	<div class="loginBox">
		<div class="wrapper">
			<div class="login-info">
				<div class="login-content">
					<h3><Icon type="person-stalker" style='font-size: 40px;'></Icon>&nbsp;&nbsp;西藏区局-后台管理系统</h3>
					<ul class="list-icons">
						<li>
							<i class="wb-check" aria-hidden="true"></i>
							<Icon type="android-done"></Icon>&nbsp;控立机场生产统计指标体系的基本原则机场生产统计就是运用一套完整的统计指标体系来调查、整理和分析机场。
						</li>
						<li><i class="wb-check" aria-hidden="true"></i>
							<Icon type="android-done"></Icon>&nbsp;采用智能客户端完成系统的部署和发布。</li>
						<li><i class="wb-check" aria-hidden="true"></i>
							<Icon type="android-done"></Icon> &nbsp;采用“多线程+Windows异步消息”的方式实现民航地区管理局与管辖机场之间的数据同步问题。
						</li>
					</ul>
					<!--<div>
						<a href="http://admui.com" class="btn btn-primary btn-outline"><i class="icon wb-home"></i> 返回官网</a>
						<a href="" class="btn btn-primary btn-outline margin-left-5">联系客服</a>
					</div>-->
				</div>
			</div>
			<div class="login-main">
				<div class="login-check">
					<h2 style="margin-bottom: 50px;font-weight: 400;">登录收费管理系统</h2>
					<i-form ref="formInline" :model="formInline" :rules="ruleInline">
						<Form-item prop="user">
							<Input v-model="formInline.user" placeholder="请输入用户名"></Input>
						</Form-item>
						<Form-item prop="password">
							<Input v-model="formInline.password" type="password" placeholder="请输入密码" ></Input>
						</Form-item>
						<Form-item prop="checkcode">
							<Input v-model="formInline.checkcode" style="width: 200px;" placeholder="请输入验证码"></Input>
						</Form-item>
						<Form-item>
							<i-button type="success" @click.native="handleSubmit('formInline')" long>登录</i-button>
						</Form-item>
					</i-form>
				</div>
				<div class="loginFooter" style="width: 100%;height: 40px;position: absolute;bottom: 0;text-align: center;">
					<div style="text-align: left;width: 70%;display: inline-block;">
						<p style="line-height: 20px;text-align: left;">技术支持：成都酷睿科技有限公司</p>
						<p style="line-height: 20px;"> 联系电话：028-85224138 &nbsp; &nbsp;&nbsp;	网址：www.corechina.com</p>
					</div>

				</div>
			</div>
		</div>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				formInline: {
					user: '',
					password: '',
				},
				ruleInline: {
					user: [{
						required: true,
						message: '请填写用户名',
						trigger: 'blur'
					}],
					password: [{
						required: true,
						message: '请填写密码',
						trigger: 'blur'
					}, {
						type: 'string',
						min: 6,
						message: '密码长度不能小于6位',
						trigger: 'blur'
					}]
				}
			}
		},
		methods: {
			handleSubmit(name) {
				this.$refs[name].validate((valid) => {
					if(valid) {
						this.$Message.success('登陆成功!');
						this.$router.push('/chargeManagement');
					} else {
						this.$Message.error('表单验证失败!');
					}
				})
			},
			handleReset(val) {
				console.log(val)
			}
		}
	}
</script>