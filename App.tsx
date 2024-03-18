import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.whiteText}>Hello World!!</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteText: {
    color: 'white',
  },
});

export default App;
