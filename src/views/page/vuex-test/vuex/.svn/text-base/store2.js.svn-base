import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex)

//需维护的状态
const state={
	notes:[],//笔记列表
	activeNote:{},//当前笔记
	show:''
}


const mutations={
	//初始化state
	init_store(state,data){
		//debugger;
		 state.notes = data.notes,
		 state.show = data.show;
		state.activeNote = data.activeNote;
	},
	//新增笔记
	add_note(state){
		var newNote={
				id:+new Date(),
				title:state.activeNote.title,
				content:state.activeNote.content,
				favorite:false
		}
		state.notes.push(newNote);
		state.activeNote=newNote
	},
	
	//编辑笔记
	edit_note(state,note){
		//debugger;
		state.activeNote=note;
		var len=state.notes.length;
		//修改原始数据
		for(var i=0;i<len;i++){
			if(state.notes[i].id==note.id){
			   state.notes[i]=note;
				break;
			}
		}
	},
	//删除笔记
	delete_note(state){
		let len=state.notes.length;
		for(var i=0;i<len;i++){
			if(state.notes[i].id==state.activeNote.id){
				state.notes.splice(i,1);
				break;
			}
		}
		//state.notes.$remove(state.activeNote);
		state.activeNote=state.notes[0]||{}
	},
	//切换是否收藏
	toggle_favorite(state){
		state.activeNote.favorite=!state.activeNote.favorite
	},
	//切换数据展示
	set_show_all(state,show){
		//debugger;
		state.show=show;
		//切换数据，同步更新activeNote
		if(show=='favorite'){
			state.activeNote=state.notes.filter(note => note.favorite)[0]||{};
		}else{
			state.activeNote=state.notes[0]||{}
		}
	},
	//设置当前激活的笔记
	set_active_note(state,note){
		state.activeNote=note;
	}
}

const actions={
	initStore({commit}, initData) {
	      commit('init_store', initData);
	    },
	    addNote({commit}){
	    	commit('add_note')
	    },
	   editNote({commit},note){
	    	commit('edit_note',note)
	    },
	    deleteNote({commit}){
	    	commit('delete_note')
	    },
	    toggleFavorite({commit}){
	    	commit('toggle_favorite')
	    },
	    setShowAll({commit},show){
	    	commit('set_show_all',show)
	    },
	    setActiveNote({commit},note){
	    	commit('set_active_note',note)
	    }
}

const getters={
		filteredNotes:(state)=>{
			//debugger;
			 if(state.show === 'all'){
				    return state.notes || {};
				  }else if(state.show === 'favorite'){
				    return state.notes.filter(note => note.favorite) || {};
				  }
		},
		activeNote:(state)=>{
			return state.activeNote
		},
		show:(state)=>{
			return state.show
		}
}
export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})
