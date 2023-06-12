import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Platform,
  Button,
  NativeModules,
  Alert,
  StyleSheet,
} from 'react-native';
const ESimEligiblity = () => {
  return (
    <View style={styles.mainConatiner}>
      <SafeAreaView />
      <Text style={styles.txt}>Press the below button to check eSim</Text>
      {Platform.OS === 'android' ? (
        <View style={styles.btn}>
          <Button
            title="Press"
            onPress={() => {
              try {
                NativeModules.ESimCheckModule.eSimCheck((response: any) => {
                  if (response) {
                    Alert.alert('eSim eligible');
                  } else {
                    Alert.alert('eSim not eligible');
                  }
                });
              } catch (error) {
                console.log(error);
              }
            }}
          />
        </View>
      ) : null}
      {Platform.OS === 'ios' ? (
        <Button
          title="Check"
          onPress={() => {
            try {
              NativeModules.ESimCheck.eSimChecK((response: any) => {
                console.log(response);
                if (response) {
                  Alert.alert('Eligible for eSim');
                } else {
                  Alert.alert('Not eligible for eSim');
                }
              });
            } catch (error) {
              console.log('error', error);
            }
          }}
        />
      ) : null}
    </View>
  );
};
export default ESimEligiblity;

const styles = StyleSheet.create({
  mainConatiner: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  txt: {
    paddingBottom: 20,
    color: 'black',
    fontSize: 20,
  },
  btn: {paddingHorizontal: 60},
});
