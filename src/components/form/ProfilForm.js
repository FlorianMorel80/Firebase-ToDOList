// *************** React Components*****************************
import React, {useState, useContext, useEffect} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { Avatar } from 'react-native-elements';

// import ReactNativeBiometrics from 'react-native-biometrics'
import CameraRolling from '../CameraRoll';

import {
  ScrollView,
  Text,
  StyleSheet,
  Modal,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Picker} from '@react-native-picker/picker';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
// import Input from "@material-ui/core/Input";
import * as yup from 'yup';

// import {AuthContext} from '../../redux/contexts/AuthContext';
// import { getApp } from '../../database/realmApp';
// import openRealm from '../../database/openRealm';
// import { ObjectId } from 'bson';
// *************************************************************

// ----------------------------REGEX--------------------------------
const REGEXP_PASSWORD =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
//-------------------------- END OF REGEX---------------------------

const schema = yup.object().shape({
  // EMAIL
  email: yup
    .string()
    .email("L'adresse mail est incorrecte")
    .required('Ce champs est requis'),

  // PASSWORD
  password: yup
    .string('Doit contenir des lettres')
    .matches(
      REGEXP_PASSWORD,
      'Le mot de passe doit contenir : \n 8 caractères, \n 1 majuscule, \n 1 minuscule \n 1 caractère spéciale \n 1 numéro"',
    )
    .required('Ce champs est requis'),

});

const LoginForm = ({navigation}) => {
  const {
    control,
    handleSubmit,
    value,
    setValue,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  });


  const {signIn} = useContext(AuthContext);

  async function onSignIn(data) {
    console.log(data);
    signIn(data);
  }

  //*********/ Afficher ou cacher le mot de passe********
  const [hidePass, setHidePass] = useState(true);
  const [hidePass2, setHidePass2] = useState(true);
  // ****************************************************
  const [passwordVerify, setPasswordVerify] = useState(null);
  const [showRegex, setShowRegex] = useState(false);

//   const validateVerifyPWD = password => {
//     if (password !== passwordVerify && passwordVerify == null) {
//       setPasswordVerify(true);
//       console.log('bad');
//     } else {
//       setPasswordVerify(false);
//       console.log('good ');
//     }
//     console.log(passwordVerify);
//   };

  function onSubmit(value) {
    console.log(value);
  }


// ---------------OPTIONS POUR L'AJOUT D'IMAGE----------------
    const [modalVisible, setModalVisible] = useState(false);
    const [avatar, setAvatar] = useState(undefined);
  useEffect(()  => {
   
    // 
    (async () => {
      const app = getApp();
      const realm = await openRealm();
      let user = realm.objectForPrimaryKey('User', ObjectId(app.currentUser.id));
    setAvatar(user.avatar)
    console.log(user.avatar);
    })()
    
  },[])

   const captureImage = {
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 550,
      quality:1,
      cameraType: 'front',
      saveToPhotos: true, 
  };


  const addImage = async (img) => {
    if(img.assets != undefined){
      const uri = img.assets[0].uri 
      setAvatar(uri);
      const app = getApp();
      const realm = await openRealm();
      const user = realm.objectForPrimaryKey('User', ObjectId(app.currentUser.id))
      realm.write(() => {
        user.avatar = uri;
      })
    }

    console.log(img);
  }

  const chooseFile =  {
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
  };
//--------------------------------------------------------------

// Ajout de la clé d'authentification TOUCH ID / Biometrics
// --------------------------------------------------------

  return (

    <>
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.upload}
        onPress={() => launchCamera(captureImage, addImage)}>
        <Icon name="add" style={{alignSelf:'center'}} size={60} color={'grey'} />
        <Text
          style={{
            textAlign: 'center',
            justifyContent: 'flex-end',
            fontWeight: 'bold',
            color: 'grey',
          }}>
          Prendre photo
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.upload}
        onPress={() => launchImageLibrary(chooseFile, addImage)}>
        <Icon name="add" style={{alignSelf:'center'}} size={60} color={'grey'} />
        <Text
          style={{
            textAlign: 'center',
            justifyContent: 'flex-end',
            fontWeight: 'bold',
            color: 'grey',
          }}>
          Choisir image
        </Text>
      </TouchableOpacity>
      </View>
      </View>
  </Modal>
    <ScrollView>
      <View style={styles.background}>
        <View style={styles.container}>
        <Text style={{fontWeight:'bold', fontSize:24, color: 'white'}}>PROFIL</Text>
        {avatar == undefined ? 
        <View style={{flexDirection: 'row',}}>
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.upload}
              onPress={() => setModalVisible(true)}
              
            >
              <Icon name="add" style={{alignSelf:'center'}} size={60} color={'grey'} />
              <Text
                style={{
                  textAlign: 'center',
                  justifyContent: 'flex-end',
                  fontWeight: 'bold',
                  color: 'grey',
                }}>
                Choisir image
              </Text>
            </TouchableOpacity>
          </View>
          : 
          <Avatar
            rounded
            size='xlarge'



            
            source={{
              uri:avatar,
            }}>
            <Avatar.Accessory 
            onPress={() => setModalVisible(true)}
            size={50}
            />
          </Avatar>} 
          {/* ************************* MAIL ************************ */}
          <View style={styles.emailBox}>
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={text => onChange(text)}
                  placeholder={'email'}
                  value={value}
                />
              )}
              name="email"
              defaultValue="user80@hotmail.fr"
            />
          </View>
          {errors.email?.message ? (
            <Text style={styles.error}>{errors.email?.message}</Text>
          ) : null}
          {/* **************************************************** */}

          {/* ************************* PASSWORD ************************ */}
          <View style={styles.passwordBox}>
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  onBlur={() => {
                    setShowRegex(false);
                    onBlur;
                  }}
                  onFocus={() => setShowRegex(true)}
                  style={{width: '90%'}}
                  onChangeText={text => onChange(text)}
                  placeholder={'Mot de passe'}
                  secureTextEntry={hidePass ? true : false}
                  value={value}
                />
              )}
              name="password"
              defaultValue="Abcdef1!"
            />
            <Icon
              name={hidePass ? 'eye-off' : 'eye'}
              size={20}
              color="#4B6D72"
              onPress={() => setHidePass(!hidePass)}
            />
          </View>
          {showRegex ? (
            <Text style={{textAlign: 'center', width: '80%'}}>
              Le mot de passe doit contenir au moins 8 Caractères (dont 1
              Majuscule, 1 Minusucle, 1 Caractère spécial et 1 Numéro)
            </Text>
          ) : null}
          {errors.password?.message ? (
            <Text style={styles.error}>{errors.password?.message}</Text>
          ) : null}
          {/* ********************************************************* */}


          {/* ************************* BUTTON ************************ */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleSubmit(onSignIn)()}>
            <Text style={styles.title}>Modififier mes informations</Text>
          </TouchableOpacity>
        </View>
      </View>
      <CameraRolling />
    </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    height:'100%',
    width:'100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    // backgroundColor: '#FEFEFE',
    padding: 5,
    width: '97%',
    marginTop: '20%',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  image: {
    flex: 1,
    height: 200,
    width: 200,
    borderRadius:200
  },
  emailBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    margin: 10,
    width: '80%',
    marginTop:'20%',
    paddingHorizontal: 20,
    backgroundColor: 'rgba(999,999, 999, 0.8)',
    elevation: 2,
  },
  passwordBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 20,
    margin: 8,
    width: '80%',
    marginVertical:'10%',
    paddingHorizontal: 20,
    backgroundColor: 'rgba(999,999, 999, 0.8)',
    elevation: 2,
  },
  error: {
    color: 'red',
  },
  button: {
    flex: 1,
    width: 190,
    height: 40,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#4746C3',
    borderRadius: 25,
    margin: 10,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  loginText: {
    flexDirection: 'row',
  },
});

export default LoginForm;
