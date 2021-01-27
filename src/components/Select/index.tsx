import React, { useRef, useEffect } from 'react';
import Select, { OptionTypeBase, Props as SelectProps } from 'react-select';
import { useField } from '@unform/core';

interface Props extends SelectProps<OptionTypeBase> {
  name: string;
}

const CustomSelect: React.FC<Props> = ({ name, ...rest }) => {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: (ref: any) => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return [];
          }
          return ref.state.value.map((option: OptionTypeBase) => option.value);
        }
        if (!ref.state.value) {
          return '';
        }
        return ref.state.value.value;
      },
    });
  }, [fieldName, registerField, rest.isMulti]);

  return (
    <Select
      defaultValue={defaultValue}
      ref={selectRef}
      classNamePrefix="react-select"
      {...rest}
    />
  );
};

export default CustomSelect;
