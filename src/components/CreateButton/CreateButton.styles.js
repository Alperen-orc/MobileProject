import { StyleSheet } from "react-native";

export default StyleSheet.create({
    main_container:{
        backgroundColor: '#101138',
    },
    container:{
        backgroundColor:'#d1d5e6',
        borderColor:'gray',
        borderWidth:1.5,
        borderRadius: 36,
        margin: 8,
        padding: 6,
        flexDirection: 'row',
        justifyContent:"center",
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
        fontSize: 20,
        paddingLeft: 20,
    },
}) 