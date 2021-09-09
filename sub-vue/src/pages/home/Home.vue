<template>
    <div class="home">
        <h1>这是vue子应用的首页</h1>
        <br />
        <div>主应用下发给子应用的状态：{{ user.name }}</div>

        <div class="btns" v-if="isInQiankun">
            <div class="btn" @click="toSubReact">进入sub-react子应用</div>
            <div class="btn" @click="openSubVue">独立打开sub-vue子应用</div>
        </div>

        <div class="btns" v-if="isInQiankun">
            <div class="btn" @click="changeMainCount">通过customEvent改变主应用的状态</div>
            <div class="btn" @click="changeMainUser">
                通过主应用下发的setGlobalState方法改变主应用的状态
            </div>
        </div>
    </div>
</template>

<script>
import { microBus, microAction } from '@/channel/micro-frontend'
import store from '@/store'
import { random } from '@/utils/core'

export default {
    name: 'home',
    computed: {
        // 是否通过主应用加载
        isInQiankun() {
            return window.__POWERED_BY_QIANKUN__
        },
        user() {
            return store.state.user
        }
    },
    methods: {
        toSubReact() {
            history.pushState(null, 'sub-react', '/sub-react')
        },
        changeMainCount() {
            microBus.emit('changeMainCount', random())
        },
        changeMainUser() {
            microAction.setGlobalState({ user: { name: '李四' } })
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
.home {
    padding: 20px;
}
.btns {
    margin: 100px;
    display: flex;
    justify-content: center;
}

.btns .btn {
    padding: 10px;
    margin: 0 10px;
    border-radius: 5px;
    background-color: #eee;
    cursor: pointer;
}
</style>
