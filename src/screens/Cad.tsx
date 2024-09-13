import { ImageBackground, KeyboardAvoidingView, StyleSheet, Text, TextInput, View, TouchableOpacity, Pressable, Platform, ScrollView, TouchableWithoutFeedback} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import { styles } from '../styles/styles';

export default function Cad(){
  return(
    <KeyboardAvoidingView  
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    keyboardVerticalOffset={Platform.select({ ios: 60, android: 80 })} // ajustar
    style={{ flex: 1 }}>

    <ScrollView style={{flex: 1}}
    showsHorizontalScrollIndicator={false}>

    <ImageBackground
      source={require('../assets/images/bg-white.png')}
      style={styles.bkgd}>

        <View className=" bg-blue-III h-24 shadow-slate-300 items-center justify-between flex flex-row">
            <Pressable className="w-14 h-14 mt-9 ml-2 rounded-full flex justify-center items-center ">
              <Ionicons title="home" size={33} style={{ color: 'white' }}></Ionicons>
            </Pressable>
        </View>


        <View>
            <View>
              <Text>Cadastro</Text>

              <Text>Seja bem vindo, crie uma conta</Text>
            </View>
        </View>

        <View>
            <Text>Escolha uma opção. Você é:</Text>
            <Text>Contratante</Text>
            <Text>Motorista</Text>
        </View>


    </ImageBackground>
    </ScrollView>
    </KeyboardAvoidingView>
  )
}



/*  <Stack>
       <Stack.Screen name='login' options={{ title: 'Login' }}/>
    </Stack>  */