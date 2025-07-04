import ActionButton from '@/components/ActionButton';
import QRCodeCard from '@/components/QRCodeCard';
import TopBar from '@/components/TopBar';
import TransactionItem from '@/components/TransactionItem';
import React, { useRef, useState } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function TabLayout() {
  // Utilisation d'une Animated.Value pour le scrollY attendu par TopBar
  const scrollY = useRef(new Animated.Value(0)).current;
  const [balanceVisible, setBalanceVisible] = useState(true);
  const [balance, setBalance] = useState('25 000 F');

  const handleToggleBalance = () => {
    setBalanceVisible((prev) => !prev);
  };

  // Définir les hauteurs du header pour l'animation
  const HEADER_MAX_HEIGHT = 120;
  const HEADER_MIN_HEIGHT = 60;

  // Animation de la hauteur du header
  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: 'clamp',
  });


  return (
    <View style={{ flex: 1, backgroundColor: 'rgb(78, 57, 197)' }}>
      {/* Header animé */}
      <Animated.View style={[styles.header, { height: headerHeight }]}>
        <TopBar
          scrollY={scrollY}
          balance={balanceVisible ? balance : '••••••••'}
          onToggleBalance={handleToggleBalance}
        />
      </Animated.View>

      {/* ScrollView */}
      <Animated.ScrollView
        style={{ flex: 1, zIndex: 1 }}
        contentContainerStyle={{ paddingTop: HEADER_MAX_HEIGHT + 20 }}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
      >
        {/* QRCodeCard superposé */}
        <View style={{ alignItems: 'center', marginTop: -10, zIndex: 2 }}>
          <QRCodeCard />
        </View>

        {/* Fond blanc arrondi qui commence juste sous la carte */}
        <View style={[styles.roundedWhiteBg, { marginTop: -60, zIndex: 1 }]}>
          {/* Tout le reste du contenu scrollable : boutons, transactions, etc. */}
          <View style={styles.actionsGrid}>
            <ActionButton icon="account" label="Transfert" bg='rgba(7, 144, 230, 0.24)' color='rgb(4, 20, 77)' onPress={() => { }} />
            <ActionButton icon="credit-card" label="Paiements" bg='rgba(254, 218, 38, 0.22)' color='rgba(255, 105, 12, 0.73)' onPress={() => { }} />
            <ActionButton icon="phone" label="Credit" bg='rgba(3, 192, 255, 0.2)' color='rgb(6, 205, 255)' onPress={() => { }} />
            <ActionButton icon="bank" label="Banque" bg='rgba(233, 70, 154, 0.18)' color='rgba(251, 15, 98, 0.93)' onPress={() => { }} />
            <ActionButton icon="gift" label="Cadeaux" bg='rgba(34, 231, 93, 0.17)' color='rgba(6, 169, 36, 0.82)' onPress={() => { }} />
            <ActionButton icon="safe" label="Coffre" bg='rgba(249, 92, 223, 0.35)' color='rgb(255, 4, 192)' onPress={() => { }} />
            <ActionButton icon="bus" label="Transport" bg='rgba(254, 218, 38, 0.22)' color='rgba(255, 105, 12, 0.73)' onPress={() => { }} />
          </View>
          <View>
            {/* Transactions */}
            <View style={{  backgroundColor: 'white' }}>
              <TransactionItem
                name="De DEXCHANGE"
                phone=""
                amount={505}
                date="3 juillet 2025 à 16:34"
              />
              <TransactionItem
                name="De DEXCHANGE"
                phone=""
                amount={505}
                date="3 juillet 2025 à 16:34"
              />
              <TransactionItem
                name="À Mamadou D."
                phone="78 123 45 67"
                amount={-1200}
                date="1 juillet 2025 à 09:15"
              />
              <TransactionItem
                name="De Orange Money"
                phone=""
                amount={15000}
                date="30 juin 2025 à 18:22"
              />
              <TransactionItem
                name="À Boulangerie Soleil"
                phone="33 456 78 90"
                amount={-850}
                date="29 juin 2025 à 08:45"
              />
              <TransactionItem
                name="De Supermarché Auchan"
                phone=""
                amount={3200}
                date="28 juin 2025 à 17:10"
              />
              <TransactionItem
                name="À Fatou Ndiaye"
                phone="77 888 99 00"
                amount={-2000}
                date="27 juin 2025 à 14:30"
              />
              <TransactionItem
                name="De Yassine Boutique"
                phone=""
                amount={500}
                date="26 juin 2025 à 11:05"
              />
              <TransactionItem
                name="À Pharmacie du Centre"
                phone="33 222 33 44"
                amount={-3500}
                date="25 juin 2025 à 19:50"
              />
              <button
                style={{
                  backgroundColor:'rgba(78, 114, 245, 0.45)',
                  color: 'rgb(4, 31, 128)',
                  border: 'none',
                  borderRadius: 20,
                  padding: '10px 24px',
                  fontWeight: 'bold',
                  fontSize: 16,
                  marginTop: 20,
                  alignSelf: 'center',
                  boxShadow: '0 2px 8px rgba(78,57,197,0.15)',
                  cursor: 'pointer',
                  letterSpacing: 1,
                }}
              >
                <Icon name='search' size={15} color='rgb(4, 31, 128)'  />
                   Rechercher
              </button>
            </View>
          </View>
        </View>
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    zIndex: 100,
    elevation: 10,
    // Les autres styles sont gérés dans TopBar ou via l'animation
  },
  roundedWhiteBg: {
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    minHeight: 1000, // ou la hauteur nécessaire
    paddingTop: 80, // pour laisser de l'espace sous la carte si besoin
    // marginTop: -60, // pour que le fond blanc remonte sous la carte
  },
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
  },
});
