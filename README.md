# Wave App UI Clone

Cette application est une reproduction d'une interface de type "Wave" (React Native/Expo), avec header animé, carte QRCode, boutons d'action, et liste de transactions.

## Fonctionnalités principales

- **Header animé** : Le solde et l'icône œil sont affichés dans un header qui réduit sa hauteur lors du scroll.
- **Carte QRCode** : Superposée entre le header violet et le fond blanc arrondi, centrée.
- **Fond blanc arrondi** : Fait partie du scroll, commence juste sous la carte QRCode, avec coins arrondis.
- **Boutons d'action** : Disposés en grille, avec icônes et couleurs personnalisées.
- **Liste de transactions** : Affichée sur fond blanc, défile sous le header.

## Structure du projet

```
wave/
  app/
    (tabs)/_layout.tsx      # Écran principal avec header animé, scroll, QRCode, etc.
  components/
    TopBar.tsx              # Header animé avec solde
    QRCodeCard.tsx          # Carte QRCode stylisée
    ActionButton.tsx        # Boutons d'action personnalisés
    TransactionItem.tsx     # Affichage d'une transaction
  assets/
    images/                 # Images et logos
```

## Installation

1. **Cloner le projet**
   ```bash
   git clone <repo-url>
   cd wave
   ```
2. **Installer les dépendances**
   ```bash
   npm install
   # ou
   yarn install
   ```
3. **Installer les polices et icônes**
   - Assurez-vous d'avoir installé `react-native-vector-icons` et `react-native-qrcode-svg` :
     ```bash
     npm install react-native-vector-icons react-native-qrcode-svg
     ```
   - Si besoin, installez les types pour TypeScript :
     ```bash
     npm install --save-dev @types/react-native-vector-icons
     ```

4. **Lancer l'application**
   ```bash
   npx expo start
   # ou
   yarn start
   ```

## Points d'UI importants

- Le header (TopBar) est en position absolue, avec un zIndex élevé pour rester au-dessus du contenu.
- Le fond blanc arrondi fait partie du scroll et commence juste sous la carte QRCode.
- La carte QRCode est centrée et superposée sur le fond blanc arrondi grâce à un marginTop négatif.
- Les boutons d'action et la liste des transactions sont inclus dans le fond blanc arrondi.

## Personnalisation

- Modifiez les couleurs, labels, ou icônes dans les composants pour adapter à vos besoins.
- Les animations du header sont contrôlées via `Animated.Value` dans `_layout.tsx`.

## Dépendances principales
- React Native
- Expo
- react-native-vector-icons
- react-native-qrcode-svg

## Auteur
- Inspiré par l'UI Wave
- Développé par [Votre Nom]

---

N'hésitez pas à ouvrir une issue ou une PR pour toute amélioration !
#   w a v e _ c l o n e  
 