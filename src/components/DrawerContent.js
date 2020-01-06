import React from 'react';
import {StyleSheet, SafeAreaView, View, ScrollView} from 'react-native';

import {DrawerItems} from 'react-navigation-drawer';

export function DrawerContent(props) {
  return (
    <ScrollView>
      <SafeAreaView
        style={styles.container}
        forceInset={{top: 'always', horizontal: 'never'}}>
        <View style={{paddingTop: 70}}>
          <DrawerItems {...props} />
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
