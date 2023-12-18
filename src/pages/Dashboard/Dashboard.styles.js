import { StyleSheet } from "react-native";

export default StyleSheet.create({
    searchBar: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        position: 'absolute',
        zIndex: 111,
        background: 'transparent',
        top: 20,
      },
    searchInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        flex: 1,
        backgroundColor: '#eee',
        borderRadius: 30,
        paddingHorizontal: 20,
      },
    
    searchInputFocused: {
        borderWidth: 1,
        borderColor: '#ccc',
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 30,
        paddingHorizontal: 20,
      },
    
    searchBtn: {
        position: 'absolute',
        right: 0,
        paddingVertical: 15,
        paddingHorizontal: 25,
      },
    searchText: {
        fontFamily: 'Poppins-Regular',
        margin: 20,
        marginBottom: 0,
        fontSize: 16,
      },
    heading: {
        marginVertical: 10,
        marginHorizontal: 20,
        fontFamily: 'Poppins-SemiBold',
        fontSize: 24,
        color: '#21282F',
      },      
})