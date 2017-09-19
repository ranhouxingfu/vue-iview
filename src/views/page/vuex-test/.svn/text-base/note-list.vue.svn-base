<template>
	<div id="notes-list">
		<div id="list-header">
			<h2>Notes | heavenru.com</h2>
			<!-- all -->
			<Button-group>
				<Button @click='changeList("all")'>All notes</Button>
				<Button type="primary" @click='changeList("favorite")'>Favorite</Button>
			</Button-group>
		</div>

		<!-- 渲染笔记列表 -->
		<div class="container">
			<li v-for="note in filteredNotes" class="list-group-item" href="#">
				<a class="list-group-item-heading" @click='setActiveNote(note)'>
					{{note.title.trim().substring(0,30)}}
				</a>
			</li>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				filteredNotes: []
			}
		},
		mounted() {
			let self = this;
			//			debugger
			this.$nextTick(() => {
				setTimeout(function() {
					return self.filteredNotes = self.$store.getters.filteredNotes
				}, 100)
			})
		},
		methods: {
			changeList(status) {
				this.$store.dispatch('setShowAll', status);
				this.filteredNotes = this.$store.getters.filteredNotes;
			},
			setActiveNote(note){
				this.$store.dispatch('setActiveNote',note)
			}

		}
	}
</script>

<style>
	#notes-list {
		float: left;
		width: 300px;
		height: 320px;
		background: ghostwhite;
	}
	
	#list-header {
		text-align: center;
		padding-bottom: 10px;
	}
	
	#list-header>h2 {
		padding-bottom: 10px;
		padding-top: 10px;
	}
	
	.list-group-item {
		display: block;
		list-style: none;
		width: 100%;
		color: white;
	}
	
	.list-group-item-heading {
		display: block;
		width: 100%;
		padding: 10px;
		color: white;
	}
	
	.container :nth-child(odd) {
		background: rgba(51, 122, 183, 0.3);
	}
	
	.container:nth-child(even) {
		background: rgba(51, 122, 183, 0.1);
	}
</style>