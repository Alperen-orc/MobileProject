import { StyleSheet } from "react-native";

export default StyleSheet.create({
    menuTop: {
        height: 100,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        padding: 10,
      },
    
      menuOptions: {
        height: '100%',
        backgroundColor: '#fff',
        paddingVertical: 20,
      },
    
      menuOption: {
        flexDirection: 'row',
        paddingVertical: 20,
        marginHorizontal: 20,
        borderBottomColor: '#eee',
        borderBottomWidth: 1,
        alignItems: 'center',
      },
    
      menuText: {
        fontFamily: 'Poppins-SemiBold',
        color: '#000',
        marginLeft: 10,
        flex: 1,
      },
})