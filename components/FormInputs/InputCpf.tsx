import React from 'react';
import { Input } from '@ui-kitten/components';
import IMask from 'imask';
import { StyleProp, ViewStyle } from 'react-native';

function InputCpf ({onChangeText, style, label, placeholder} : {onChangeText?: (text:string) => void, style?: StyleProp<ViewStyle>, label?: string, placeholder?: string}) {
  //States
  const [cpf, setCpf] = React.useState('');

  //Methods
  const updateCpf = (newCpf: string) => {
    const mask = IMask.createMask({mask: '000.000.000-00'});
    const maskedValue = mask.resolve(newCpf);
    setCpf(maskedValue);
    if (onChangeText !== undefined) onChangeText(mask.unmaskedValue);
  };

  return (
    <Input
      label={label ? label : 'CPF'}
      placeholder={placeholder ? placeholder : 'Insira seu CPF'}
      onChangeText={text => updateCpf(text)}
      value={cpf}
      keyboardType='numeric'
      style={style}
    />
  );
};

export default InputCpf;