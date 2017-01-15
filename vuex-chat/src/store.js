import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const now = new Date();
const store = new Vuex.Store({
	state:{
		user:[
		 {
			name:'excited',
			img:'dist/images/1_copy.jpg',
			email:'123@gmail.com'
		 },
		 {
			name:'+1s',
			img:'dist/images/2_copy.jpg',
			email:'123@gmail.com'
		 },
		 {
			name:'jzm',
			img:'dist/images/3_copy.jpg',
			email:'123@gmail.com'
		 }
		],
		sessions: [
			{
				id:1,
				user:{
					name:'user1',
					img:'dist/images/1_copy.jpg'
				},
				messages: [
					{
						content:'hello,这是一个基于vue＋vuex构建的简单chat界面',
						data:now
					},
					{
						content:'测试对话',
						date:now
					}
				]
			},
			{
				id:2,
				user:{
					name:'xu1s',
					img:'dist/images/2_copy.jpg'
				},
				messages:[]
			},	
			{
				id:3,
				user:{
					name:'xu1s',
					img:'dist/images/3_copy.jpg'
				},
				messages:[]
			}
		],
		currentSessionId:1,
		filterKey:''
	},
	mutations:{
        INIT_DATA (state) {
            let data = localStorage.getItem('vue-chat-session');
            if (data) {
                state.sessions = JSON.parse(data);
            }
        },
        // 发送消息
        SEND_MESSAGE ({ sessions, currentSessionId }, content) {
            let session = sessions.find(item => item.id === currentSessionId);
            session.messages.push({
                content: content,
                date: new Date(),
                self: true
            });
        },
        // 选择会话
        SELECT_SESSION (state, id) {
            state.currentSessionId = id;
        } ,
        // 搜索
        SET_FILTER_KEY (state, value) {
            state.filterKey = value;
        }
	}
});

store.watch(
    (state) => state.sessions,
    (val) => {
        localStorage.setItem('vue-chat-session', JSON.stringify(val));
    },
    {
        deep: true
    }
);

export default store;
export const actions = {
    initData: ({ dispatch }) => dispatch('INIT_DATA'),
    sendMessage: ({ dispatch }, content) => dispatch('SEND_MESSAGE', content),
    selectSession: ({ dispatch }, id) => dispatch('SELECT_SESSION', id),
    search: ({ dispatch }, value) => dispatch('SET_FILTER_KEY', value)
};