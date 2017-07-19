import React, { Component } from 'react'
import {
    Text,
    View,
    ScrollView,
    StyleSheet
} from 'react-native'
import NavBar from '../../component/NavBar'
import Item from '../../component/Item'
import {inject} from '../../store/index'
import {observer} from 'mobx-react'
//FontAwesome
class UserProfile extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.user.getUserCert()
    }
    render(){
        const {navigate} = this.props.navigation
        return (
            <View style={{flex: 1, backgroundColor: "#f3f3f3"}}>
                <NavBar
                    title="账户信息"
                />
                <ScrollView>
                    <Item name="头像" avatar={2} first={true} onPress={()=>navigate('avatar')}/>
                    <Item name="用户名" disable={true} subName="_平行时空"/>
                    <Text style={styles.title}>{"账号绑定"}</Text>
                    <Item name="手机"  icon="mobile" subName="135****0418"/>
                    <Item name="微信" color="#1bce4a" iconSize={15}  icon="wechat" subName="已绑定"/>
                    <Item name="QQ" color="#ce3c1b" iconSize={15}  icon="qq" subName="未绑定"/>
                    <Item name="微博" color="#fa7d3c" iconSize={16}  icon="weibo" subName="未绑定"/>
                    <Text style={styles.title}>{"安全设置"}</Text>
                    <Item name="个人信息" subName="未认证" subNameColor={'red'} onPress={()=>navigate('Personal')}/>
                    <Item name="手机认证" subName="未认证"/>
                    <Item name="紧急联系人" subName="未认证" onPress={()=>navigate('Relation')}/>
                    <Item name="立即拿钱" onPress={()=>navigate('LoanApply',{from:'UserProfile'})}/>
                    <Item name="注册" onPress={()=>navigate('UserRegister')}/>
                </ScrollView>
            </View>
        )
    }
}
export default inject('user')(observer(UserProfile))
const styles = StyleSheet.create({
    title: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        color: "#666"
    }
})
