<template>
    <div class="app">
        <div class="nav">
            <router-link to="/">首页</router-link> |
            <router-link to="/about">关于我们</router-link>
        </div>
        <div>
            <p>当前处于{{ isInQiankun ? 'qiankun' : '独立运行' }}环境</p>
        </div>

        <div class="btns">
            <template v-if="isInQiankun">
                <button @click="toSubReact">从当前子应用进入sub-react子应用</button>
                <button @click="openSubVue">独立打开sub-vue子应用</button>
            </template>

            <button @click="changeUsername">改变全局的用户名称</button>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
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
        changeUsername() {},
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
.app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

.nav {
    padding: 30px;
}

.nav a {
    font-weight: bold;
    color: #2c3e50;
}

.nav a.router-link-exact-active {
    color: #42b983;
}

.btns {
    margin: 100px;
}

.btns button {
    margin: 0 10px;
}
</style>
