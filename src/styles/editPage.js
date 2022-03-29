import { Dimensions, StyleSheet } from "react-native";
import color from "../UI/color";
const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: color.lightPurple
    },
    headerContainer: {
        flex:1,
        backgroundColor: color.purpleEnd,
        elevation:15,
        alignItems:"center",
        justifyContent:'center',
        flexDirection: 'row'
    },
    editContainer: {
        flex: 8,
        margin: '3%',
    },
    header:{
        flex: 1, 
        alignItems: 'center'
    },
    headerText: {
        fontSize:20,
        fontWeight:'bold',
        color: color.darkBlue,
    },
    backButton:{
        left: '20%'
    },
    backIcon:{
        width: 20, 
        height: 20
    },
    titleText: {
        fontSize: 16,
        color: color.darkBlue,
        marginTop:'5%'
    },
    inputCont: {
        width:'100%',
        height:60,
        backgroundColor:color.purpleEnd,
        borderRadius:15,
        elevation:15,
        marginTop:3,
        fontSize:16,
    },
    saveButton:{
        width:'25%',
        height: 45,
        backgroundColor: color.darkBlue,
        borderRadius:25,
        alignItems:'center',
        justifyContent:'center',
        elevation:15,
        marginTop:30
    },
    buttonText: {
        color: color.white,
        fontWeight:'bold',
        fontSize:16,
    },
    dateCont:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: '5%',
    },
    datePickerIcon:{
        width: '8%', 
        height: '40%'
    },
    dateText:{
        fontSize:16,
        color:"black"
    },
    modalCont:{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: color.transparentBlack
    },
    popup:{
        width: (Dimensions.get('window').width * 45) / 100,
        height: (Dimensions.get('window').width * 45) / 100,
        backgroundColor: 'white',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    popupTop:{
        height: '20%',
        width: '100%',
        backgroundColor: color.darkBlue,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    popupCloseButton:{
        width: '20%', 
        height: '90%', 
        justifyContent: 'center'
    },
    closeIcon:{
        width: '50%',
        height: '50%'
    },
    popupTextCont:{
        alignItems:'center', 
        margin:"20%"
    },
    popupText:{
        fontSize:16,
        color: color.darkBlue
    }
})
export default styles;