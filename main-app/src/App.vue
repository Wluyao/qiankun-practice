<template>
    <div class="app">
        <div class="layout">
            <div class="layout-header">
                <div class="layout-header-logo">QianKun</div>
                <div class="layout-header-state">
                    <span>主应用的count：{{ count }}；</span>
                    <span>主应用的user：{{ user.name }}</span>
                </div>
            </div>

            <div class="layout-body">
                <div class="layout-menu">
                    <div class="layout-menu-item">
                        <router-link to="/" exact>首页</router-link>
                    </div>
                    <div class="layout-menu-item">
                        <router-link to="/sub-vue">Vue子应用</router-link>
                    </div>
                    <div class="layout-menu-item">
                        <router-link to="/sub-react">React子应用</router-link>
                    </div>
                    <div class="layout-menu-item">
                        <router-link to="/sub-html">HTML子应用</router-link>
                    </div>
                </div>

                <div class="layout-container">
                    <router-view></router-view>
                    <div id="subapp-container"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import store from '@/store'
import microBus from '@/channel/micro-frontend/micro-bus'

export default {
    data() {
        return {}
    },
    created() {
        microBus.on('changeMainCount', (event) => {
            const [value] = event.detail
            store.commit('setCount', value)
        })
    },
    computed: {
        count() {
            return store.state.count
        },
        user() {
            return store.state.user
        }
    },
    methods: {},
    destroyed() {
        microBus.off('changeMainCount')
    }
}
</script>

<style scoped>
.layout-header {
    height: 50px;
    padding: 0 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    line-height: 50px;
    display: flex;
    justify-content: space-between;
}

.layout-header-logo {
    font-size: 22px;
    font-weight: 600;
}
.layout-header-state {
}

.layout-body {
    display: flex;
}

.layout-menu {
    flex: none;
    width: 160px;
    padding: 20px;
    border-right: 1px solid #eee;
    font-size: 16px;
}

.layout-menu-item {
    cursor: pointer;
    padding: 4px;
}

.layout-container {
    flex: auto;
    padding: 20px;
}

.userinfo {
    position: absolute;
    right: 100px;
    top: 0;
}
</style>
