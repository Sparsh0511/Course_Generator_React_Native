import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from '../constant/Colors'
import { useRouter } from "expo-router";
export default function Index() {

  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.WHITE
      }}
    >
      
      <Image  source={require('./../assets/images/landing.png')}
      style = {
        {
          width: '100%',
          height: 300,
          marginTop: 70
        }
      }
      />

      <View
      style = {{
        padding: 25,
        backgroundColor: Colors.PRIMARY,
        height: '100%',
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35
      }}
      >

        <Text
        style = {{
          fontSize: 30,
          fontFamily: 'jose_bold',
          color: Colors.WHITE,
          textAlign: 'center'
        }}
        >Welcome to My App</Text>

        <Text
        style = {{
          fontSize: 20,
          color: Colors.WHITE,
          fontFamily: 'jose_medium',
          textAlign: 'center',
          marginTop: 18
        }}
        >
          Transform your ideas into engaging educational content, effortlessly with AI 📚🎓
        </Text>

          <TouchableOpacity style={styles.button}  
          onPress={()=>{router.push('/auth/signUp')}}
          >
            <Text  style={[styles.buttonText, {color: Colors.PRIMARY}]}  >Get Started</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, {backgroundColor: Colors.PRIMARY, borderWidth: 1, borderColor: Colors.WHITE}]}
          onPress={()=>{router.push('/auth/signIn')}}
          >
            <Text  style={[styles.buttonText, {color: Colors.WHITE}]}  >Already have an account?</Text>
          </TouchableOpacity>

      </View>

    </View>
  );
}


const styles = StyleSheet.create({
  button:{
    backgroundColor: Colors.WHITE,
    padding: 15,
    borderRadius: 10,
    marginTop: 20
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'jose_regular'
  }
})