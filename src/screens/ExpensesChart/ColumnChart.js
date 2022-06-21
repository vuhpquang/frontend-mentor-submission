import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ColumnChart = ({ data, max = 60, height = 130 }) => {
  const [selected, setSelected] = React.useState('');
  return (
    <View style={styles.container}>
      {data.map((item, index) => {
        return (
          <View
            key={index}
            style={[
              styles.column,
              {
                flexBasis: `${70 / data.length}%`,
              },
            ]}>
            <View
              style={[
                styles.colContainer,
                {
                  height: height,
                },
              ]}>
              <TouchableOpacity
                style={[
                  styles.col,
                  { height: (item.amount / max) * height },
                  item.day === selected && { backgroundColor: 'hsl(186, 34%, 60%)' },
                ]}
                activeOpacity={0.8}
                onPress={() => setSelected(item.day)}
              />
            </View>
            <Text style={styles.text}>{item?.day || 'day'}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default ColumnChart;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  column: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'DMSans-Regular',
    fontSize: 12,
  },
  col: {
    backgroundColor: 'hsl(10, 79%, 65%)',
    width: '100%',
    borderRadius: 5,
  },
  colContainer: {
    flexDirection: 'column-reverse',
    width: '100%',
    marginBottom: 10,
  },
});
