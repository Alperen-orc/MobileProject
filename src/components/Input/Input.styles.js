import { StyleSheet } from "react-native";
import { PrimaryColor,SecondaryColor,btnTextPrimary } from "../../../styles/themes";

export default StyleSheet.create({
    inputViewFocused: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: PrimaryColor,
        borderWidth: 1,
        marginBottom: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        paddingLeft: 10,
      },
      inputView: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#fff',
        borderWidth: 1,
        marginBottom: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        paddingLeft: 10,
      },
      inputFocused: {
        borderRadius: 5,
        padding: 10,
        flex: 1,
      },
      input: {
        borderRadius: 5,
        padding: 10,
        flex: 1,
      },
    
})