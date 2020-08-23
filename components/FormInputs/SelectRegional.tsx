import React from 'react';
import { Select, SelectItem, Text, Icon, IndexPath } from '@ui-kitten/components';
import { View, StyleProp, ViewStyle } from 'react-native';
import CreciHelper from '../../helpers/CreciHelper';

function SelectRegional({onSelect, style, label, placeholder} : {onSelect?: (regionalId:number) => void, style?: StyleProp<ViewStyle>, label?: string, placeholder?: string}) {
  //States
  const [regional, setRegional] = React.useState();

  //Properties
  const regionais = CreciHelper.regionais.map(r => ({id: r.id, texto: r.id + 'º' + ' - ' + r.ufExtenso.toUpperCase()}));

  //Methods
  const updateRegional = (index: IndexPath | IndexPath[]) => {
    setRegional(index);
    if (onSelect !== undefined && regional) onSelect(regionais[regional.row].id);
  };

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
    <Select
      label={label ? label : 'Regional'}
      placeholder={placeholder ? placeholder : 'Selecione o CRECI'}
      selectedIndex={regional}
      onSelect={index => updateRegional(index)}
      value={regional ? regionais[regional.row].texto : undefined}
      caption={!regional ? undefined : (CreciHelper.utilizaConselhoNet(regionais[regional.row].id) ? undefined : mensagemCompatibilidadeParcial)}
      style={style}
    >
      {regionais.map(r => <SelectItem title={r.texto} key={r.id}/>)}
    </Select>
  );
}

export default SelectRegional;