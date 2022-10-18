import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const DATA = [
  {
    id: '0',
    title: 'Get a ride',
    image: '3pn',
    screen: 'MapScreen',
  },
  {
    id: '1',
    title: 'Order food',
    image: '28w',
    screen: 'EatsScreen', // in the future
  },
];

const NavOptions = () => {
  const navigation = useNavigation();

  return (
    <FlatList
      data={DATA}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          style={tw`pr-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40 rounded-xl`}
        >
          <View>
            <Image
              style={{ width: 120, height: 120, resizeMode: 'contain' }}
              source={{
                uri: `https://links.papareact.com/${item.image}`,
              }}
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
            <Icon
              type='antdesign'
              name='arrowright'
              color='white'
              style={tw`p-2 bg-gray-800 rounded-full w-10 mt-4`}
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
