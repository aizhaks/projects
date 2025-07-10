import React, { useState } from 'react';

function useSearchFilter(items) {


  const[search, setSearch] =  useState('')


  const filteredItems =  items.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))


  return {search , setSearch, filteredItems}
}

export default useSearchFilter;
