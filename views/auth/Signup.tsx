import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Layout, Card, Text, Button } from '@ui-kitten/components';
import { FontAwesome5 } from '@expo/vector-icons';
import { SelectRegional, InputCpf, InputSenha } from '../../components/FormInputs';

function Signup() {
  return (
    <Layout level='3' style={styles.container}>
      <Card status='success' style={styles.card}>
        <View style={styles.cardBody}>
          <FontAwesome5 name="user-tie" size={48} color="#00e095"/>
          <Text category='h6'>Nova conta</Text>
          <SelectRegional style={styles.input}/>
          <InputCpf style={styles.input}/>
          <InputSenha style={styles.input}/>
          <InputSenha style={styles.input} label='Retira a senha' placeholder=''/>
          <Button status='success' size='small' style={[styles.buttons, {marginBottom: 8}]}>CRIAR</Button>
          <Button status='basic' size='small' style={[styles.buttons, {marginBottom: 8}]} appearance='outline'>VOLTAR</Button>
        </View>
      </Card>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: 320,
    maxWidth: '90%',
  },
  cardBody: {
    alignItems: 'center',
  },
  input: {
    width: '100%',
    marginBottom: 16,
  },
  buttons: {
    width: '100%',
  },
});

export default Signup;