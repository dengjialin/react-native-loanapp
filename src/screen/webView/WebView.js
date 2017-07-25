import React,{Component} from 'react'
import { StyleSheet, Image, View,Animated,Dimensions,WebView} from 'react-native';
import {NavBar} from '../../component/index'
class RegisterProtocol extends Component {
    // static LoanApplyPopup = LoanApplyPopup
    constructor(props){
        super(props)
        this.state = {
            scrollY:new Animated.Value(0),
        }
    }
    render() {
        const {goBack,state} = this.props.navigation
        return (
            <View style={[styles.container]}>
                <NavBar
                    title='注册协议'
                    leftIcon='angle-left'
                    leftPress={()=>goBack()}
                />
                <WebView
                    style={styles.webView}
                 source={{url:'http://test.cashpp.com/index.html#/protocol/register'}}
                />
            </View>
        );
    }
}
export  {
    RegisterProtocol
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    webView:{
        flex:1
    }
});
