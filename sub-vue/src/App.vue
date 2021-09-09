<template>
    <div class="app">
        <div class="nav">
            <router-link to="/">首页</router-link> |
            <router-link to="/about">关于我们</router-link>
        </div>

        <div>当前处于{{ isInQiankun ? 'qiankun' : '独立运行' }}环境</div>

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
</style>
