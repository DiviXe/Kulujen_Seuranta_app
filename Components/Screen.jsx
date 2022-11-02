import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, FlatList, ImageBackground} from 'react-native';
const background = { uri: 'https://i.imgur.com/qle194G.jpeg' };
import { LinearGradient } from 'expo-linear-gradient';


export const Screen = ({ navigation: { navigate } }) => {

  return (
    <View style={styles.container}>
      <ImageBackground source={background} resizeMode="cover" style={{ flex:1, justifyContent: 'flex-end',}}>
      <Text style = {{fontSize: 32, color: '#fff', fontWeight: 'bold'}}>Welcome to W&llet!</Text>
    <LinearGradient colors={['#FAAD3D', '#EFC90A', '#F1CB0C', '#7E7E7E','#080808']} style={styles.box} 
    >
    <View style={styles.boxTextAlign}> 
    
      <Text style={styles.boxTextStyle}> Current balance</Text>
      <Text style = {{fontSize: 32, color: '#fff', fontWeight: 'bold'}}>$6000,00</Text>
      <Text style = {{fontSize: 15, color: '#fff', marginTop: 50, fontWeight: 'bold',}}>1234 6546 3456 ****</Text>
      </View>
      <View
        style={{
          alignItems: 'flex-end',
          width: '32%',
        }}>
        <Text style={{fontSize: 18, color: '#fff', fontWeight: '700'}}>
          VISA
        </Text>
        <View style={{flex: 1}}>
        <TouchableOpacity style={styles.button} onPress={() => navigate('AddMoney')}
>
        <Text>Add</Text>
        </TouchableOpacity>
        <Text style={{ marginTop: 5, color: '#fff', fontSize: 12, fontWeight: '700', }}>
          Expense
        </Text>
        <Text style={{ marginTop: 5, color: '#fff', fontSize: 8, fontWeight: '700',  }}>
          -Expense
        </Text>
        </View>
        
        </View>
      
      </LinearGradient>
      <View style={styles.text}> 
    <Text>yo</Text>
    
      </View>
      </ImageBackground>
      </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 25,
    paddingHorizontal: 15,
  },
  text: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 30,
  },
  box: {
    width: '100%',
    height: 20,
    borderRadius: 15,
    flexDirection: 'row',
    padding: 22,
    flex: 1,
  },
  boxTextAlign: {
    width: '70%',
    alignItems: 'flex-start',
  },
  boxTextStyle: {
    fontSize: 15,
    color: '#fff',
    fontWeight: '600',
  },

  button: {
    padding: 5,
    marginTop: 25,
    borderWidth: 3,
    borderRadius: 25,
    borderColor: '#fff',
    backgroundColor: '#F1CB0C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: 'powderblue',
  },
  fadingText: {
    fontSize: 28,
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: 'space-evenly',
    marginVertical: 16,
  },
});
export default Screen;
