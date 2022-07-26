import React from 'react'
import {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

  const [Categories, setCategories] = useState([
    'One Punch'
  ]); 

  const onAddCategory=(newCategory)=>{
    if(Categories.includes(newCategory)){
      return;
    }
    setCategories(
     [newCategory, ...Categories]);

  };

  return (
    <>
        <h1>GifExpertApp</h1>
        <span>Ingresar categoria</span>
       
        <AddCategory 
        
        // setCategories={setCategories}
        onNewCategory={(event) => onAddCategory(event)}
        />
      
          {
            Categories.map((category) => (<GifGrid key={category} category={category} />)) 
          }
      
    </>
  )
}
