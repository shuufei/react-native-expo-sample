import { DrawerActions, useNavigation } from "@react-navigation/native";
import { Box, Heading, HStack, Image, Pressable, Text } from "native-base";
import { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet
} from "react-native";

export const DigimonVSScreen = () => {
  const [count, setCuont] = useState(0);
  const { dispatch } = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Heading color="gray.900" textAlign="center">
          Digimon VS
        </Heading>
        <HStack>
          <Box position="relative" width="70">
            <Image
              source={require("../assets/images/digimon/back_rotate90.png")}
              resizeMode="contain"
              size="md"
              alt="digitama"
              position="absolute"
              left={-16}
            />
            {/* <Image
              source={require("../assets/images/digimon/back_digitama.png")}
              resizeMode="contain"
              size="md"
              alt="digitama"
              marginLeft={-4}
            /> */}
          </Box>
          <Box flex="1">
            <Image
              source={require("../assets/images/digimon/BT01/BT1-001.png")}
              resizeMode="contain"
              size="md"
              alt="digitama"
            />
            <Text>count: {count}</Text>
            <Pressable
              p="4"
              backgroundColor="gray.200"
              _pressed={{ backgroundColor: "gray.500" }}
              onPress={() => {
                setCuont((current) => current + 1);
              }}
            >
              <Text>button</Text>
            </Pressable>
          </Box>
          <Box position="relative">
            <Pressable
              onPress={() => {
                setCuont((current) => current + 1);
                dispatch(DrawerActions.openDrawer());
              }}
            >
              <Image
                source={require("../assets/images/digimon/back.png")}
                resizeMode="contain"
                size="md"
                alt="digitama"
              />
            </Pressable>
          </Box>
        </HStack>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },
  scrollView: {
    width: "100%",
    // backgroundColor: "red",
  },
});
