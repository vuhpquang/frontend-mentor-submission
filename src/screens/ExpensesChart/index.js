import React from 'react';
import { StyleSheet, View } from 'react-native';
import data from '../../data/data.json';
import Body from './Body';
import TopBar from './TopBar';

const ExpensesChart = () => {
  return (
    <View style={styles.container}>
      <View style={styles.component}>
        <TopBar />
        <Body data={data} />
      </View>
    </View>
  );
};

export default ExpensesChart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'hsl(27, 66%, 92%)',
    paddingHorizontal: 20,
  },
  component: {
    width: '100%',
  },
});
