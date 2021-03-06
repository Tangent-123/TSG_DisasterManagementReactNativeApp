import { StyleSheet,Platform } from 'react-native';
import colors from '../../Util/Color_Value';
export default Gallary = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: (Platform.OS) === 'ios' ? 20 : 0,

    },
     button1: {
        // width: '48%
        height: 90,
        // borderColor: Colors.Appcolor,
        // borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
        //shadowRadius: 10,
        elevation: 6,
        marginTop: 4,
    },
    spinnerTextStyle: {
        color: '#fff'
    },
    HeaderBackground: {
        flexDirection: 'row',
        alignItems: 'center',
      //  marginTop: 4,
      //elevation:10,
        backgroundColor:'#3386FF',
        padding: 14,
        height: 50
    },
    headerItem: {
        fontSize: 16,
        color: '#FFFFFF',
        fontFamily: "Gilroy-Bold",
       marginTop:10,
    },
    headerItem1: {
        fontSize: 16,
        color: '#000',
        paddingVertical:4,
        //fontFamily: "Gilroy-SemiBold",
       marginTop:10,
    },
    headerItemSecond: {
        fontSize: 30,
        color: colors.AllbtnBackColor,
        fontFamily: "Gilroy-Bold",
        fontWeight: '300',
        padding: 4,
    },
    AddToCardBtn1: {
        width: '99%',
       // height: 50,
        padding: 4,
        backgroundColor: '#3386FF',
       // justifyContent: 'center',
        borderRadius: 4,
       // alignItems: 'center',
      //  marginTop: 10,
       // marginBottom: 20,

    },
    AddToCardBtn: {
        width: '99%',
       height: 50,
        padding: 4,
        backgroundColor: '#3386FF',
       justifyContent: 'center',
        borderRadius: 4,
        alignItems: 'center',
       marginTop: 10,
        marginBottom: 20,

    },
    containerView: {
        flex: 1,
        justifyContent: 'center',
    },
    container2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        padding: 10,
        backgroundColor: '#fff',
    },
    text: {
        color: '#000',
        fontSize: 18,
        fontFamily: "Gilroy-Bold",
        fontWeight: '300',
      },
      textheader: {
        color: colors.TextColorone,
        fontSize: 16,
        padding:8,
        fontFamily: "Gilroy-SemiBold",
        fontWeight: '300',
      },
    welcome: {
        fontSize: 22,
        color: '#008800',
        margin: 8,
    },
    highLight: {
        fontSize: 16,
        color: '#008800',
        marginLeft: 8,

    },
    container3: {
        flex: 1,
        marginLeft: 24,
        marginTop: 10,
        marginRight: 20,

        backgroundColor: '#fff',
    },

    TextInputStyle:
    {
        borderWidth: 1,
        borderColor: '#009688',
        width: '90%',
        height: 40,
        margin: 8,
        borderRadius: 10,
        backgroundColor: '#fff',
        marginBottom: 8,
        padding: 8,
        // textAlign: 'center',
    },
    TextInputStyle1:
    {
        borderWidth: 1,
        borderColor: '#009688',
        width: '90%',
        height: 40,
        margin: 8,
        borderRadius: 10,
        backgroundColor: '#fff',
        marginBottom: 8,
        padding: 8,

    },
    containersecond: {
        flex: 1,
       // paddingTop: 20,
        paddingLeft: 10,
       // marginTop:10,
        paddingRight: 20,
        backgroundColor: '#fff',
    },
    ButtonLogin: {
        width: '90%',
        height: 46,
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: colors.TextColorone,
        marginTop: 10,

    },
    TextFoget: {
        fontSize: 16,
        color: '#008800',
        margin: 10,
    },
    TextStyle: {
        color: 'white',
        fontSize: 16,
        alignSelf: 'center',
        fontFamily: "Gilroy-SemiBold",
    },
});