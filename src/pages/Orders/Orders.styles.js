import { StyleSheet } from "react-native";

export default StyleSheet.create({
    switch: {
        flexDirection: 'row',
      },
    
      switchBtn: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 20,
        borderBottomColor: '#ccc',
        borderBottomWidth: 2,
      },
    
      switchBtnSelected: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 20,
        borderBottomColor: '#000',
        borderBottomWidth: 2,
      },
    
      switchText: {
        fontFamily: 'Poppins-Regular',
      },
    
      switchTextSelected: {
        fontFamily: 'Poppins-SemiBold',
        color: '#000',
      },
      orderItem: {
        padding: 10,
        backgroundColor: '#fff',
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
    
      orderNo: {
        fontFamily: 'Poppins-SemiBold',
        color: '#000',
        fontSize: 16,
      },
    
      orderItemCount: {
        fontFamily: 'Poppins-Regular',
      },
    
      orderDate: {
        fontFamily: 'Poppins-Regular',
        fontStyle: 'italic',
      },
})