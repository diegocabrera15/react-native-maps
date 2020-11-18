import React, { useState } from "react";
import { StyleSheet, View, Button, Text } from "react-native";
import { Map, Modal, Panel, Input } from "./components";

export default function App() {
  const [points, setPoints] = useState([]);
  const [pointTem, setPointTem] = useState({});
  const [name, setName] = useState("");
  const [visibilityFilter, setVisibilityFilter] = useState("newPoint"); //newPoint, allPoints
  const [visibility, setVisibility] = useState(false);

  const handleLongPress = ({ nativeEvent }) => {
    setVisibilityFilter("newPoint");
    setPointTem(nativeEvent.coordinate);
    setVisibility(true);
  };

  const handleChangeText = (text) => {
    setName(text);
  };
  const handleSubmit = () => {
    const newPoint = { coordinate: pointTem, name: name };
    setPoints(points.concat(newPoint));
    setVisibility(false);
    setName("");
  };

  const handleList = () => {
    setVisibilityFilter("allPoints");
    setVisibility(true);
  };
  return (
    <View style={styles.container}>
      <Map onLongPress={handleLongPress} />
      <Modal visibility={visibility}>
        {visibilityFilter === "newPoint" ? (
          <>
            <Input
              title="Name"
              placeholder="Name point"
              onChangeText={handleChangeText}
            />
            <Button title="Ok" onPress={handleSubmit} />
          </>
        ) : (
          <Text>Caddy</Text>
        )}
      </Modal>
      <Panel onPressLeft={handleList} textLeft='List'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
