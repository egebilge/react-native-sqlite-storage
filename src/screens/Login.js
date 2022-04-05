import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, Text, TextInput, Alert} from 'react-native';
import CustomButton from '../utils/CustomButton';
//import AsyncStorage from '@react-native-async-storage/async-storage';
import GlobalStyle from '../utils/GlobalStyle';
import SQLite from 'react-native-sqlite-storage';
import {useSelector, useDispatch} from 'react-redux';
import {setName, setAge} from '../redux/action';

const db = SQLite.openDatabase(
  {
    name: 'MainDB',
    location: 'default',
  },
  () => {},
  error => {
    console.log(error);
  },
);

export default function Login({navigation}) {
  // const [name, setName] = useState('');
  // const [password, setPassword] = useState('');

  const {name, age} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  // we can also use "useDispatch" to call actions.

  useEffect(() => {
    createTable();
    getData();
  }, []);

  const createTable = () => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS ' +
          'Users ' +
          '(ID INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, Age INTEGER);',
      );
    });
  };

  const getData = () => {
    try {
      // AsyncStorage.getItem('UserData')
      //     .then(value => {
      //         if (value != null) {
      //             navigation.navigate('Home');
      //         }
      //     })
      db.transaction(tx => {
        tx.executeSql('SELECT Name, Age FROM Users', [], (tx, results) => {
          var len = results.rows.length;
          if (len > 0) {
            navigation.navigate('Home');
          }
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  const setData = async () => {
    if (name.length == 0 || age.length == 0) {
      Alert.alert('Warning!', 'Please write your data.');
    } else {
      try {
        dispatch(setName(name));
        dispatch(setAge(age));
        // var user = {
        //     Name: name,
        //     Age: age
        // }
        // await AsyncStorage.setItem('UserData', JSON.stringify(user));
        await db.transaction(async tx => {
          // await tx.executeSql(
          //     "INSERT INTO Users (Name, Age) VALUES ('" + name + "'," + age + ")"
          // );
          await tx.executeSql('INSERT INTO Users (Name, Age) VALUES (?,?)', [
            name,
            age,
          ]);
        });
        navigation.navigate('Home');
      } catch (error) {
        console.log(error);
      }
    }
  };

  const offlineLogin = () => {
    navigation.navigate('OffHome');
  };

  return (
    <View style={styles.body}>
      <Text style={[GlobalStyle.CustomFont, styles.text]}>ORIJANTI APP</Text>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://cdn.pixabay.com/photo/2019/06/13/13/06/monster-4271569_1280.png',
        }}
      />
      <Text style={[GlobalStyle.CustomFont, styles.text]}>Welcome WELCOME</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name: "
        onChangeText={value => dispatch(setName(value))}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your age:  "
        onChangeText={value => dispatch(setAge(value))}
      />
      <CustomButton title="Login" color="#1eb900" onPressFunction={setData} />
      <CustomButton
        title="OfflineLogin"
        color="#1eb900"
        onPressFunction={offlineLogin}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0080ff',
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  text: {
    fontSize: 30,
    color: '#ffffff',
    margin: 30,
  },
  input: {
    height: 30,
    width: 300,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10,
  },
});
