import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Layout, Card, Text, Button } from '@ui-kitten/components';
import { FontAwesome5 } from '@expo/vector-icons';
import { SelectRegional, InputCpf, InputSenha } from '../../components/FormInputs';

function Recover() {
  return (
    <Layout level='3' style={styles.container}>
      <Card status='warning' style={styles.card}>
        <View style={styles.cardBody}>
          <FontAwesome5 name="key" size={48} color="#ff9e05"/>
          <Text category='h6'>Recuperar senha</Text>
          <SelectRegional style={styles.input}/>
          <InputCpf style={styles.input}/>
          <InputSenha style={styles.input}/>
          <Button status='warning' size='small' style={[styles.buttons, {marginBottom: 8}]}>RECUPERAR</Button>
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

export default Recover;