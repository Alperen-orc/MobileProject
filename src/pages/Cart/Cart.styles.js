import { StyleSheet } from "react-native";
import { PrimaryColor } from "../../../styles/themes";

export default StyleSheet.create({
    primaryBtn: {
        backgroundColor: PrimaryColor,
        padding: 15,
        width: 200,
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 50,
        marginBottom: 20,
      },
    secondaryBtn: {
        borderColor: '#000',
        borderWidth: 2,
        padding: 10,
        width: 200,
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: 20,
      },
    cartItem: {
        borderColor: '#ccc',
        borderBottomWidth: 1,
        margin: 10,
        padding: 5,
        flexDirection: 'row',
        marginBottom: 0,
      },
    cartName: {
        marginLeft: 5,
        fontSize: 16,
        color: '#000',
      },
    
    cartPrice: {
        marginLeft: 5,
        fontSize: 14,
        color: '#000',
      },
    cartQuantity: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 30,
        borderColor: '#eee',
        borderWidth: 1,
        alignSelf: 'flex-end',
      },
            
})