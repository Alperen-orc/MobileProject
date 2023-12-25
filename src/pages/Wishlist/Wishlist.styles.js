import { StyleSheet } from "react-native";

export default StyleSheet.create({
    secondaryBtn: {
        borderColor: '#000',
        borderWidth: 2,
        padding: 10,
        width: 200,
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: 20,
      },
      wishlistItem: {
        borderColor: '#ccc',
        borderBottomWidth: 1,
        margin: 10,
        padding: 5,
        flexDirection: 'row',
        marginBottom: 0,
      },
      wishlistName: {
        marginLeft: 5,
        fontSize: 16,
        color: '#000',
        fontFamily: 'Poppins-SemiBold',
        width: '80%',
      },
    
      wishlistPrice: {
        marginLeft: 5,
        fontSize: 14,
        color: '#000',
        fontFamily: 'Poppins-Regular',
      },
})