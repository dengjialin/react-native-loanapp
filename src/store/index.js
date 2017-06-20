import React,{Component} from 'react'
import app from './app'
import home from './home'
const store ={
    app,home
}
export default store
//用于存储对应的store的wrapper组件
export function inject(...storeNames){
    return function (WrappedComponent) {
        let stores = {}
        if(storeNames.length===0){//无参默认全部注入
            stores = {...store}
        }else {
            for(let name of storeNames){
                if({}.hasOwnProperty.call(store,name)){
                    stores[name] = store[name]
                }else {
                    console.info(`注入失败,store中没有发现${name}`)
                }
            }
        }
        class StoreContainer extends Component{
            constructor(props){
                super(props)
            }
            render(){
                return <WrappedComponent {...this.props} {...stores}/>
            }
        }
        return StoreContainer
    }
}
