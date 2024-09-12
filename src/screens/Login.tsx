import { ImageBackground, KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import { styles } from '../styles/styles';

export default function Login(){
  return(
    <ImageBackground
      source={require('../assets/images/bg-white.png')}
      style={styles.bkgd}>
        <KeyboardAvoidingView>
          <View>
            <Text>Login</Text>
            <Text>Olá, bom ver você novamente</Text>
          </View>
        </KeyboardAvoidingView>
    </ImageBackground>
  )
}



/*  <Stack>
       <Stack.Screen name='login' options={{ title: 'Login' }}/>
    </Stack>  */