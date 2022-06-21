import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <Text style={styles.title}>Total this month</Text>
        <Text style={styles.amount}>$478.33</Text>
      </View>
      <View style={styles.right}>
        <Text style={styles.percent}>+2.4%</Text>
        <Text style={styles.title}>from last month</Text>
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'DMSans-Regular',
    fontSize: 16,
    fontWeight: '400',
    color: 'hsl(28, 10%, 53%)',
  },
  amount: {
    marginTop: 5,
    fontFamily: 'DMSans-Regular',
    fontSize: 28,
    fontWeight: '700',
    color: 'hsl(25, 47%, 15%)',
  },
  percent: {
    fontFamily: 'DMSans-Regular',
    fontSize: 18,
    fontWeight: '700',
    color: 'hsl(25, 47%, 15%)',
  },
  right: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
});
