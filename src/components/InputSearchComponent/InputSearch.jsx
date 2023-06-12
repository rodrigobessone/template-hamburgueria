import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import StyledInputSearch from './StyledInputSearch';
import { useState } from 'react';

function InputSearch({ handleSearch }) {
  function handleChange(event) {
    const searchText = event.target.value;
    handleSearch(searchText);
  };

  return (
    <StyledInputSearch
      type="text"
      placeholder="Digite sua pesquisa"
      onChange={handleChange}
    />
  );
}

export default InputSearch;


