import { StyleSheet, Text, View, Image, TouchableOpacity,Dimensions } from 'react-native'
import React from 'react'

const ThirdPage = () => {
    const handleClick = () => {
        console.log('Hello');
    }
    const { width, height } = Dimensions.get('window');
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image style={[styles.image,{width:width * 0.32,height:width * 0.32}]} source={require('./assets/BMDU2.jpg')}></Image>
                <Text style={[{ marginLeft: '5%', fontWeight: 'bold', fontSize: 26, color: 'black', marginTop: 15 }]}>Iveta Fork</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ marginLeft: '5%', fontSize: 18, color: 'grey', marginTop: 5 }}>
                        HR Manager
                    </Text>
                    <Text style={{ marginLeft: '5%', fontSize: 18, color: 'grey', marginTop: 5 }}>
                        •
                    </Text>
                    <Text style={{ marginLeft: '5%', fontSize: 18, color: 'grey', marginTop: 5 }}>
                        Amsterdam, NL
                    </Text>
                </View>
            </View>
            <View style={styles.line} />
            <Text style={styles.title}>My job application (1)</Text>
            <View style={[styles.imageContainer]}>
                <TouchableOpacity onPress={handleClick} style={[{ marginLeft: '2%', flexDirection: 'row' }]} >
                    <View style={[styles.circle, { backgroundColor: '#ebebeb' }]}>
                        <Image source={require('./assets/globe.png')}
                            style={[styles.image2,{width:width * 0.07,height:width * 0.07}]}
                        />
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={[{ marginLeft: 15, fontSize: 22, color: 'black', fontWeight: 'bold' }]}>People partner</Text>
                        <Text style={[{ marginLeft: 15, fontSize: 15, color: 'black' }]}>Happy & co.</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <Text style={styles.title2}>Saved offers (18)</Text>

            <View style={{ flexDirection: 'column' }}>
                <View style={[{ flexDirection: 'row' }]}>
                    <TouchableOpacity
                        style={[styles.imageContainer2, { borderColor: 'black' }]}
                        onPress={handleClick}
                    >
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={[styles.circle, { backgroundColor: '#ebebeb', marginRight: 10 }]}>
                                <Image source={require('./assets/idea.png')} style={[styles.image3,{width:width * 0.07,height:width * 0.07}, { tintColor: 'black' }]} />
                            </View>
                            <Image source={require('./assets/bookmark.png')} style={[styles.image3, { tintColor: '#6486f5',marginTop:-15, height:25,width:25 }]} />
                        </View>

                        <Text style={styles.tag}>PR Manager</Text>
                        <Text style={styles.tag2}>Lorem & co.</Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.imageContainer2, { borderColor: 'black' }, { marginLeft: '5%' }]}
                        onPress={handleClick}
                    >
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={[styles.circle, { backgroundColor: '#cce88b', marginRight: 10 }]}>
                                <Image source={require('./assets/hand.png')} style={[styles.image3,{width:width * 0.06,height:width * 0.06}, { tintColor: 'black' }]} />
                            </View>
                            <Image source={require('./assets/bookmark.png')} style={[styles.image3,{width:width * 0.06,height:width * 0.06} ,{ tintColor: '#6486f5',marginTop:-15, height:25,width:25 }]} />
                        </View>
                        <Text style={styles.tag}>HR Assistant</Text>
                        <Text style={styles.tag2}>Ipsum inc</Text>
                    </TouchableOpacity>
                </View>
                <View style={[{ flexDirection: 'row' }]}>
                    <TouchableOpacity style={[styles.imageContainer2, { borderColor: 'black' }]} onPress={handleClick}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={[styles.circle, { backgroundColor: '#ebebeb', marginRight: 10 }]}>
                                <Image source={require('./assets/hr.png')} style={[styles.image3, {width:width * 0.06,height:width * 0.06},{ tintColor: 'black' }]} />
                            </View>
                            <Image source={require('./assets/bookmark.png')} style={[styles.image3, {width:width * 0.06,height:width * 0.06},{ tintColor: '#6486f5',marginTop:-15, height:25,width:25 }]} />
                        </View>
                        <Text style={styles.tag}>Junior Manager</Text>
                        <Text style={styles.tag2}>Cosmetics Co.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.imageContainer2, { borderColor: 'black' }, { marginLeft: '5%' }]}
                        onPress={handleClick}
                    >
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={[styles.circle, { backgroundColor: '#cce88b', marginRight: 10 }]}>
                                <Image source={require('./assets/idea.png')} style={[styles.image3,{width:width * 0.06,height:width * 0.06}, { tintColor: 'black' }]} />
                            </View>
                            <Image source={require('./assets/bookmark.png')} style={[styles.image3,{width:width * 0.06,height:width * 0.06}, { tintColor: '#6486f5',marginTop:-15, height:25,width:25 }]} />
                        </View>
                        <Text style={styles.tag}>Happiness CEO</Text>
                        <Text style={styles.tag2}>TechUp</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default ThirdPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    profile: {
        marginTop: '6%'
    },
    image: {
        // height: width * 0.3,
        // width: 125
    },
    title: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: '5%',
        marginTop: -5,
        fontSize: 22
    },
    title2: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: '5%',
        marginTop: 25,
        fontSize: 22
    },
    line: {
        height: 1,
        backgroundColor: '#f2f2f2',
        marginTop: 25,
        marginBottom: 25
    },
    imageContainer: {
        width: '90%',
        height: 75,
        borderRadius: 12,
        borderWidth: 1,
        marginLeft: '5%',
        marginTop: '5%',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderColor: 'black',
    },
    imageContainer2: {
        width: '43%',
        height: '90%',
        borderRadius: 12,
        borderWidth: 1,
        marginLeft: '5%',
        marginTop: '5%',
        padding: 10,
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    circle: {
        width: '30%',
        height: 45,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0,
        borderColor: 'black',
    },
    image2: {
        width: 20,
        height: 20,
    },
    image3: {
        width: 20,
        height: 20,
    },
    tag: {
        marginTop: 5,
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
    },
    tag2: {
        color: 'grey',
    }
})