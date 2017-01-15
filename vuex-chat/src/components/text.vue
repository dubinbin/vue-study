<script>
import { actions } from '../store';

export default {
    vuex: {
        actions: actions
    },
    data () {
        return {
            content: ''
        };
    },
    methods: {
        onKeyup (e) {
            if (e.ctrlKey && e.keyCode === 13 && this.content.length) {
                this.sendMessage(this.content);
                this.content = '';
            }
        }
    }
};
</script>

<template>   
    <div id="sendmessage">
    	<input type="text" placeholder="ctrl+enter发送消息" v-model="content" />
        <button id="send" @keyup="onKeyup"></button>
    </div>
</template>