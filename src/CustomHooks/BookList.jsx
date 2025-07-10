import React from 'react';
import useSearchFilter from './useSearchFilter';
import {useState} from 'react'
function BookList() {

const[items, setItems] =  useState([{name: 'Abay zholy'}, {name: 'Titanik'} ])

  const{search, setSearch, filteredItems} =  useSearchFilter(items)
  
  return(
    <div>
      <input type="" name="" onChange={(e)=> setSearch(e.target.value)}/>
    {
      filteredItems.map((item)=> {
       return(
        <p>{item.name}</p>
       )
      })
    }
    </div>
  )
}

export default BookList;

// ClothesList  = {name: 't-shirt', brand: 'puma', price}