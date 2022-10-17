import { Text, View, TextInput, TouchableOpacity } from 'react-native';

import { styles } from './styles';

import { Participant } from '../../components/Participant';

export function Home() {

  function handleParticipantAdd() {
    console.log("Você clicou no botão!")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Evento de Programação Mobile
      </Text>

      <Text style={styles.eventDate}>
        17 de Outubro, 19h.
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          placeholderTextColor="#B6B6B6"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <Participant />
      <Participant />
      <Participant />
    </View>
  )
}