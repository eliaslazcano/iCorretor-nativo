import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import { Layout, Card, Text, Select, SelectItem, Input, Icon, Button } from '@ui-kitten/components';
import Colibri from '../../assets/svg/colibri.svg';
import CreciHelper from '../../helpers/CreciHelper';
import { InputCpf, InputSenha, SelectRegional } from '../../components/FormInputs';

function Login() { //TODO => Realizar o Select do regional, utilizar o CreciHelper na tratativa.
  //States
  const [regional, setRegional] = React.useState();
  const [cpf, setCpf] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [hidePassword, setHidePassword] = React.useState(true);
  
  //Properties
  const regionais = CreciHelper.regionais.map(r => ({id: r.id, texto: r.id + 'º' + ' - ' + r.ufExtenso.toUpperCase()}));

  //SubComponents
  const mensagemCompatibilidadeParcial = () => (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Icon
        style={{height: 12, width: 12, marginRight: 4}}
        fill='#ffaa00'  
        name='alert-circle'
      />
      <Text style={{fontSize: 12, color: '#ffaa00'}}>Compatibilidade Parcial</Text>
    </View>
  );

  //View
  return (
    <Layout level='3' style={styles.container}>
      <Card status='primary' style={styles.card}>
        <View style={styles.cardBody}>
            <Colibri style={styles.colibri}/>
            <Text category='h6'>i-Corretor</Text>
            <SelectRegional
              onSelect={index => setRegional(index)}
              style={styles.input}
            />
            <InputCpf
              onChangeText={text => setCpf(text)}
              style={styles.input}
            />
            <InputSenha
              onChangeText={text => setPassword(text)}
              style={styles.input}
            />
            <Button status='primary' size='small' style={[styles.buttons, {marginBottom: 8}]}>ACESSAR</Button>
            <Button status='basic' size='small' style={[styles.buttons, {marginBottom: 8}]} appearance='outline'>ESQUECI MINHA SENHA</Button>
            <Button status='basic' size='small' style={styles.buttons} appearance='outline'>NÃO TENHO CONTA</Button>
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
  colibri: {
    width: 96,
    height: 96,
  },
  input: {
    width: '100%',
    marginBottom: 16,
  },
  buttons: {
    width: '100%',
  }
});

export default Login;
