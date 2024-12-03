import React from 'react';
import { Select } from 'antd';

const SelectComponent = () => {
  const { Option } = Select;
  return (
    <Select style={{ width: 200 }} placeholder="Birini tanlang">
      <Option value="option1">Option 1</Option>
      <Option value="option2">Option 2</Option>
      <Option value="option3">Option 3</Option>
    </Select>
  );
};

export default SelectComponent;
