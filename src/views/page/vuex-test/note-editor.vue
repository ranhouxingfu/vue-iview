<template>
	<div id="note-editor">
		<div class="form-group">
			<input type="text" name="title" class="title form-control" placeholder="请输入标题" v-model='currentNote.title'>
			<textarea name="content" class="form-control" rows="13" placeholder="请输入正文" v-model='currentNote.content'></textarea>
		</div>
		<Button type="success"  @click='saveEditData'>编辑</Button>
		<Button type="primary"  @click='saveAddData'>新增</Button>
	</div>
</template>

<script>
	export default {
		
		computed: {
			// 通过计算属性得到的一个对象，这样子我们就能愉快的使用 v-model 了
			currentNote:(state)=>{
//				debugger;
				return state.$store.getters.activeNote
			}
		},
		methods:{
			saveEditData(){
//				debugger;
					this.$store.dispatch('editNote',this.$store.getters.activeNote)
			},
			saveAddData(){
				this.$store.dispatch('addNote')
			}
				
		}
	}
</script>

<style>
	#note-editor {
		float: left;
		width: 300px;
		height: 320px;
	}
	
	.form-group>input {
		outline: none;
		width: 100%;
		padding: 5px;
		border: none;
		border-bottom: 1px solid gainsboro;
	}
	
	.form-group>textarea {
		outline: none;
		width: 100%;
		padding: 5px;
		border: none;
		resize: none;
	}
	#note-editor button{
		float: right;
		margin-right: 5px;
	}
</style>