import { Image, Text, View } from "react-native";
import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/Ionicons';

export default function QRCodeCard() {
  return (
    <View style={{ backgroundColor:'rgb(20, 179, 236)', height: 150, width:280 ,borderRadius: 20, alignSelf: 'center', justifyContent: 'center', alignItems: 'center', zIndex:100 }}>
        
              <View style={{ backgroundColor: 'white',borderRadius:10, height: 120, width: 120, paddingTop: 5, justifyContent: 'center', alignItems: 'center' }}>
                  <QRCode value="https://www.google.com" size={100} />
                  <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                      <Icon name="camera" size={15} color="black" />
                      <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}> Scanner</Text>
                  </View>
              </View>
              <Image source={require('../assets/images/wave.png')} style={{ width: 50, height: 50,marginBottom:10, position:'absolute',right:0, bottom:0 }} />
      
      </View>
  );
}