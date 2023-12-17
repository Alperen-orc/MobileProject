import { StyleSheet } from "react-native";
import { PrimaryColor,SecondaryColor,btnTextPrimary } from "../../../styles/themes";

export default StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#fff',
      },
      form: {
        width: '100%',
        backgroundColor: '#eee',
        padding: 20,
        flex: 1,
      },
      primaryBtn: {
        backgroundColor: PrimaryColor,
        padding: 15,
        width: 200,
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 50,
        marginBottom: 20,
      },
})