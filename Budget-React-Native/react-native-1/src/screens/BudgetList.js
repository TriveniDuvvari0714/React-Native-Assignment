import React, { useEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { Caption, List } from "react-native-paper";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getBudgetList } from "../redux/actions/budgetActions";

const BudgetList = () => {
  const dispatch = useDispatch();
  const budgetList = useSelector((state) => state.budget);

  useEffect(() => {
    dispatch(getBudgetList());
  }, []);

  const renderBudgetList = ({ item }) => {
    return (
      <List.Item
        title={item.nameOfItem}
        description={
          <View>
            <Caption>Planned amount: {item.plannedAmt}</Caption>
            <Caption>Actual amount: {item.actualAmt}</Caption>
          </View>
        }
      />
    );
  };

  return (
    <View>
      <FlatList
        data={budgetList}
        renderItem={renderBudgetList}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    flex: 1,
  },
});

export default BudgetList;
