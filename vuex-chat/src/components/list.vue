<script>
import {actions} from '../store';

export default{
    vuex:{
        actions:actions,
        getters:{
            sessions:({sessions,filterKey})=>{
                let result = sessions.filter(session=>session.user.name.includes(filterKey));
                return result;
            },

            currentId:({currentSessionId})=>currentSessionId
        }
    }
}; 
</script>

<template>
<div id="friendsList">
    <div v-for="item in sessions" class="friend" @click="selectSession(item.id)">
        <img :src="item.user.img" />
        <p>
            <strong>{{item.user.name}}</strong>
            <span>{{item.user.name}}</span>
        </p>
        <div class="status available"></div>
    </div>
</div> 
</template>