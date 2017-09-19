<template>
	<section class="noteBox">
		<tool-bar></tool-bar>
		<note-list></note-list>
		<note-editor></note-editor>
	</section>
</template>

<script>
	import toolBar from './tool-bar.vue'
	import noteList from './note-list.vue'
	import noteEditor from './note-editor.vue'
	export default {
		components: {
			toolBar,
			noteList,
			noteEditor
		},
		mounted() {
			//模拟初始化数据
			const initData = {
				show: 'all',
				notes: [{
					id: +new Date(),
					title: '我的笔记',
					content: '第一篇笔记内容',
					favorite: false
				}],
				activeNote: {
					id: +new Date(),
					title: '我的笔记',
					content: '第一篇笔记内容',
					favorite: false
				}
			};
			this.$store.dispatch('initStore', initData)
		}
	}
</script>

<style>
	.noteBox {
		width: 682px;
		border: 1px solid gainsboro;
		height: 325px;
	}
</style>