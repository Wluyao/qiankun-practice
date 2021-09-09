<template>
    <div class="home">
        <h1>这是vue子应用的首页</h1>
        <div class="btns">
            <template v-if="isInQiankun">
                <button @click="toSubReact">从当前子应用进入sub-react子应用</button>
                <button @click="openSubVue">独立打开sub-vue子应用</button>
            </template>

            <button @click="changeMainCount">改变主应用的状态</button>
        </div>
    </div>
</template>

<script>
import microBus from '@/channel/micro-frontend/micro-bus'
import { random } from '@/utils/core'

export default {
    name: 'home',
    computed: {
        // 是否通过主应用加载
        isInQiankun() {
            return window.__POWERED_BY_QIANKUN__
        }
    },
    methods: {
        toSubReact() {
            history.pushState(null, 'sub-react', '/sub-react')
        },
        changeMainCount() {
            microBus.emit('changeMainCount', random())
        },
        openSubVue() {
            if (!this.isInQiankun) {
                alert('当前已经是单独运行的子应用')
                return
            }
            // window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__ 是qiankun注入的子应用对应的地址，谨慎使用，生产环境建议将跳转地址维护在环境变量中
            window.open(window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__)
        }
    }
}
</script>

<style scoped>
.btns {
    margin: 100px;
}

.btns button {
    margin: 0 10px;
}
</style>
