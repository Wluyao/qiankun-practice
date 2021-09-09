/**
 * 原生customEvent实现eventBus，主要用于微前端事件通信
 */

class EventEmitter {
    constructor() {
        const eventBus = document.getElementById('__micro-bus__') || document.createElement('span')
        eventBus.id = '__micro-bus__'
        this.eventBus = eventBus
        document.body.appendChild(eventBus)
    }

    on(type, fn) {
        this.eventBus.addEventListener(type, fn)
        return this
    }

    once(type, fn) {
        const magic = (event) => {
            fn(event)
            this.off(type, magic)
        }
        this.on(type, magic)
        return this
    }

    off(type, fn) {
        this.eventBus.removeEventListener(type, fn)
        return this
    }

    emit(type, ...args) {
        const customEvent = new CustomEvent(type, { detail: args })
        this.eventBus.dispatchEvent(customEvent)
    }
}

export default new EventEmitter()
