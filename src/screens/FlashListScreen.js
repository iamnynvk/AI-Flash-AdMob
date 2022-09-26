import {FlashList} from '@shopify/flash-list';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  Animated,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';

const FlashListScreen = () => {
  const [tweets, setTweets] = useState();
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    reload();
  }, []);

  const reload = async () => {
    await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(response => {
        setTweets(response);
        setIsLoad(false);
      });
  };

  const refreshPage = () => {
    setIsLoad(true);
    reload();
  };

  return (
    <View style={{flex: 1}}>
      <FlashList
        horizontal={false}
        keyExtractor={(item, index) => index}
        renderItem={item => {
          return (
            <View
              style={{
                justifyContent: 'center',
                flex: 1,
                marginTop: 20,
                marginStart: 10,
              }}>
              {/* <Image
                source={{uri: item?.item?.url}}
                style={{height: 100, width: '100%'}}
              /> */}
              <Text style={{color: '#313131', fontWeight: 'bold'}}>
                {item?.item?.id}. {item.item.title}
              </Text>
              <Text style={{color: '#808080', fontWeight: 'bold'}}>
                Answer. {item.item.body}
              </Text>
            </View>
          );
        }}
        ItemSeparatorComponent={() => <View style={{margin: 2}} />}
        ListEmptyComponent={() => (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ActivityIndicator size={30} color="#000" />
          </View>
        )}
        contentContainerStyle={{
          backgroundColor: '#d1d1d1',
        }}
        disableAutoLayout={true}
        refreshControl={
          <RefreshControl refreshing={isLoad} onRefresh={() => refreshPage()} />
        }
        onEndReachedThreshold={0.7}
        showsVerticalScrollIndicator={false}
        estimatedItemSize={5000}
        getItemType={({item}) => {
          return item;
        }}
        progressViewOffset={10}
        data={tweets}
        viewabilityConfig={{
          waitForInteraction: true,
          itemVisiblePercentThreshold: 50,
          minimumViewTime: 1000,
        }}
        // extraData={tweets}
        // showsHorizontalScrollIndicator={false}
        // pagingEnabled={false}
      />
    </View>
  );
};

export default FlashListScreen;
