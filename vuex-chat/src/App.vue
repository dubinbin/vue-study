<script>
import { actions } from './store';

import Top from 'components/top';
import List from 'components/list';
import Search from 'components/search';
import Message from 'components/message';
import Text from 'components/text';
import Info from 'components/info';

export default {
    components: { Info, List, Text, Message , Search , Top},
    vuex: {
        actions: actions
    },
    created () {
        this.initData();
    }
}
</script>

<template>
<div id="app">
	<div class="htmleaf-container">
	  <div class="htmleaf-content bgcolor-3">
		<div id="chatbox">
		  <div id="friendslist">
			<top></top>
			<list></list>
			<search></search>
	  	  </div>
		<div id="chatview" class="p1">
			<info></info>
			<message></message>
			<text></text>
	    </div>
  	  </div>
   </div>
 </div>
</div>
</template>