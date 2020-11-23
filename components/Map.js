import React from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, Dimensions } from "react-native";

export default ({ onLongPress, points, pointsFilter }) => {
  return (
    <MapView
      style={styles.map}
      onLongPress={onLongPress}>
        { pointsFilter && points.map(x => 
           <Marker 
           key={x.name}
            coordinate={x.coordinate}
            title={x.name}
        />)}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height - 150,
  },
});
