import React from "react";
import PropTypes from "prop-types";

export default function Select(props) {
  const { label, onChange, value, options } = props;
  return (
    <div className="filter-drop">
      <label className="filter-loc">{label}</label>
      <select value={value} onChange={(e)=>{onChange(e.target.value)}} className="dropdown">
        {options.map((val) => {
          return <option key={val}>{val}</option>;
        })}
      </select>
    </div>
  );
}
Select.propTypes={
    label:PropTypes.string,
    onChange:PropTypes.func.isRequired,
    value:PropTypes.any,
    options:PropTypes.array
}
