<script>
export default {
    vuex: {
        getters: {
            user: ({ user }) => user,
            session: ({ sessions, currentSessionId }) => sessions.find(session => session.id === currentSessionId)
        }
    },
    filters: {
        // 将日期过滤为 hour:minutes
        time (date) {
            if (typeof date === 'string') {
                date = new Date(date);
            }
            return date.getHours() + ':' + date.getMinutes();
        }
    },
    directives: {
        // 发送消息后滚动到底部
        'scroll-bottom' () {
            this.vm.$nextTick(() => {
                this.el.scrollTop = this.el.scrollHeight - this.el.clientHeight;
            });
        }
    }
};
</script>

<template>
 <div id="messageList" v-scroll-bottom="session.messages">
	<div v-if="session" id="chat-messages">			            
	    <div v-for="item in session.messages" class="message" :class="{ right: item.right }">
	    	<img :src="item.self ? user.img : session.user.img"  />
	        <div class="bubble">
	        	{{ item.content }}
	            <div class="corner"></div>
	            <span>{{ item.date | time }}</span>
	        </div>
	    </div>
	    <!--我们发的在这里-->		            
	</div>
</div>
</template>