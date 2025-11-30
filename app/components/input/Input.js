import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import React, { useState, useMemo, useEffect } from 'react';
import { styles } from './style';

const debounce = (func, delay = 300) => {
  let timeout;
  return (...args) => {
    if (typeof func !== 'function') return;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

export function Input({
  icon,
  placeholder,
  onChange,
  secure,
  pass,
  value,
  id,
  type,
  multiline,
  numberOfLines,
  keyType,
  editable,
  lengthNumber,
  textContentType,
  bottomText,
  lable,
  customStyle,
  customInputView,
  textAlignVertical,
  rightImg,
  rightPress,
  isDisable,
  topAlighn,
  err,
}) {
  const [isSecure, setIsSecure] = useState(secure);
  const [text, setText] = useState('');

  const debouncedOnChange = useMemo(() => debounce(onChange, 400), [onChange]);

  useEffect(() => {
    setText(value || '');
  }, [value]);

  const handleChange = val => {
    setText(val);
    debouncedOnChange(val);
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.mainView,
          customStyle,
          isDisable && { opacity: 0.5 },
          err && { borderColor: '#F01' },
        ]}
      >
        {icon && <Image source={icon} style={styles.icon} />}
        <TextInput
          style={[styles.input, customInputView]}
          autoCompleteType={'off'}
          placeholder={placeholder}
          placeholderTextColor="#546E7A"
          onChangeText={handleChange}
          secureTextEntry={isSecure}
          passwordRules={pass}
          value={text}
          id={id}
          type={type}
          multiline={multiline}
          numberOfLines={numberOfLines}
          keyboardType={keyType}
          editable={editable}
          maxLength={lengthNumber}
          textContentType={textContentType}
          textAlignVertical={textAlignVertical}
        />
        {rightImg && (
          <TouchableOpacity onPress={() => setIsSecure(prev => !prev)}>
            <Image
              source={rightImg}
              style={[styles.icon, isSecure && { tintColor: '#4A9FB4' }]}
            />
          </TouchableOpacity>
        )}
      </View>
      <Text style={styles.err}>{err || ' '}</Text>
    </View>
  );
}
