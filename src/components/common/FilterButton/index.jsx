import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const FilterButton = ({ handleSelect, selectedItem }) => {
  return (
    <div className="flex justify-center items-center">
      <DropdownButton
        id="dropdown-basic-button"
        title={selectedItem}
        onSelect={handleSelect}
        className="bg-blue-500 text-white rounded-md shadow-md"
      >
        <Dropdown.Item eventKey="HomeWorld">HomeWorld</Dropdown.Item>
        <Dropdown.Item eventKey="Films">Films</Dropdown.Item>
        <Dropdown.Item eventKey="Species">Species</Dropdown.Item>
      </DropdownButton>
    </div>
  );
};

export default FilterButton;
