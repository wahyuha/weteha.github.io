import { autorun, observable } from 'mobx'

class datastore {
    @observable listbar = ['Kuali', 'Cobain Dulu', 'Cari Lokasi']
    @observable titlebar= 'Kuali'
}

var dstore = window.store = new datastore

export default dstore

autorun(() => {
    console.log(dstore.titlebar)
    console.log(dstore.listbar[0])
})
