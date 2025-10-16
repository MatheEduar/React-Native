import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, View, Text, ScrollView, TouchableOpacity, SafeAreaView, Alert } from 'react-native';

// Inputs Component - Este componente renderiza um único conjunto de entradas de coordenadas X e Y.
// Ele recebe os valores atuais e um manipulador onChange do componente pai.
const Inputs = ({ index, xValue, yValue, onCoordinateChange }) => {
  return (
    <View style={styles.inputContainerWrapper}>
      <Text style={styles.inputTitle}>Vértice {index + 1}</Text>
      <View style={styles.outerInputContainer}>
        {/* Entrada da Coordenada X */}
        <View style={styles.singleInputGroup}>
          <Text style={styles.inputText}>Coordenada X:</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => onCoordinateChange(index, 'x', text)}
            value={String(xValue)} // Garante que o valor seja uma string
            keyboardType="numeric" // Garante que o teclado numérico seja exibido
            placeholder="Ex: 10"
            placeholderTextColor="#aaa"
          />
        </View>

        {/* Entrada da Coordenada Y */}
        <View style={styles.singleInputGroup}>
          <Text style={styles.inputText}>Coordenada Y:</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => onCoordinateChange(index, 'y', text)}
            value={String(yValue)} // Garante que o valor seja uma string
            keyboardType="numeric" // Garante que o teclado numérico seja exibido
            placeholder="Ex: 20"
            placeholderTextColor="#aaa"
          />
        </View>
      </View>
    </View>
  );
};

// App Component - O componente principal que gerencia a lista de vértices.
// Agora recebe 'initialVerticesCount' como uma prop.
const App = ({ initialVerticesCount = 1 }) => { // Define um valor padrão de 1
  // Estado para armazenar um array de objetos de vértice { x: '', y: '' }
  // Inicializa a quantidade de vértices baseada na prop 'initialVerticesCount'
  const [vertices, setVertices] = useState(() => {
    const count = Math.max(1, Math.floor(Number(initialVerticesCount))); // Garante que seja pelo menos 1 e um número inteiro
    return Array.from({ length: count }, () => ({ x: '', y: '' }));
  });

  // Função para adicionar um novo vértice vazio ao estado
  const addVertex = () => {
    setVertices((prevVertices) => [...prevVertices, { x: '', y: '' }]);
  };

  // Função para remover o último vértice
  const removeLastVertex = () => {
    setVertices((prevVertices) => {
      if (prevVertices.length > 1) { // Garante que sempre haja pelo menos um vértice
        return prevVertices.slice(0, prevVertices.length - 1);
      }
      return prevVertices;
    });
  };

  // Função para atualizar as coordenadas de um vértice específico
  // index: O índice do vértice no array
  // axis: 'x' ou 'y' para especificar qual coordenada atualizar
  // value: O novo valor para a coordenada
  const updateVertexCoordinates = (index, axis, value) => {
    // Basic validation to allow only numbers or empty string
    const numericValue = value.replace(/[^0-9.-]/g, ''); // Remove non-numeric characters, allow dot and minus

    setVertices((prevVertices) =>
      prevVertices.map((vertex, i) =>
        i === index ? { ...vertex, [axis]: numericValue } : vertex
      )
    );
  };

  // Efeito para registrar os vértices atuais no console (para depuração)
  useEffect(() => {
    console.log("Vértices Atuais:", vertices);
  }, [vertices]);

  return (
    // SafeAreaView para lidar com entalhes e barras de status em dispositivos iOS
    <SafeAreaView style={styles.safeArea}>
      {/* ScrollView para permitir rolagem se houver muitos vértices */}
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.mainTitle}>Entrada de Coordenadas do Polígono</Text>

        {/* Contêiner para a lista de componentes de entrada de vértice */}
        <View style={styles.verticesContainer}>
          {vertices.map((vertex, index) => (
            <Inputs
              key={index} // Usando o índice como chave, idealmente um ID único em produção
              index={index}
              xValue={vertex.x}
              yValue={vertex.y}
              onCoordinateChange={updateVertexCoordinates}
            />
          ))}
        </View>

        {/* Botões para adicionar/remover vértices */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.addButton} onPress={addVertex}>
            <Text style={styles.buttonText}>Adicionar Vértice</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.removeButton} onPress={removeLastVertex}>
            <Text style={styles.buttonText}>Remover Vértice</Text>
          </TouchableOpacity>
        </View>

        {/* Exibição das coordenadas coletadas */}
        <View style={styles.displayContainer}>
          <Text style={styles.displayTitle}>Coordenadas Coletadas:</Text>
          {vertices.map((vertex, index) => (
            <Text key={`display-${index}`} style={styles.displayText}>
              Vértice {index + 1}: X={vertex.x || 'N/A'}, Y={vertex.y || 'N/A'}
            </Text>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// Estilos usando StyleSheet.create
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1a202c', // Cor de fundo principal
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 20,
    color: '#93c5fd', // Cor azul clara
    textAlign: 'center',
  },
  verticesContainer: {
    width: '100%',
    maxWidth: 600, // Limita a largura em telas maiores
  },
  inputContainerWrapper: {
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 8,
    padding: 15,
    backgroundColor: '#000', // Fundo preto para cada cartão de entrada
    alignItems: 'center',
    width: '100%',
    shadowColor: '#000', // Sombra para dar profundidade
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8, // Para Android
  },
  inputTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  outerInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  singleInputGroup: {
    flex: 1,
    alignItems: 'center',
    gap: 6,
    marginHorizontal: 5,
  },
  inputText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
  },
  textInput: {
    color: 'white',
    borderColor: 'white',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 8,
    width: '100%',
    borderRadius: 8,
    backgroundColor: '#333', // Fundo mais escuro para o input
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 30,
    gap: 15, // Espaçamento entre os botões
    width: '100%',
    justifyContent: 'center',
  },
  addButton: {
    backgroundColor: '#2563eb', // Azul escuro
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  removeButton: {
    backgroundColor: '#dc2626', // Vermelho
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  displayContainer: {
    backgroundColor: '#1f2937', // Fundo cinza escuro
    padding: 20,
    borderRadius: 10,
    width: '100%',
    maxWidth: 600,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  displayTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#93c5fd',
  },
  displayText: {
    color: '#e2e8f0', // Texto cinza claro
    fontSize: 16,
    marginBottom: 5,
  },
});

export default App;
