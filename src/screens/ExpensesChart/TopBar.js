import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SvgIcon from './SvgIcon';

const TopBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.title}>My balance</Text>
          <Text style={styles.amount}>$921.48</Text>
        </View>
        <SvgIcon width={60} height={60} />
      </View>
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'hsl(10, 79%, 65%)',
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
    fontSize: 16,
    fontWeight: '400',
    color: 'hsl(0, 0%, 100%)',
  },
  image: {
    width: 40,
    height: 40,
  },
  amount: {
    marginTop: 10,
    fontFamily: 'DMSans-Regular',
    fontSize: 24,
    fontWeight: '700',
    color: 'hsl(0, 0%, 100%)',
  },
});
