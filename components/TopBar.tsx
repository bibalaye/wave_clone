import React from "react";
import { Animated, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

// Définition des types pour les props (TypeScript)
type TopBarProps = {
  scrollY: Animated.Value;
  balance: string | number;
  onToggleBalance: () => void;
};

const HEADER_MAX_HEIGHT = 120;
const HEADER_MIN_HEIGHT = 60;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

/**
 * Ce composant TopBar est maintenant contrôlé par une Animated.Value passée en prop.
 * Il s'utilise dans un parent qui gère le scroll (voir exemple d'intégration dans la consigne).
 */
export default function TopBar({ scrollY, balance, onToggleBalance }: TopBarProps) {
  // Animation de la hauteur du header
  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: 'clamp',
  });

  // Animation de l'opacité (optionnel, pour effet plus doux)
  const headerOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 0.8, 0.6],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View style={[styles.header, { height: headerHeight }]}>
      <StatusBar barStyle="light-content" />
      <View style={styles.headerContent}>
        <Icon style={styles.settingsIcon} name="settings" size={22} color="white" />
        <View style={styles.balanceRow}>
          <Text style={styles.balanceText}>{balance}</Text>
          <TouchableOpacity onPress={onToggleBalance}>
            <Icon name="eye" size={22} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0, left: 0, right: 0,
    backgroundColor: 'rgb(78, 57, 197)',
    zIndex: 10,
    elevation: 5,
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
  headerContent: {
    width: '100%',
    alignItems: 'center',
  },
  settingsIcon: {
    position: 'absolute',
    left: 16,
    top: 18,
  },
  balanceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  balanceText: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    marginRight: 12,
  },
});