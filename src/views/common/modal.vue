<template>
	<section>
		<section class="modal" v-show="show" transition="modal-scale">
			<section class="modal-dialog" v-bind:style='{width:width,marginTop:top}'>
				<section class="modal-content">
					<!--头部-->
					<section class="modal-header" v-if="showTitle">
						<slot name="header">
							<p class="modal-title">{{title}}</p>
						</slot>
						<a class="modal-close" @click='close(0)'><i class="ivu-icon ivu-icon-ios-close-empty"></i></a>
					</section>
					<!--内容区域-->
					<section class="modal-body" v-bind:style='{height:height}'>
						<slot name="body">
							 <component v-bind:is="which_to_show"></component> 
							<!--<div class="notice" v-html='url'></div>-->
						</slot>
					</section>
					<!--尾部,操作按钮-->
					<section class="modal-footer">
						<slot name="button">
							<!--<button type="button" :class="[cancelButtonClass]">{{cancelButtonText}}</button>
							<button type="button" :class="[confirmButtonClass]">{{confirmButtonText}}</button>-->
							<a v-if="showCancelButton" href="javascript:void(0)" class="button " :class="[cancelButtonClass]" @click='close(1)'>{{cancelButtonText}}</a>
							<a v-if="showConfirmButton" href="javascript:void(0)" class="button " :class="[confirmButtonClass]" @click='submit($event)'>{{confirmButtonText}}</a>
						</slot>
					</section>
				</section>
			</section>
		</section>
		<section v-show="show" class="modal-backup" transition="modal-scale"></section>
	</section>
</template>

<script>
	export default {
		/**
		 * modal 模态接口参数
		 * @param {string} modal.title 模态框标题
		 * @param {string} modal.text 模态框内容
		 * @param {boolean} modal.showCancelButton 是否显示取消按钮
		 * @param {string} modal.cancelButtonClass 取消按钮样式
		 * @param {string} modal.cancelButtonText 取消按钮文字
		 * @param {string} modal.showConfirmButton 是否显示确定按钮
		 * @param {string} modal.confirmButtonClass 确定按钮样式
		 * @param {string} modal.confirmButtonText 确定按钮标文字
		 * @param {string} modal.height 模态框高度
		 * @param {string} modal.width 模态框宽度
		 * @param {string} modal.top 模态框距离浏览器顶部距离
		 * @param {string} modal.left 模态框距离浏览器左边距离
		 */
		props: ['modal-options'],
		data() {
			return {
				which_to_show: this.modalOptions.url,
				show: false, // 是否显示模态框
				showTitle: typeof this.modalOptions.showTitle === 'undefined' ? true : this.modalOptions.showTitle,
				title: this.modalOptions.title || '提示',
//				text: this.modalOptions.text,
				height: this.modalOptions.height || '300px',
				width: this.modalOptions.width || '690px',
				top: this.modalOptions.top || '5%',
				params:this.modalOptions.param||[],
//				left: this.modalOptions.left || '45%',
				showCancelButton: typeof this.modalOptions.showCancelButton === 'undefined' ? true : this.modalOptions.showCancelButton,
				cancelButtonClass: this.modalOptions.cancelButtonClass ? this.modalOptions.showCancelButton : 'ivu-btn-default ivu-btn ivu-btn-large',
				cancelButtonText: this.modalOptions.cancelButtonText ? this.modalOptions.cancelButtonText : '取消',
				showConfirmButton: typeof this.modalOptions.showConfirmButton === 'undefined' ? true : this.modalOptions.showConfirmButton,
				confirmButtonClass: this.modalOptions.confirmButtonClass ? this.modalOptions.confirmButtonClass : 'ivu-btn-primary ivu-btn ivu-btn-large',
				confirmButtonText: this.modalOptions.confirmButtonText ? this.modalOptions.confirmButtonText : '确定',
				resolve: '',
				reject: '',
				promise: '', // 保存promise对象
			};
		},
		methods: {
			/**
			 * 确定,将promise断定为完成态
			 */
			submit() {
//				debugger;
				this.resolve('submit');
			},
			/**
			 * 关闭,将promise断定为reject状态
			 * @param type {number} 关闭的方式 0表示关闭按钮关闭,1表示取消按钮关闭
			 */
			close(type) {
				this.show = false;
				this.reject(type);

			},
			/**
			 * 显示confirm弹出,并创建promise对象
			 * @returns {Promise}
			 */
			confirm() {
				this.show = true;
				this.promise = new Promise((resolve, reject) => {
					this.resolve = resolve;
					this.reject = reject;
				});
				return this.promise; //返回promise对象,给父级组件调用
			}
		},
	}
</script>
<style>
	.modal {
		position: fixed;
		left: 0;
		width: 100%;
		right: 0;
		top:0;
		bottom: 0;
		z-index: 999;
		/*-webkit-overflow-scrolling: touch;*/
		outline: 0;
		/*overflow: hidden;*/
		margin: 0 auto;
		/*margin-top: 30px;*/
	}
	
	.modal-dialog {
		margin:auto;
		border-radius: 6px;
		background: #fff;
		min-width: 400px;
	}
	
	.modal-backup {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: 666;
		background: rgba(55, 55, 55, 0.5);
		overflow: hidden;
	}
	
	.modal-title {
		display: inline-block;
		width: 90%;
		height: 20px;
		line-height: 20px;
		font-size: 14px;
		color: #464c5b;
		font-weight: 700;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	.modal-header {
		border-bottom: 1px solid #e3e8ee;
		padding: 14px 16px;
		line-height: 1;
	}
	
	.modal-close {
		font-size: 31px;
		float: right;
		/*position: absolute;*/
		/*right: 16px;*/
		/*top: 8px;*/
		margin-top: -5px;
		overflow: hidden;
		cursor: pointer;
	}
	
	.modal-body {
		padding:5px 15px;
		min-height: 300px;
		overflow: auto;
	}
	
	.modal-footer {
		border-top: 1px solid #e3e8ee;
		padding: 12px 18px;
		text-align: right;
	}
</style>