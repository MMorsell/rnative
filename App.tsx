import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
  StackScreenProps,
} from '@react-navigation/stack';
import {
  Header,
  LearnMoreLinks,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import Styles from './assets/Styles/Styles';
import RegisterScreen from './src/screens/Register';
import DetailsScreen from './src/screens/Details';
import HomeScreen from './src/screens/Home';

const Stack = createStackNavigator();

declare const global: {HermesInternal: null | {}};

const App = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    auth().onAuthStateChanged((userState) => {
      setUser(userState);

      if (loading) {
        setLoading(false);
      }
    });
  }, []);

  // if (!loading) {
  //   auth()
  //     .signInAnonymously()
  //     .then(() => {
  //       console.log('User signed in anonymously');
  //     })
  //     .catch((error) => {
  //       if (error.code === 'auth/operation-not-allowed') {
  //         console.log('Enable anonymous in your firebase console.');
  //       }

  //       console.error(error);
  //     });
  // }

  // if (!user) {
  //   return <RegisterScreen />;
  // }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        {/* <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={Styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={Styles.engine}>
              <Text style={Styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={Styles.body}>
            <View style={Styles.sectionContainer}>
              <Text style={Styles.sectionTitle}>Step One</Text>
              <Text style={Styles.sectionDescription}>
                Edit <Text style={Styles.highlight}>App.tsx</Text> Wazaaaa
              </Text>
            </View>
            <View style={Styles.sectionContainer}>
              <Text style={Styles.sectionTitle}>See Your Changes</Text>
              <Text style={Styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={Styles.sectionContainer}>
              <Text style={Styles.sectionTitle}>Debug</Text>
              <Text style={Styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={Styles.sectionContainer}>
              <Text style={Styles.sectionTitle}>Learn More</Text>
              <Text style={Styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
