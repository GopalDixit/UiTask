import { StyleSheet, Text, View, Image, TouchableOpacity,Dimensions } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const SecondPage = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const navigation = useNavigation();
  const { width, height } = Dimensions.get('window');
  const toggleSelection = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(item => item !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center',width:'80%' }}>
        <Text style={[styles.text, { fontSize: width * 0.066 }]}>Select your job category</Text>
        <TouchableOpacity style={{ marginTop: '10%' }} onPress={() => navigation.navigate('ThirdPage')}>
        <Image
          source={require('./assets/right-arrow.png')}
          style={{ height: 20, width: 20,backgroundColor:'white' ,marginLeft:'25%',tintColor: 'black' }} 
        />
        </TouchableOpacity>
      </View>
      <Text style={[styles.lowerText, { fontSize: width * 0.045 }]}>Select one or more categories suitable for your search</Text>
      <View style={{ flexDirection: 'column' }}>
        <View style={[{ flexDirection: 'row' }]}>
          <TouchableOpacity
            style={[styles.imageContainer, { borderColor: selectedCategories.includes('megaphone') ? '#3492eb' : '#ebebeb' }]}
            onPress={() => toggleSelection('megaphone')}
          >
            <View style={[
              styles.circle,
              { backgroundColor: selectedCategories.includes('megaphone') ? '#3492eb' : '#ebebeb' }
            ]}>
              <Image source={require('./assets/megaphone.png')}
                style={[styles.image, { tintColor: selectedCategories.includes('megaphone') ? 'white' : 'black' }]}
              />
            </View>
            <Text style={[styles.tag, { fontSize: width * 0.035 }]}>Marketing</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.imageContainer, { borderColor: selectedCategories.includes('handshake') ? '#3492eb' : '#ebebeb' }, { marginLeft: '10%' }]}
            onPress={() => toggleSelection('handshake')}
          >
            <View style={[
              styles.circle,
              { backgroundColor: selectedCategories.includes('handshake') ? '#3492eb' : '#ebebeb' }
            ]}>
              <Image
                source={require('./assets/hand.png')}
                style={[styles.image, { tintColor: selectedCategories.includes('handshake') ? 'white' : 'black' }]}
              />
            </View>
            <Text style={[styles.tag, { fontSize: width * 0.035 }]}>Public Relations</Text>
          </TouchableOpacity>
        </View>
        <View style={[{ flexDirection: 'row' }]}>
          <TouchableOpacity style={[styles.imageContainer, { borderColor: selectedCategories.includes('hr') ? '#3492eb' : '#ebebeb' }]} onPress={() => toggleSelection('hr')}>
            <View style={[
              styles.circle,
              { backgroundColor: selectedCategories.includes('hr') ? '#3492eb' : '#ebebeb' }
            ]}>
              <Image
                source={require('./assets/hr.png')}
                style={[styles.image, { tintColor: selectedCategories.includes('hr') ? 'white' : 'black' }]}
              />
            </View>
            <Text style={[styles.tag, { fontSize: width * 0.035 }]}>HR</Text>

          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.imageContainer, { borderColor: selectedCategories.includes('sales') ? '#3492eb' : '#ebebeb' }, { marginLeft: '10%' }]}
            onPress={() => toggleSelection('sales')}
          >
            <View style={[
              styles.circle,
              { backgroundColor: selectedCategories.includes('sales') ? '#3492eb' : '#ebebeb' }
            ]}>
              <Image
                source={require('./assets/sales.png')}
                style={[styles.image, { tintColor: selectedCategories.includes('sales') ? 'white' : 'black' }]}
              />
            </View>
            <Text style={[styles.tag, { fontSize: width * 0.035 }]}>Sales</Text>

          </TouchableOpacity>
        </View>
        <View style={[{ flexDirection: 'row' }]}>
          <TouchableOpacity style={[styles.imageContainer, { borderColor: selectedCategories.includes('laptop') ? '#3492eb' : '#ebebeb' }]} onPress={() => toggleSelection('laptop')}>
            <View style={[
              styles.circle,
              { backgroundColor: selectedCategories.includes('laptop') ? '#3492eb' : '#ebebeb' }
            ]}>
              <Image
                source={require('./assets/laptop.png')}
                style={[styles.image, { tintColor: selectedCategories.includes('laptop') ? 'white' : 'black' }]}
              />
            </View>
            <Text style={[styles.tag, { fontSize: width * 0.035 }]}>IT</Text>

          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.imageContainer, { borderColor: selectedCategories.includes('color-plate') ? '#3492eb' : '#ebebeb' }, { marginLeft: '10%' }]}
            onPress={() => toggleSelection('color-plate')}
          >
            <View style={[
              styles.circle,
              { backgroundColor: selectedCategories.includes('color-plate') ? '#3492eb' : '#ebebeb' }
            ]}>
              <Image
                source={require('./assets/color-plate.png')}
                style={[styles.image, { tintColor: selectedCategories.includes('color-plate') ? 'white' : 'black' }]}
              />
            </View>
            <Text style={[styles.tag, { fontSize: width * 0.035 }]}>Design</Text>

          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SecondPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    width: '100%',
    fontSize: 26,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    color: 'black',
    marginLeft: '5%',
    marginTop: '9%',
  },
  lowerText: {
    width: '62%',
    fontFamily: 'sans-serif',
    color: 'grey',
    marginLeft: '5%',
    marginTop: 9,
  },
  imageContainer: {
    width: 150,
    height: 150,
    borderRadius: 12,
    borderWidth: 2,
    marginLeft: '5%',
    marginTop: '15%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0,
    borderColor: 'black',
  },
  image: {
    width: 40,
    height: 40,
  },
  tag:{
    marginTop:15,
    color:'black',
    fontWeight:'bold',
  }
});
