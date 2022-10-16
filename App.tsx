import { Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#131016',
      padding: 16
    }}>
      <Text style={{
        color: '#FDFCFE',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 48
      }}>
        React Native
      </Text>

      <Text style={{
        color: '#6b6b6b',
        fontSize: 16
      }}>
        Projeto iniciado em 16 de Outubro.
        </Text>
    </View>
  )
}