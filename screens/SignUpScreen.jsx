import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  ActivityIndicator,
  Alert,
  Platform,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';

import { auth, createUserProfileDocument } from '../firebase/firebase';

import CustomButton from '../components/CustomButton';
import DefaultText from '../components/DefaultText';
import Colours from '../constants/colours';
import OpenEyeIcon from '../assets/images/OpenEyeIcon';
import ClosedEyeIcon from '../assets/images/ClosedEyeIcon';

const SignUpScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showAsterisks, setShowAsterisks] = useState(true);
  const { handleSubmit, control, errors, reset, getValues } = useForm();

  const onSubmit = async ({ email, password, displayName }) => {
    setIsLoading(true);

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      reset();
      navigation.navigate('Account');
    } catch (error) {
      setIsLoading(false);
      Alert.alert('An Error Occurred!', error.message, [{ text: 'Okay' }]);
    }
  };

  const onChange = (arg) => {
    return {
      value: arg.nativeEvent.text,
    };
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={styles.screen}
    >
      <ScrollView contentContainerStyle={styles.scrollView}>
        <DefaultText style={styles.label}>Username</DefaultText>
        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
          name='displayName'
          rules={{
            required: { value: true, message: 'Display name is required' },
            minLength: {
              value: 2,
              message: 'Minimum 2 characters',
            },
          }}
          defaultValue=''
        />
        {errors.displayName && <Text>{errors.displayName.message}</Text>}

        <DefaultText style={styles.label}>Email</DefaultText>
        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
          name='email'
          type='email'
          rules={{
            required: { value: true, message: 'Email is required' },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Does not match email format',
            },
          }}
          defaultValue=''
        />
        {errors.email && <Text>{errors.email.message}</Text>}

        <DefaultText style={styles.label}>Password</DefaultText>
        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
                secureTextEntry={showAsterisks}
              />
              {showAsterisks ? (
                <OpenEyeIcon onPress={() => setShowAsterisks(false)} />
              ) : (
                <ClosedEyeIcon onPress={() => setShowAsterisks(true)} />
              )}
            </View>
          )}
          name='password'
          type='password'
          rules={{
            required: { value: true, message: 'Password is required' },
            minLength: {
              value: 5,
              message: 'Minimum 5 characters',
            },
          }}
          defaultValue=''
        />
        {errors.password && <Text>{errors.password.message}</Text>}

        <DefaultText style={styles.label}>Confirm password</DefaultText>
        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
                secureTextEntry={showAsterisks}
              />
              {showAsterisks ? (
                <OpenEyeIcon onPress={() => setShowAsterisks(false)} />
              ) : (
                <ClosedEyeIcon onPress={() => setShowAsterisks(true)} />
              )}
            </View>
          )}
          name='confirmPassword'
          type='password'
          rules={{
            required: { value: true, message: 'Please confirm password' },
            validate: (value) =>
              value === getValues('password') || "Passwords don't match",
            minLength: {
              value: 5,
              message: 'Minimum 5 characters',
            },
          }}
          defaultValue=''
        />
        {errors.confirmPassword && (
          <Text>{errors.confirmPassword.message}</Text>
        )}
        {isLoading ? (
          <ActivityIndicator
            size='large'
            color={Colours.accent}
            style={{ marginVertical: 30 }}
          />
        ) : (
          <CustomButton style={styles.button} onPress={handleSubmit(onSubmit)}>
            Sign up
          </CustomButton>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  scrollView: {
    width: '100%',
  },
  label: {
    margin: 20,
    marginLeft: 0,
  },
  input: {
    backgroundColor: 'white',
    height: 40,
    padding: 10,
    borderRadius: 5,
    flex: 1,
  },
  passwordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 5,
    paddingRight: 10,
    alignItems: 'center',
  },
  button: {
    width: '100%',
    marginTop: 30,
  },
});

export default SignUpScreen;
