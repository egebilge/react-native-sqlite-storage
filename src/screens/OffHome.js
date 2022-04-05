import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function OffHome() {
  return (
    <View style={styles.body}>
      <View style={styles.searchView}>
        <Text style={styles.text}> Search </Text>
      </View>
      <View style={styles.viewCenter}>
        <Text style={styles.text_center}>Audiunce</Text>
        <Text style={styles.text_center}>Reports</Text>
      </View>
      <View
        style={{
          width: 239,
          height: 57,
          backgroundColor: '#7C7ED5',
          borderRadius: 28.5,
          margin: 45,
          justifyContent: 'center',
        }}>
        <Text style={{textAlign: 'center', fontSize: 25, color: '#fff'}}>
          Create campaign
        </Text>
      </View>
      <View style={{flex: 1, height: 500, width: 300}}>
        <View
          style={{
            width: 294,
            borderWidth: 1,
            backgroundColor: '#D8D8D8',
            opacity: 0.5,
          }}></View>
        <View
          style={{
            flex: 2,
            margin: 30,
            width: 220,
            height: 26,
            alignItems: 'flex-end',
            //flexWrap: 'wrap',
          }}>
          <Text
            style={{
              fontSize: 20,
              color: '#202842',
              marginRight: 50,
              marginTop: 10,
            }}>
            Ege Bilge
          </Text>
          <Image
            style={{
              width: 90,
              height: 76,
              alignSelf: 'flex-start',
              position: 'absolute',
            }}
            source={{
              uri: 'https://cdn.pixabay.com/photo/2019/06/13/13/06/monster-4271569_1280.png',
            }}></Image>
          <View
            style={{
              marginTop: 10,
              width: 45,
              height: 26,
              backgroundColor: '#FF8132',
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
            }}>
            <Text
              style={{
                color: '#fff',
                alignItems: 'center',
              }}>
              PRO
            </Text>
          </View>
          <Text
            style={{
              margin: 20,
              color: '#202842',
              alignSelf: 'center',
              fontSize: 18,
              marginLeft: 70,
            }}>
            View Account
          </Text>
          <View
            style={{
              width: 89,
              height: 23,
              justifyContent: 'center',
              marginTop: 70,
            }}>
            <Text style={{fontSize: 18}}> log Out </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 23,
    margin: 10,
    opacity: 0.7,
    textAlign: 'center',
    paddingRight: 100,
  },
  text_center: {
    fontSize: 22,
    marginTop: 45,
  },
  input: {
    width: 300,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 130,
    marginBottom: 10,
  },
  searchView: {
    width: 295,
    height: 57,
    backgroundColor: '#F4F6FE',
    borderWidth: 2,
    borderRadius: 28.5,
    marginTop: 50,
  },
  viewCenter: {
    alignItems: 'center',
  },
});
