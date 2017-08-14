在做这个蛋疼的项目的时候用vue实践了的对象中的深拷贝，
解释:
this.addItem //一个存放数据的数组
this.newTextObj  //点某个按钮触发页面添加一个textarea文本框。
如果你直接不要这一句JSON.parse(JSON.stringify(())
那么你在data构建的文本模板
  newTextObj: {
    type: 'word',
    content: ''
  },
 的content就会和创建出来的文本框共用一个content 的model，这样明显不符合需求的，所以这里需要用到对象的深拷贝
this.addItem.push(JSON.parse(JSON.stringify(this.newTextObj)));