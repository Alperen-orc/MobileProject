import { StyleSheet,Dimensions } from "react-native";

const {width: screenWidth} = Dimensions.get('window');
export default StyleSheet.create({
    container: {
        flex: 1,
      },
      item: {
        width: screenWidth - 60,
        height: screenWidth,
        position: 'relative',
      },
      imageContainer: {
        flex: 1,
        marginBottom: Platform.select({ios: 0, android: 1}),
        backgroundColor: 'white',
        borderRadius: 8,
        opacity: 0.75,
      },
      image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
      },
      details: {
        position: 'absolute',
        justifyContent: 'space-between',
        height: '100%',
        width: '100%',
        padding: 20,
        backgroundColor: 'rgba(0,0,0,0.2)',
        borderRadius: 8,
      },
    
      detailsSelected: {
        position: 'absolute',
        justifyContent: 'space-between',
        height: '100%',
        width: '100%',
        padding: 20,
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: 8,
      },
    
      name: {
        fontSize: 30,
        color: '#fff',
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
      },
    
      description: {
        fontSize: 14,
        color: '#fff',
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
      },
    
      price: {
        alignSelf: 'flex-end',
        backgroundColor: '#eee',
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 3,
      },
})