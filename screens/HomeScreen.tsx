import { DrawerActions } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  Button,
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { RootStackParamList } from "../types";

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;

export const HomeScreen = (props: HomeScreenProps) => {
  const navigation = props.navigation;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.routerName}>{props.route.name}</Text>
        <Button
          title="Go to One Page"
          onPress={() => {
            navigation.navigate("One");
          }}
        />
        <Button
          title="Go to Two Page"
          onPress={() => {
            navigation.navigate("Two");
          }}
        />
        <Button
          title="Show Modal"
          onPress={() => {
            navigation.navigate("Modal");
          }}
        />
        <Button
          title="Show Drawer"
          onPress={() => {
            navigation.dispatch(DrawerActions.openDrawer());
          }}
        />
        <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollView: {
    backgroundColor: "pink",
    width: '100%',
  },
  routerName: {
    fontSize: 14,
    color: "white",
  },
  button: {
    marginTop: "24px",
  },
  text: {
    fontSize: 42
  }
});
