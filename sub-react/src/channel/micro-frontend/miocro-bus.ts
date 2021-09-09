/**
 * 原生customEvent实现eventBus，主要用于微前端事件通信
 */

const tupleStr = <T extends string[]>(...args: T) => args

// 项目中所有自定义事件名称
const eventName = tupleStr(
    // 改变主应用的count
    'changeMaincount'
)

type EventName = typeof eventName[number]
type HandlerType = (...args: any[]) => void

class EventEmitter {
    eventBus: HTMLSpanElement

    constructor() {
        const eventBus = document.getElementById('__micro-bus__') || document.createElement('span')
        eventBus.id = '__micro-bus__'
        this.eventBus = eventBus
        document.body.appendChild(eventBus)
    }

    on(eventName: EventName, handler: HandlerType) {
        this.eventBus.addEventListener(eventName, handler)
        return this
    }

    once(eventName: EventName, handler: HandlerType) {
        const magic = (event) => {
            handler(event)
            this.off(eventName, magic)
        }
        this.on(eventName, magic)
        return this
    }

    off(eventName: EventName, handler: HandlerType) {
        this.eventBus.removeEventListener(eventName, handler)
        return this
    }

    emit(eventName: EventName, ...args: any[]) {
        const customEvent = new CustomEvent(eventName, { detail: args })
        this.eventBus.dispatchEvent(customEvent)
    }
}

/**
 * @example

```
useEffect(() => {
  const removeHandler = eventEmitter.on('change_mode', () => {})
  return removeHandler
}, [])
```
 */

export default new EventEmitter()
