import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import { Layout, Card, Text, Select, SelectItem, Input, Icon, Button } from '@ui-kitten/components';
import Colibri from '../../assets/svg/colibri.svg';
import CreciHelper from '../../helpers/CreciHelper'
import IMask from 'imask';

function Login() { //TODO => Realizar o Select do regional, utilizar o CreciHelper na tratativa.
  //States
  const [regional, setRegional] = React.useState();
  const [cpf, setCpf] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [hidePassword, setHidePassword] = React.useState(true);

  //Refs
  let refInputCpf: Input | null = null;
  
  //Properties
  let cpfUnmasked = '';
  const regionais = CreciHelper.regionais.map(r => ({id: r.id, texto: r.id + 'º' + ' - ' + r.ufExtenso.toUpperCase()}));

  //Effects
  React.useEffect(() => {
    if (refInputCpf && cpf) {
      const masked = IMask.createMask({
        mask: '000.000.000-00',
      });
      const maskedValue = masked.resolve(cpf);
      if (cpf !== maskedValue) {
        setCpf(maskedValue);
        cpfUnmasked = masked.unmaskedValue;
      }
    }
  }, [cpf]);

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
            <Select
              label='Regional'
              placeholder='Selecione o CRECI'
              selectedIndex={regional}
              onSelect={index => setRegional(index)}
              value={regional ? regionais[regional.row].texto : undefined}
              caption={!regional ? undefined : (CreciHelper.utilizaConselhoNet(regionais[regional.row].id) ? undefined : mensagemCompatibilidadeParcial)}
              style={styles.input}
            >
              {regionais.map(r => <SelectItem title={r.texto} key={r.id}/>)}
            </Select>
            <Input
              label='CPF'
              placeholder='Insira seu CPF'
              onChangeText={text => setCpf(text)}
              value={cpf}
              ref={el => refInputCpf = el}
              style={styles.input}
              keyboardType='numeric'
            />
            <Input
              label='Senha'
              placeholder='Insira sua senha'
              onChangeText={text => setPassword(text)}
              autoCapitalize='none'
              autoCorrect={false}
              secureTextEntry={hidePassword}
              accessoryRight={(props) => (
                <TouchableWithoutFeedback onPress={() => setHidePassword(!hidePassword)}>
                  <Icon {...props} name={hidePassword ? 'eye-off' : 'eye'}/>
                </TouchableWithoutFeedback>
              )}
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
