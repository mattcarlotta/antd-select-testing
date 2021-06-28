import * as React from "react";
import { Select } from "antd";
import "./App.css";

const { Option } = Select;

const App = () => {
  const [value, setValue] = React.useState("lucy");

  const handleChange = (value) => {
    setValue(value);
  };

  return (
    <div className="app">
      <Select
        defaultValue={value}
        style={{ width: 120 }}
        onChange={handleChange}
      >
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="disabled" disabled>
          Disabled
        </Option>
        <Option value="Yiminghe">yiminghe</Option>
      </Select>
    </div>
  );
};

export default App;
