import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
  Platform,
  ActivityIndicator,
  Modal,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';

import CustomButton from '../components/CustomButton';
import DefaultText from '../components/DefaultText';
import SendIcon from '../assets/images/SendIcon';
import Colours from '../constants/colours';

const ContactScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const { handleSubmit, control, errors, reset } = useForm();

  const onSubmit = async () => {
    setIsLoading(true);
    try {
      setTimeout(() => {
        reset();
        setModalVisible(true);
        setIsLoading(false);
        setTimeout(() => {
          setModalVisible(false);
          navigation.pop();
        }, 1500);
      }, 1500);
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
        <DefaultText style={styles.label}>Full name</DefaultText>
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
          name='fullName'
          rules={{
            required: { value: true, message: 'Full name is required' },
            minLength: {
              value: 3,
              message: 'Minimum 3 characters',
            },
          }}
          defaultValue=''
        />
        {errors.fullName && <Text>{errors.fullName.message}</Text>}

        <DefaultText style={styles.label}>Phone number</DefaultText>
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
          name='phoneNumber'
          type='tel'
          rules={{
            required: { value: true, message: 'Phone number is required' },
            minLength: {
              value: 6,
              message: 'Minimum 6 digits',
            },
            maxLength: {
              value: 14,
              message: 'Maximum 14 digits',
            },
          }}
          defaultValue=''
        />
        {errors.phoneNumber && <Text>{errors.phoneNumber.message}</Text>}

        <DefaultText style={styles.label}>Message</DefaultText>
        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
                multiline
                numberOfLines={5}
                textAlignVertical='top'
              />
            </View>
          )}
          name='message'
          type='text'
          rules={{
            required: { value: true, message: 'Message is required' },
            minLength: {
              value: 5,
              message: 'Minimum 5 characters',
            },
            maxLength: {
              value: 200,
              message: 'Maximum 200 characters',
            },
          }}
          defaultValue=''
        />
        {errors.message && <Text>{errors.message.message}</Text>}

        {isLoading ? (
          <ActivityIndicator
            size='large'
            color={Colours.accent}
            style={{ marginVertical: 30 }}
          />
        ) : (
          <CustomButton style={styles.button} onPress={handleSubmit(onSubmit)}>
            <View style={styles.buttonContent}>
              <SendIcon />
              <DefaultText style={styles.buttonText}>Send message</DefaultText>
            </View>
          </CustomButton>
        )}

        <Modal animationType='slide' transparent={true} visible={modalVisible}>
          <View style={styles.modalView}>
            <DefaultText>Message sent</DefaultText>
          </View>
        </Modal>
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
    minHeight: 40,
    padding: 10,
    borderRadius: 5,
    flex: 1,
  },
  button: {
    width: '100%',
    marginTop: 30,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 22,
    marginLeft: 10,
  },
  modalView: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colours.accent,
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 10,
  },
});

export default ContactScreen;
