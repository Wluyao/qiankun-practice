import './public-path'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

function render() {
    ReactDOM.render(<App />, document.getElementById('root'))
}

if (!window.__POWERED_BY_QIANKUN__) {
    render()
}

// 只会在微应用初始化的时候调用一次
export async function bootstrap() {
    console.log('react app bootstraped')
}

// 子应用每次进入都会调用 mount方法
export async function mount(props) {
    // 可通过 props.getGlobalState() 获取基座下发的数据
    // props.setGlobalState({user: {name: ''}}) 改变全局的数据
    // props.onGlobalStateChange 监听全局数据的变化
    render()
}

//  可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
export async function update(props) {
    console.log('update props', props)
}

// 子应用每次 切出/卸载 会调用的方法
export async function unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
