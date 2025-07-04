import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Définition des types des props pour éviter les erreurs TypeScript
type TransactionItemProps = {
  name: string;
  phone: string;
  amount: number;
  date: string;
};

const TransactionItem: React.FC<TransactionItemProps> = ({ name, phone, amount, date }) => {
  const isPositive = amount >= 0;

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.phone}>{phone}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <Text style={[styles.amount, isPositive ? styles.positive : styles.negative]}>
        {isPositive ? `+${amount}F` : `-${Math.abs(amount)}F`}
      </Text>
    </View>
  );
};

export default TransactionItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: '#E0E0E0',
    paddingHorizontal: 16,
  },
  info: {
    flex: 1,
  },
  name: {
    color: '#2C2CA0',
    fontWeight: '600',
    fontSize: 14,
  },
  phone: {
    color: '#2C2CA0',
    fontSize: 13,
    marginTop: 2,
  },
  date: {
    color: '#888',
    fontSize: 12,
    marginTop: 2,
  },
  amount: {
    fontWeight: '600',
    fontSize: 15,
  },
  positive: {
    color: '#2C2CA0',
  },
  negative: {
    color: '#FF4D4D',
  },
});
