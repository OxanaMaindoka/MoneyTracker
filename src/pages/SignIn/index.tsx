import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Gap, PageHeader, TextInput, TextInputAT} from '../../components';
import { BackButton } from '../../assets/icon';

const SignIn = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <PageHeader label="Sign In" backButton={false} />
      <Gap height={24} />
      <View style={styles.contentWrapper}>
        <Gap height={24} />
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
        />
        <Gap height={16} />
        <TextInput label="Password" placeholder="Type your password" />
        <Gap height={24} />
        <Button label="Sign In" onPress={() => navigation.navigate('Home')} />
        <Gap height={12} />
        <Button
          label="Create New Account"
          backgroundColor="#8D92A3"
          textColor="#FFFFFF"
          onSubmit={() => navigation.navigate('SignUp')}
        />
      </View>
    </ScrollView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentWrapper: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    paddingHorizontal: 24,
  },
});