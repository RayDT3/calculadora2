import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handlePress = (value) => {
    if (value === "=") {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {
      setInput("");
      setResult("");
    } else {
      setInput(input + value);
    }
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text style={styles.title}>Calculadora</Text>
        <View style={styles.display}>
          <Text style={styles.input}>{input}</Text>
          <Text style={styles.result}>{result}</Text>
        </View>
        <View style={styles.buttonsContainer}>
          {[
            "7", "8", "9", "/",
            "4", "5", "6", "*",
            "1", "2", "3", "-",
            "C", "0", "=", "+"
          ].map((button) => (
            <TouchableOpacity key={button} style={styles.button} onPress={() => handlePress(button)}>
              <Text style={styles.buttonText}>{button}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.functionContainer}>
          {[
            "sin", "cos", "tan", "sqrt",
            "ln", "log", "exp", "pi"
          ].map((func) => (
            <TouchableOpacity key={func} style={styles.funcButton} onPress={() => handlePress(func)}>
              <Text style={styles.funcButtonText}>{func}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#ffffff',
  },
  display: {
    width: '90%',
    backgroundColor: '#333333',
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    alignItems: 'flex-end',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  input: {
    fontSize: 36,
    textAlign: 'right',
    color: '#ffffff',
  },
  result: {
    fontSize: 28,
    textAlign: 'right',
    color: '#7c7c7c',
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '90%',
    justifyContent: 'center',
    marginTop: 10,
  },
  button: {
    width: '22%',
    margin: '1%',
    backgroundColor: '#1e88e5',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 6,
  },
  buttonText: {
    fontSize: 26,
    color: '#ffffff',
  },
  functionContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '90%',
    justifyContent: 'center',
    marginTop: 15,
  },
  funcButton: {
    width: '22%',
    margin: '1%',
    backgroundColor: '#d32f2f',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 6,
  },
  funcButtonText: {
    fontSize: 20,
    color: '#ffffff',
  },
});
