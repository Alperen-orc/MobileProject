import { StyleSheet } from "react-native";

export default StyleSheet.create({
    imageContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
      },
    container:{
        backgroundColor:'#1a4362',
        borderColor:'gray',
        borderWidth:1.5,
        borderRadius: 36,
        margin: 8,
        padding: 6,
        borderTopRightRadius: 7,
        borderBottomRightRadius: 7,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image:{
        width: 100,
        minHeight: 100,
        borderRadius: 100,
        position: 'relative',
        resizeMode:"contain",
    },
    text:{
        fontWeight:"normal",
        color:"white",
        fontSize: 20,
        paddingLeft: 20,
    },
}) 