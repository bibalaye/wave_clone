// components/ActionButton.tsx
import React from 'react';
import { StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Définition des types pour les props
type ActionButtonProps = {
  icon: string;
  bg: string;
  color: string;
  label: string;
  onPress: () => void;
};

const ActionButton: React.FC<ActionButtonProps> = ({ icon, bg, color, label, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={[styles.iconWrapper, { backgroundColor: bg }]}>
        <Icon name={icon} size={30} color={color} />
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default ActionButton;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 10,
    width: 80,
  } as ViewStyle,
  iconWrapper: {
    padding: 20,
    borderRadius: 30,
    elevation: 3, // pour Android
    shadowColor: '#000', // pour iOS
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
  } as ViewStyle,
  label: {
    marginTop: 6,
    fontSize: 13,
    textAlign: 'center',
    color: '#000',
    fontWeight: '500',
  } as TextStyle,
});
