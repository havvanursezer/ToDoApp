import { StyleSheet } from "react-native";
import color from "../UI/color";
const styles = StyleSheet.create ({
    container:{
        flex:1,
    },
    logo:{
        flex:3, 
        alignItems:'center', 
        justifyContent:'flex-end'
    },
    logoImg:{
        width:200,
        height:200
    },
    topContainer:{
        flex:3,
        flexDirection:'row',
        alignItems:'center',
    },
    bottomContainer:{
        flex:2,
        alignItems:'center',
    },
    inputContainer:{
        flex:3, 
        justifyContent:"center",
    },
    textInput1:{
        width: "100%",
        height:"20%",
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:color.white,
        borderTopRightRadius:80,
        borderBottomWidth:0.4,
        
    },
    textInput2:{
        width: "100%",
        height:"20%",
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:color.white,
        borderBottomRightRadius:80,
    },
    inputText:{
        flex: 1, 
        fontSize: 16
    },
    loginButton:{
        flex: 1, 
        right: '10%'
    },
    button:{
        width: 60,
        height: 60,
        borderRadius:30,
        backgroundColor: color.darkBlue,
        justifyContent:'center',
        alignItems:'center',
    },
    buttonImage:{
        width:"50%",
        height:"50%"
    },
    inputLogo:{
        width:'8%',
        margin:'2%',
    },
    visButtonCont:{
        flex: 1, 
        top: '2%'
    },
    visButton:{
        width:'28%',
        height:'50%',
    },
    visIcon:{
        width:'100%',
        height:'100%',
    }
})
export default styles;