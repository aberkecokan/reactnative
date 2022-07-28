import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { Button } from 'react-native';


export default function App() {


  return (
    <View style={styles.container}>
      <TouchableOpacity

        style={styles.buton}
        onPress={() => Alert.alert("Giriş için Facebook'a Yönlendiriliyorsunuz")}
       
      >
        <Image
          style={styles.resim}
          source={require('./assets/facebook.png')}

        >

        </Image>


      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buton2}
        onPress={() => Alert.alert("Giriş için Google'a Yönlendiriliyorsunuz")}
      >
        <Image
          style={styles.resim}
          source={require('./assets/google.png')}
        >

        </Image>

      </TouchableOpacity>

    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    alignItems:"center",
    backgroundColor: '#ffffff',
    justifyContent:"center"
    


  },
  buton: {
    
    marginBottom:20,
    width: 300,
    height: 50,
    backgroundColor: "#DDDDDD",


  },
  buton2: {
   
    width: 300,
    height: 50,
    backgroundColor: "#DDDDDD",

  },
  resim: {
    height: "100%",
    width: "100%",
  }

});
