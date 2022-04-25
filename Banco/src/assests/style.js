import { StyleSheet } from "react-native";

const login = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      padding: 20
    },
    input: {
      height: 45,
      backgroundColor: '#66f',
      alignSelf: 'stretch',
      borderColor: '#eee',
      borderWidth: 1,
      paddingHorizontal: 20,
      marginBottom: 10,
    },
    button: {
      height: 45,
      backgroundColor: '#069',
      alignSelf: 'stretch',
      paddingHorizontal: 20,
      justifyContent: 'center',
      alignItems: 'center'
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold'
    }
  });


  export default login;