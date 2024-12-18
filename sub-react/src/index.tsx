import './public-path'
import React from 'react'
import ReactDOM from 'react-dom'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import App from './App'
import './assets/styles/app.less'
import reportWebVitals from './reportWebVitals'

function render(props) {
    const { container } = props
    ReactDOM.render(
        <ConfigProvider locale={zhCN}>
            <App />
        </ConfigProvider>,
        container ? container.querySelector('#root') : document.querySelector('#root')
    )
}

// @ts-ignore
if (!window.__POWERED_BY_QIANKUN__) {
    render({})
}

// 只会在微应用初始化的时候调用一次
export async function bootstrap() {}

// 子应用每次进入都会调用 mount方法
export async function mount(props) {
    // 可通过 props获取基座下发的数据
    render(props)
}

//  可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
export async function update(props) {}

// 子应用每次 切出/卸载 会调用的方法
export async function unmount(props) {
    const { container } = props
    ReactDOM.unmountComponentAtNode(
        container ? container.querySelector('#root') : document.querySelector('#root')
    )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
