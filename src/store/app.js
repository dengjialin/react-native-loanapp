import React from 'react'
import {observable, action} from 'mobx'
import {Modal,Toast,Popup} from 'antd-mobile'
import {View} from 'react-native'
import {CLIENTHEIGHT,CLIENTWIDTH} from '../common/GlobalConfig'
import {UserRegister} from '../screen/user/UserRegister'
const alert = Modal.alert;
class App {
    @observable barStyle = 'light-content'
    @observable loginViewShow = false
    token  = null
    @action
    updateBarStyle = style => {
        this.barStyle = style
    }
    //全局显示提示框
    //title:标题,string
    //desc:描述信息,string或reactdom
    //buttons:按钮数组 {text:"",onPress:,style:}
    alert(title,desc,buttons){
        alert(title,desc,buttons)
    }
    showTip(content,type='info',duration=0.5,onClose=()=>{},mask=true){
        switch (type){
            case 'success':Toast.success(content,duration,onClose,mask)
                break;
            case 'fail':Toast.fail(content,duration,onClose,mask)
                break;
            case 'loading':Toast.loading(content,duration,onClose,mask)
                break;
            default:Toast.info(content,duration,onClose,mask)
                break;
        }
    }
    @action
    showLoginView(){
        if(!this.loginViewShow){
            Popup.show(<View style={{width:CLIENTWIDTH,height:CLIENTHEIGHT}}>
                <UserRegister/>
            </View>, {
                animationType: 'slide-up'
            });
            this.loginViewShow = true;
        }
    }
    @action
    hideLoginView(){
        if(this.loginViewShow){
            Popup.hide();
            this.loginViewShow = false;
        }
    }
}

export default new App()