import React from 'react';
import { Input, Icon } from '@ui-kitten/components';
import { StyleProp, ViewStyle, TouchableWithoutFeedback } from 'react-native';

function InputSenha({onChangeText, style, label, placeholder} : {onChangeText?: (text:string) => void, style?: StyleProp<ViewStyle>, label?: string, placeholder?: string}) {
  //States
  const [password, setPassword] = React.useState('');
  const [hidePassword, setHidePassword] = React.useState(true);

  //Methods
  const updatePassword = (newPassword: string) => {
    setPassword(newPassword);
    if (onChangeText !== undefined) onChangeText(newPassword);
  };

  //View
  return (
    <Input
      label={label ? label : 'Senha'}
      placeholder={placeholder ? placeholder : 'Insira sua senha'}
      onChangeText={text => updatePassword(text)}
      autoCapitalize='none'
      autoCorrect={false}
      secureTextEntry={hidePassword}
      accessoryRight={(props) => (
        <TouchableWithoutFeedback onPress={() => setHidePassword(!hidePassword)}>
          <Icon {...props} name={hidePassword ? 'eye-off' : 'eye'}/>
        </TouchableWithoutFeedback>
      )}
      style={style}
    />
  );
}

export default InputSenha;