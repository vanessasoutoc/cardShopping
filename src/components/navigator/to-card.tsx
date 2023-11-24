import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Button, Icon, TopNavigationAction } from "@ui-kitten/components";
import React from "react";
import { StyleSheet } from "react-native";
export type ScreenNames = ["Card"];
export type RootStackParamList = Record<ScreenNames[number], undefined>;
export type StackNavigation = NavigationProp<RootStackParamList>;

const style = StyleSheet.create({
  badge: {
    backgroundColor: "red",
    color: "white",
    padding: 4,
    textAlign: "center",
    fontSize: 8,
    borderRadius: 40,
  },
});

const ToCard = ({ totalItems }: { totalItems: number }) => {
  const { navigate } = useNavigation<StackNavigation>();

  const navigateToCard = () => {
    navigate("Card");
  };

  const CardIcon = (props: any) => (
    <Button appearance="ghost" onPress={navigateToCard}>
      <Icon {...props} name="shopping-cart-outline" />
      <span style={style.badge}>{props.totalItems ?? 0}</span>
    </Button>
  );

  return <TopNavigationAction icon={<CardIcon totalItems={totalItems} />} />;
};

export default ToCard;
