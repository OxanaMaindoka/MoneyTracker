import React from 'react';
import {ScrollView, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {Button, Gap, PageHeader, TextInput} from '../../components';

const SignUp = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <PageHeader label="Sign Up" backButton={false} />
      <Gap height={24} />
      <View style={styles.contentWrapper}>
        <Gap height={24} />
        <View style={styles.photoContainer}>
          <View style={styles.photoBorder}>
            <TouchableOpacity style={styles.addPhotoButton}>
              <Text>Add</Text>
              <Text>Photo</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TextInput
          label="Full Name"
          placeholder="Type your full name"
        />
        <Gap height={16} />
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
        />
        <Gap height={16} />
        <TextInput label="Password" placeholder="Type your password" />
        <Gap height={24} />
        <Button label="Continue" />
        <Gap height={12} />
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentWrapper: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    paddingHorizontal: 24,
  },
  photoContainer: {
    alignItems: 'center',
  },
  photoBorder: {
    borderStyle: 'dashed',
    borderWidth: 4,
    borderColor: '#F0F0F0',
    width: 110,
    height: 110,
    borderRadius: 100/2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addPhotoButton: {
    backgroundColor: '#F0F0F0',
    width: 90,
    height: 90,
    borderRadius: 100/2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
