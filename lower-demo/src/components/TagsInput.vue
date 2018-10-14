<template lang="html">
    <div class="input tags-wrap" @paste="pasteText($event,123)">
        <div v-for="(item,index) in source" 
        :key="index" 
        style="background-color:#409eff;" >
            <span class="content">{{item}}</span>
            <span class="del" @click="delTag(index, false)">×</span>
        </div>
        <input 
        type="text" 
        placeholder="标签，按 enter 创建" 
        v-model="text" 
        @keyup.enter="addTag(text)" 
        @keydown.delete="delTag(source.length - 1, true)">
        <!-- 监听键盘事件 -->
    </div>
</template> 

<script>
export default {
 props: {
    source: {
        // 类型检验以及默认初始值
        type: Array,
        default: []
    }
 },
 data () {
    return {
        text: '',
    }
 },
 methods: {
    pasteText (e,a) {
        e.preventDefault()
        alert(a)
        var text = (e.clipboardData || window.clipboardData).getData('text')
        // 粘贴事件
        this.addTag(text)
    },
    addTag (text) {
        if (text.trim() != '') {
            var count = this.source.length;
            this.source.push(text)
            this.text = ''
        }
    },
    delTag (index, way) {
        if (way) {
            if (index >= 0 && this.text == '') {
                this.source.splice(index, 1)
            }
        } else {
            this.source.splice(index, 1)
        }
    }
 }
}
</script>
<style scoped>

</style>
