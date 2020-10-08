import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, Button} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
  Profile: {userId: string};
  Feed: {sort: 'latest' | 'top'} | undefined;
};

type Props = StackScreenProps<RootStackParamList, 'Profile'>;

const DetailsScreen = ({navigation}: Props) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>

    // <View style={{flex: 1, justifyContent: 'center'}}>
    //   <Text>Details Screen</Text>
    //   <Button
    //     title="Go to Details... again"
    //     onPress={() => navigation.push('Details')}
    //   />
    //   <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    //   <Button title="Go Back" onPress={() => navigation.goBack()} />
    // </View>
  );
};

export default DetailsScreen;
