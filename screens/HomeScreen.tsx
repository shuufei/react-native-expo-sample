import { DrawerActions } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from '../types';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const HomeScreen = (props: HomeScreenProps) => {
  const navigation = props.navigation;
  return (
    <View style={styles.container}>
      <Text style={styles.routerName}>{props.route.name}</Text>
      <Button title="Go to One Page" onPress={() => {
        navigation.navigate('One')
      }} />
      <Button title="Go to Two Page" onPress={() => {
        navigation.navigate('Two')
      }} />
      <Button title="Show Modal" onPress={() => {
        navigation.navigate('Modal')
      }} />
      <Button title="Show Drawer" onPress={() => {
        navigation.dispatch(DrawerActions.openDrawer());
      }} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  routerName: {
    fontSize: 14,
    color: 'white',
  },
  button: {
    marginTop:  '24px'
  }
})