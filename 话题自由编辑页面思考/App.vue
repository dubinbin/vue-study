<template>
<div id="app">
        <ul>
          <li @click="addText">
            <div class="topMenu_icon">
            </div>
            <div class="decription_text">文字</div>
          </li>

          <li @click="addVideo">
            <div class="topMenu_icon">
            </div>
            <div class="decription_text">视频</div>
          </li>
        </ul>

      <div class="main" v-for="(item, index) in addItem">
        <div class="videoArea" v-if="item.type==='video'">
          <div>
            <textarea class="textContent"
                      placeholder="请贴上优酷、腾讯视频服务的iframe通用代码" v-model="item.content"></textarea>
            <changeOrder @add="addOne(index)" @decrease="decreaseOne(index)"
                         @deleteItem="deleteOne(index,item)"></changeOrder>
          </div>
        </div>
        <div class="textArea" v-if="item.type==='word'">
          <div>
            <textarea class="textContent" placeholder="请输入内容" v-model="item.content"></textarea>
            <changeOrder @add="addOne(index)" @decrease="decreaseOne(index)"
                         @deleteItem="deleteOne(index,item)"></changeOrder>
          </div>
        </div>
      </div>
</div> 
</template>

<style>
.textContent {
    background: #fff;
    width: 100%
  }

</style>

<script type="text/babel">
import changeOrder from './components/changeOrder.vue'

export default {
  data() {
    return {
      newTextObj: {
        type: 'word',
        content: ''
      },
      newVideoObj: {
        type: 'video',
        content: ''
      },
      addItem:[]
    }
  },
  methods: {
    addText() {
      this.addItem.push(JSON.parse(JSON.stringify(this.newTextObj)));
    },
    addVideo() {
        this.addItem.push(JSON.parse(JSON.stringify(this.newVideoObj)))
    },
    //向上调整顺序
    addOne(index, content) {
      if (index === 0) {
        return false;
      }
      this.addItem[index] = this.addItem.splice(index - 1, 1, this.addItem[index])[0];
    },
    //向下调整顺序
    decreaseOne(index) {
      if (index + 1 === this.addItem.length) {
        return false;
      }
      this.addItem[index] = this.addItem.splice(index + 1, 1, this.addItem[index])[0];
    },

    deleteOne(index, item) {
      this.addItem.splice(index, 1);
    }
  },
  components:{
    changeOrder
  }
}
</script>

