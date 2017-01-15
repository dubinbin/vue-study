<script>
import { actions } from '../store';

export default {
    vuex: {
        actions: actions,
        getters: {
            filterKey: ({ filterKey }) => filterKey
        }
    },
    methods: {
        onKeyup (e) {
            this.search(e.target.value);
        }
    }
};
</script>

<template>   
	<div id="search">
	    <input type="text" id="searchfield" placeholder="" ="Search contacts..." @keyup="onKeyup | debounce 150" />
	</div>
</template>