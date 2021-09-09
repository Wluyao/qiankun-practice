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

    on(eventName, handler) {
        this.eventBus.addEventListener(eventName, handler)
        return this
    }

    once(eventName, handler) {
        const magic = (event) => {
            handler(event)
            this.off(eventName, magic)
        }
        this.on(eventName, magic)
        return this
    }

    off(eventName, handler) {
        this.eventBus.removeEventListener(eventName, handler)
        return this
    }

    emit(eventName, ...args) {
        const customEvent = new CustomEvent(eventName, { detail: args })
        this.eventBus.dispatchEvent(customEvent)
    }
}

export default new EventEmitter()
