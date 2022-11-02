import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, FlatList, ImageBackground} from 'react-native';
const background = { uri: 'https://i.imgur.com/qle194G.jpeg' };
import { LinearGradient } from 'expo-linear-gradient';

//example flatlist (data needed from AddMoney)
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Expense 1',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Expense 2',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Expense 3',
  },
  {
    id: '58694a0f-3da1-471f-bd75-145571e29d72',
    title: 'Expense 4',
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);


export const Screen = ({ navigation: { navigate } }) => {
const renderItem = ({ item }) => <Item title={item.title} />;

  return (
    <View style={styles.container}>
      <ImageBackground source={background} resizeMode="cover" style={{ flex:1, justifyContent: 'flex-end',}}>
      <Text style = {{fontSize: 32, color: '#fff', fontWeight: 'bold', alignItems: 'center',}}>Welcome to W&llet!</Text>
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
      <View style={styles.FlatlistContainer}> 
      <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.id} />
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
  FlatlistContainer: {
    flex: 1,
    width: 350,
    paddingVertical: 5,
    borderColor: '#fff',
    paddingTop: 40,
  paddingHorizontal: 20,

  },

  text: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 30,
  },
  box: {
    width: '80%',
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
  buttonRow: {
    flexBasis: 100,
    justifyContent: 'space-evenly',
    marginVertical: 16,
  },
  item: {
    width: '70%',
    backgroundColor: '#ffc600',
    padding: 2,
    marginVertical: 5,
    marginHorizontal: 10,
    borderWidth: 3,
    borderRadius: 25,
    borderColor: '#fff',
  },
  title: {
    fontSize: 20,
  },
});
export default Screen;
