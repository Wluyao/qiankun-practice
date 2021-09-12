import { observable, action } from 'mobx'

class GlobalStore {
    @observable
    label: string = 'eee'

    @action
    public setLabel(value: string) {
        this.label = value
    }
}

export default new GlobalStore()
