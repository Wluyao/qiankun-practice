// import { tupleStr } from './core'

// // 项目中所有自定义事件名称
// const eventName = tupleStr(
//     // 改变count
//     'change_count'
// )

// class Event {
//     eventName = ''
//     handler = () => {}

//     constructor(eventName, handler) {
//         this.eventName = eventName
//         this.handler = handler
//     }
// }

// class EventBus {
//     events = []

//     on(eventName, handler) {
//         const event = new Event(eventName, handler)
//         this.events.push(event)
//         const eventIndex = this.events.length - 1
//         return () => {
//             this.events.splice(eventIndex, 1)
//         }
//     }

//     off(eventName) {
//         const eventIndex = this.events.findIndex((item) => item.eventName === eventName)
//         this.events.splice(eventIndex, 1)
//     }

//     emit(eventName, ...args) {
//         const event = this.events.find((item) => item.eventName === eventName)
//         event.handler(...args)
//     }
// }

// const eventBus = new EventBus()

// /**
//  * @example

// ```
//   const removeHandler = eventEmitter.on('change_mode', () => {})
// ```
//  */

// export default eventBus
