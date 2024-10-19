import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity,Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FirstPage = () => {
  const navigation = useNavigation();
  const { width, height } = Dimensions.get('window');
  
  const navigateToScreen = () => {
    navigation.navigate('SecondPage'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>JOBSNAP</Text>
      <View style={styles.imgContainer}>
        <Image
          source={require('./assets/ddimg.jpg')} 
          style={[styles.image, { width: width * 0.9, height: height * 0.5 }]}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.jobText, { fontSize: width * 0.12 }]}>
          Over <Text style={styles.jobHighlight}>5,000 jobs</Text> are waiting for you
        </Text>
      </View>
      <TouchableOpacity style={[styles.button, { width: width * 0.9, height: height * 0.07 }]} onPress={navigateToScreen}>
        <Text style={[styles.buttonText, { fontSize: width * 0.05 }]}>Start searching</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FirstPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 18,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    color: 'black',
    marginLeft: '5%',
    marginTop:'9%'
  },
  imgContainer: {
    alignItems: 'center',
    marginTop: '5%',
  },
  image: {
   
    marginTop: 20,
  },
  textContainer: {
    marginTop: 20,
    marginLeft: '5%',
  },
  jobText: {
    width: '100%',
    // fontSize: 46,
    color: 'black',
  },
  jobHighlight: {
    color: '#34a8eb',
    fontWeight: 'bold'
  },
  button: {
    width:'90%',
    height:'7%',
    backgroundColor: '#000000',
    borderRadius: 15,
    padding: 10,
    alignItems: 'center',
    marginTop: 20,
    marginLeft:'5%',
    justifyContent: 'center',
},
buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize:18
},

});
