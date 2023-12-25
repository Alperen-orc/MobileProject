import { StyleSheet } from "react-native";
import { PrimaryColor } from "../../../styles/themes";

export default StyleSheet.create({
    categoryList: {
        marginLeft: 20,
        marginBottom: 10,
      },
    
      category: {
        paddingVertical: 5,
        marginHorizontal: 3,
        borderRadius: 5,
        backgroundColor: '#eee',
      },
    
      categoryText: {
        fontSize: 16,
        color: '#A2A0A1',
        fontFamily: 'Poppins-Regular',
        paddingHorizontal: 15,
      },
    
      categoryTextSelected: {
        fontSize: 16,
        color: '#fff',
        fontFamily: 'Poppins-SemiBold',
        backgroundColor: PrimaryColor,
        paddingHorizontal: 20,
        borderRadius: 5,
      },
})