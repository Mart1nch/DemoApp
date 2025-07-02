import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Tool(props) {
  const navigation = useNavigation();


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ flex: 1, flexDirection: 'row', columnGap: 40, paddingHorizontal: 20 }}>
        <TouchableOpacity
          style={{ flex: 1, aspectRatio: 1, }}
          activeOpacity={0.7}
          onPress={() => {
            navigation.navigate('Lineup');
          }}
        >
          <View style={{ flex: 1, backgroundColor: '#123', justifyContent: 'center' }}>
            <Text style={{textAlign: 'center', color: '#fff', fontSize: 22}}>阵容库</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ flex: 1, aspectRatio: 1, }}
          activeOpacity={0.7}
          onPress={() => {
            navigation.navigate('TradeCenter');
          }}
        >
          <View style={{ flex: 1, backgroundColor: '#654', justifyContent: 'center' }}>
            <Text style={{textAlign: 'center', color: '#fff', fontSize: 22}}>交易行</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}