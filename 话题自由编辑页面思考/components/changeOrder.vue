<template>
 <div class="changeOrder">
    <div class="delete" @click.stop.prevent="deleteItem">X</div>
    <div class="moveUp" @click.stop.prevent="moveUp">Up</div>
    <div class="moveDown" @click.stop.prevent="moveDown">Down</div>
 </div>  
</template>

<script>
export default {
  methods: {
    moveUp(event) {
        this.$emit('add',event.target);
    },
    moveDown(event) {
        this.$emit('decrease',event.target);
    },
    deleteItem(event){
        this.$emit('deleteItem',event.target)
    }
  }
}
</script>

<style scoped>
.changeOrder{
    position: relative;
    width: 100%;
    background: #ffffff;
}
.delete{
    width: 32%;
    float:left;
}
.moveUp{
    width: 32%;
    float:left;
}
.moveDown{
    width: 32%;
    float:left;
}
</style>





