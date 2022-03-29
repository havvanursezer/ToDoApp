import { StyleSheet } from "react-native";
import color from "../UI/color";
const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: color.lightPurple
    },
    headerContainer: {
        flex:1,
        flexDirection:'row',
        backgroundColor: color.purpleEnd,
        elevation:15,
        alignItems:"center",
        justifyContent:'center'
    },
    logoutIcon:{
        width: 25, 
        height: 25
    },
    logoutButton:{
        right: '20%'
    },
    toDo: {
        flex:7,
    },
    checkCont:{
        flexDirection: 'row', 
        alignItems: 'center'
    },
    checkIcon:{
        width: 30, 
        height: 30, 
        margin: 8
    },
    editIcon:{
        width: 20, 
        height: 20, 
        margin: '2%'
    },
    textInputContainer: {
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:'1%'
    },
    textInput:{
        backgroundColor:'black',
        width:'85%',
        height:60,
        elevation:9,
        borderRadius:40,
        backgroundColor: color.purpleEnd,
        margin:'2%',
        fontSize:16
    },
    header: {
        fontSize:20,
        fontWeight:'bold',
        color: color.darkBlue
    },
    listItemTopCont:{
        alignItems: 'center', paddingTop:10, height:90
    },
    listItemsCont:{
        width:'95%',
        height:70,
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        backgroundColor: color.purpleEnd,
        elevation:9,
        borderRadius:15,
    },
    listTitle:{
        fontSize: 16,
        marginLeft: '3%',
        color: color.darkBlue,
    },
    listSubtitle:{
        fontSize: 14,
        marginLeft: '3%',
        color: color.darkBlue
    }
})
export default styles;