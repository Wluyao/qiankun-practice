<template>
    <div class="home">
        <h1 class="home__header">这是主应用的首页</h1>
        <div class="home__btn" @click="handleChangeUser">改变状态user</div>
    </div>
</template>

<script>
import { microAction } from '@/channel/micro-frontend'
import store from '@/store'

export default {
    name: 'Home',
    data() {
        return {}
    },
    methods: {
        handleChangeUser() {
            store.commit('setUser', { name: '王五' })
            microAction.setGlobalState({ user: { name: '王五' } })
        }
    }
}
</script>

<style scoped>
.home__header {
    text-align: center;
}
.home__btn {
    display: inline-block;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
    background-color: #eee;
    cursor: pointer;
}
</style>
