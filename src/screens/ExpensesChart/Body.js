import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ColumnChart from './ColumnChart';
import Footer from './Footer';

const Body = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Spending - Last 7 days</Text>
      <ColumnChart data={data} />
      <View style={styles.divider} />
      <Footer />
    </View>
  );
};

export default Body;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: 'hsl(33, 100%, 98%)',
    width: '100%',
    borderRadius: 20,
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    flexDirection: 'column',
  },
  title: {
    fontFamily: 'DMSans-Regular',
    fontSize: 25,
    fontWeight: '700',
    color: 'hsl(25, 47%, 15%)',
  },
  image: {
    width: 40,
    height: 40,
  },
  divider: {
    backgroundColor: 'hsl(27, 66%, 92%)',
    height: 2,
    width: '100%',
    marginVertical: 20,
  },
});
