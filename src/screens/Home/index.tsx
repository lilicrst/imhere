import { Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';

import { styles } from './styles';

import { Participant } from '../../components/Participant';

export function Home() {

  const participants = [
    'Lisandra', 'Levy', 'Fernando', 'Nathalia', 'Vitor', 'Rodrigo', 'Diego', 'Mayk', 'Jack', 'Sebastião', 'Alysson', 'Max'
  ]

  function handleParticipantAdd() {
    console.log("Add participant");
  }

  function handleParticipantRemove() {
    console.log("Remove participant");
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

      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={handleParticipantRemove}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou ainda.
          </Text>
        )}
      />

    </View>
  )
}