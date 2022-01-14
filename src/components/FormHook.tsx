import React, {CSSProperties, Dispatch, SetStateAction, useState} from 'react';
import {TextInput, Text, StyleSheet, View} from 'react-native';

export function useTextInput(
  initialValue: string,
  label: string,
  placeholder: string,
  disabled: boolean,
  errorValue: string,
  style: object = {},
): [string, Dispatch<SetStateAction<string>>, React.ReactNode] {
  const showError = errorValue && errorValue !== '';
  const [selectedValue, setValue] = useState<string>(initialValue);
  const renderError = () => {
    if (showError) return <Text style={styles.errorText}>{errorValue}</Text>;
  };
  const renderLabel = () => {
    if (label !== '') return <Text style={styles.labelStyle}>{label}</Text>;
  };
  const component = (
    <>
      {renderLabel()}
      <TextInput
        style={[styles.inputFiled, style]}
        value={selectedValue}
        editable={disabled}
        placeholder={placeholder}
        onChangeText={value => setValue(value)}
      />
      {renderError()}
    </>
  );
  return [selectedValue, setValue, component];
}
const styles = StyleSheet.create({
  labelStyle: {
    color: '#595959',
    fontSize: 14,
    marginVertical: 8,
    marginHorizontal: 5,
  },
  errorText: {
    color: '#F5222D',
    fontSize: 12,
    marginHorizontal: 5,
  },
  inputFiled: {
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#eaeaea',
    alignSelf: 'stretch',
  },
});
