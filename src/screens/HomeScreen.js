import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0ea0fe',
      }}>
      <View
        style={{
          borderRadius: 10,
          borderColor: '#83c6fb',
          borderWidth: 1,
          marginTop: 20,
        }}>
        <TouchableOpacity
          style={{padding: 10, borderRadius: 10}}
          onPress={() => navigation.navigate('AiBitcoin')}>
          <Text
            style={{
              color: '#fff',
              fontSize: 16,
              fontWeight: 'bold',
              letterSpacing: 0.3,
            }}>
            AI Based Bitcoin News
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          borderRadius: 10,
          borderColor: '#83c6fb',
          borderWidth: 1,
          marginTop: 20,
        }}>
        <TouchableOpacity
          style={{padding: 10, borderRadius: 10}}
          onPress={() => navigation.navigate('FlashList')}>
          <Text
            style={{
              color: '#fff',
              fontSize: 16,
              fontWeight: 'bold',
              letterSpacing: 0.5,
            }}>
            Flashlist Vs Flatlist
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          borderRadius: 10,
          borderColor: '#83c6fb',
          borderWidth: 1,
          marginTop: 20,
        }}>
        <TouchableOpacity
          style={{padding: 10, borderRadius: 10}}
          onPress={() => navigation.navigate('AdMobscreen')}>
          <Text
            style={{
              color: '#fff',
              fontSize: 16,
              fontWeight: 'bold',
              letterSpacing: 0.5,
            }}>
            Adverticement Screen
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
