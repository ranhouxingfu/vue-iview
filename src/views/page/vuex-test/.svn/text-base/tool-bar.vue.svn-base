<template>
	<div id="toolbar">
		<i class="ivu-icon ivu-icon-help-buoy"></i>
		<i class="ivu-icon ivu-icon-plus" @click='addNote'></i>
		<i class="ivu-icon ivu-icon-star" :class="{starred: currentNote.favorite}" @click="toggleFavorite"></i>
		<i class="ivu-icon ivu-icon-close" @click="deleteNote"></i>
	</div>
</template>

<script>
	export default {
		computed: {
			// 通过计算属性得到的一个对象，这样子我们就能愉快的使用 v-model 了
			currentNote: (state) => {
				return state.$store.getters.activeNote
			}
		},
		methods: {
			addNote() {
				this.$store.dispatch("addNote")
			},
			toggleFavorite() {
				this.$store.dispatch("toggleFavorite")
			},
			deleteNote(){
				this.$store.dispatch("deleteNote")
			}
		}
	}
</script>

<style>
	#toolbar {
		float: left;
		width: 80px;
		height: 100%;
		background-color: #30414D;
		color: #767676;
		padding: 35px 25px 25px 25px;
	}
	
	#toolbar>i {
		font-size: 30px;
		margin-bottom: 35px;
		cursor: pointer;
		opacity: 0.5;
		transition: opacity 0.5s ease;
	}
	
	#toolbar>i:hover {
		opacity: 1;
		transition: opacity 0.5s ease;
	}
	
	.starred {
		color: #F7AE4F;
	}
</style>