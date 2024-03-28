import React from 'react';
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import {Button, Gap, PageHeader, TextInput, TextInputAT} from '../../components';

const CashonHand = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <PageHeader
        label="Cash On Hand"
        backButton
        onPress={() => navigation.goBack()}
      />
      <Gap height={24} />
      <View style={styles.contentWrapper}>
        <Gap height={24} />
        <TextInput label="Description" placeholder="Add teh description" />
        <Gap height={16} />
        <TextInput
          label="Type"
          placeholder="Debit/Credit"
        />
        <Gap height={16} />
        <Button
          label="Save"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </ScrollView>
  );
};

export default CashonHand;

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