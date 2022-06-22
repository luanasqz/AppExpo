import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Image, SafeAreaView, Pressable, Linking } from 'react-native';

const colorFontGithub = '#C9D1D9';
const ImageProfileGithub = 'https://avatars.githubusercontent.com/u/103594953?v=4';
const urlToMyGithub = 'https://github.com/luanasqz'; 

export default function App() {
  const HandlePressGoToGithub = async () => {
    console.log('Verificando link');
  const res =   await Linking.canOpenURL(urlToMyGithub);
  if(res){
    console.log('Link aprovado');
    console.log('Abrindo link.....');
  await Linking.openURL(urlToMyGithub);
  }

  };

  return (
      <SafeAreaView style={styles.container}>
    <View >
      <Image 
      accessibilityLabel='Luana Queiroz Star'
      style={styles.avatar} 
      source={{uri: ImageProfileGithub}}></Image>
      <Text accessibilityLabel='Name: Luana Sodário Queiroz' style={[styles.defaultText, styles.name]}> Luana Sodário Queiroz</Text>
      <Text accessibilityLabel= 'Nickname: luanasqz' style={[styles.defaultText, styles.nickname]}> luanasqz</Text>
      <Text accessibilityLabel= 'Descrição: Olá! Seja bem vindo a minha aplicação usando o app ExpoGo em reactive native, Atualmente estou fazendo cursos online, para adquirir conhecimentos na area da tecnologia. [Aluna na Dio!]' style={[styles.defaultText, styles.description]}>👋 Olá! Seja bem vindo a minha aplicação usando o app ExpoGo em reactive native,
      Atualmente estou fazendo cursos online, para adquirir conhecimentos na area da tecnologia. [Aluna na Dio!]</Text>
      
      <Pressable onPress={HandlePressGoToGithub}>   
      <View style={styles.button}>
        <Text style={[styles.defaultText, styles.textButton]}>Open in Github</Text>
      </View>
      </Pressable>
    <StatusBar style= 'light' />
    </View>
  </SafeAreaView>
  
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#010409',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 20,
    fontSize: 20,
    },
  
    avatar:{
      height: 200,
      width: 200,
      borderRadius:100,
      borderColor: 'white',
      borderWidth: 2, 
    },

    defaultText:{ 
      color: 'white',
      
      },

      name:{
        marginTop: 20, 
        fontSize: 24,
        fontWeight: 'bold',
    },

    nickname:{
      color: colorFontGithub,
      fontSize: 18,
    },

    description:{
      fontSize: 18,
      fontWeight: 'bold',
    },
    button:{
      marginTop: 20,
      backgroundColor: '#C9D1D9',
      borderRadius: 10,
      padding: 20,
    },

    textButton:{
      fontSize: 16,
      fontWeight: 'bold',
    },

  });


