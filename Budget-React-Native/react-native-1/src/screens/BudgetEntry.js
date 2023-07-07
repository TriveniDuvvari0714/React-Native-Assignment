import { useState } from "react";
import { useDispatch } from "react-redux";
import { StyleSheet, View } from "react-native";
import { Button, TextInput, Caption } from "react-native-paper";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { addBudgettoList } from "../redux/actions/budgetActions";

const BudgetEntry = ({ navigation }) => {
  const initialValues = {
    name: { isError: false, msg: "" },
    plannedAmount: { isError: false, msg: "" },
    actualAmount: { isError: false, msg: "" },
  };

  const [textItem, setTextItem] = useState("");
  const [textPlannedAmount, setTextPlannedAmount] = useState("");
  const [textActualAmount, setTextActualAmount] = useState("");
  const [formError, setFormError] = useState(initialValues);

  const dispatch = useDispatch();

  const onSave = () => {
    setFormError(initialValues);
    if (!textItem || !textActualAmount || !textPlannedAmount) {
      if (!textItem) {
        setFormError((prevState) => ({
          ...prevState,
          name: { isError: true, msg: "Name of item is required" },
        }));
      }

      if (!textPlannedAmount) {
        setFormError((prevState) => ({
          ...prevState,
          plannedAmount: { isError: true, msg: "Planned amount is required" },
        }));
      }

      if (!textActualAmount) {
        setFormError((prevState) => ({
          ...prevState,
          actualAmount: { isError: true, msg: "Actual amount is required" },
        }));
      }
    } else {
      const newBudget = {
        id: uuidv4(),
        nameOfItem: textItem,
        plannedAmt: textPlannedAmount,
        actualAmt: textActualAmount,
      };
      setTextItem("");
      setTextPlannedAmount("");
      setTextActualAmount("");
      dispatch(addBudgettoList(newBudget));
      navigation.navigate("BudgetList");
    }
  };

  const renderErrorText = (text) => {
    return <Caption style={{ color: "red" }}>{text}</Caption>;
  };

  return (
    <View style={styles.container}>
      <TextInput
        error={formError.name.isError}
        style={styles.inputBox}
        label="Name of item"
        value={textItem}
        onChangeText={(text) => setTextItem(text)}
      />
      {formError.name.isError && renderErrorText(formError.name.msg)}

      <TextInput
        error={formError.plannedAmount.isError}
        style={styles.inputBox}
        label="Planned amount"
        value={textPlannedAmount}
        onChangeText={(text) => setTextPlannedAmount(text)}
        keyboardType="numeric"
      />
      {formError.plannedAmount.isError &&
        renderErrorText(formError.plannedAmount.msg)}

      <TextInput
        error={formError.actualAmount.isError}
        style={styles.inputBox}
        label="Actual amount"
        value={textActualAmount}
        onChangeText={(text) => {
          setTextActualAmount(text);
        }}
        keyboardType="numeric"
      />
      {formError.actualAmount.isError &&
        renderErrorText(formError.actualAmount.msg)}

      <Button style={styles.button} mode="contained" onPress={onSave}>
        Save
      </Button>
      <Button
        style={styles.button}
        mode="contained"
        onPress={() => navigation.navigate("BudgetList")}
      >
        Show List
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  headline: {
    margin: 10,
  },
  inputBox: {
    width: 300,
    margin: 10,
    backgroundColor: '#f5e6ff',
  },
  button: {
    margin: 5,
    backgroundColor: '#8020f0',
  },
});

export default BudgetEntry;
