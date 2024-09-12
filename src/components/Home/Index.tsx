import { useNavigation } from 'expo-router';
import { View, Text, KeyboardAvoidingView, Image, ImageBackground, Pressable } from 'react-native';

export function Home(){
const navigation = useNavigation()

    return (
        <KeyboardAvoidingView  className='bg-blue-fundo h-full'>

            <View style={{flex: 1}} className='max-full mt-28 items-center'>

            <Image source={require("../../assets/images/Caminhao_0.png")} className='w-56 h-56' />

                <View className='mt-24 items-center'>
                    <Text style={{fontSize:32}} className='font-bold text-white'> Seja bem vindo(a)</Text>
                    <Text style={{fontSize:23, }} className='font-normal text-white mt-3'> Entre fazendo Login ou Cadastro</Text>
                </View>

                <View className='mt-24'>
                    <Pressable className="bg-green-lin-I w-72 h-12 rounded-full flex justify-center items-center hover:bg-green-II" >
                        <Text style={{fontSize:23}} className='text-white font-bold'>LOGIN</Text>
                    </Pressable>

                    <Pressable
                       // onPress={() => //navigation.navigate('')}
                        className=" mt-6 bg-green-lin-I w-72 h-12 rounded-full flex justify-center items-center hover:bg-green-II" >
                        <Text style={{fontSize:23}} className='text-white font-bold'>CADASTRO</Text>
                    </Pressable>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}
export default Home;
//<ImageBackground source={image} style={styles.image}>