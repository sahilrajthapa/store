import React from 'react';
import {StyleSheet, SafeAreaView, View, ScrollView} from 'react-native';

import {DrawerItems} from 'react-navigation-drawer';
import LinearGradient from 'react-native-linear-gradient';
import {Button} from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
import {persistor} from '../store';

async function logOutHandler(navigation) {
  await AsyncStorage.removeItem('token');
  persistor.purge();
  navigation.navigate('Auth');
}
export function DrawerContent(props) {
  return (
    <ScrollView>
      <SafeAreaView
        style={styles.container}
        forceInset={{top: 'always', horizontal: 'never'}}>
        <View
          style={{
            paddingTop: 70,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            // alignItems: 'flex-start',
          }}>
          <DrawerItems {...props} />

          <View style={{marginTop: 20}}>
            <Button
              ViewComponent={LinearGradient}
              linearGradientProps={{
                colors: ['#6582E9', '#6593F3', '#64B0FE'],
                start: {x: 0, y: 0.5},
                end: {x: 1, y: 0.5},
              }}
              title="Logout"
              titleStyle={{
                color: 'white',
                fontSize: 16,
                // paddingTop: 7,
                // paddingBottom: 7,
              }}
              buttonStyle={{
                borderRadius: 0,
              }}
              raised
              onPress={() => logOutHandler(props.navigation)}
            />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
