import { StyleSheet } from "react-native";

export default StyleSheet.create({
    searchText: {
        fontFamily: 'Poppins-Regular',
        margin: 20,
        marginBottom: 0,
        fontSize: 16,
      },
    productGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        margin: 20,
        marginLeft: 10,
      },
    sliderItem: {
        width: 150,
        marginLeft: 10,
      },
    
    sliderImg: {
        width: 150,
        height: 150,
        resizeMode: 'cover',
      },
    
    sliderText: {
        fontFamily: 'Poppins-SemiBold',
      },
    
    sliderPrice: {
        fontFamily: 'Poppins-Regular',
      },    
})