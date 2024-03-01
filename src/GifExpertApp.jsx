import React, { useState } from 'react'
import './styles.css'
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {
    
    const [Categories, setCategories] = useState(['Gantz']);

    const onAddCategory=(newCategory)=>{
      if (Categories.includes(newCategory)){
        return
      }
        setCategories([newCategory, ...Categories]);
    }
  return (
    <>
        {/*titulo*/}
        <h1>GifExpertApp</h1>

        {/*Input*/}
        <AddCategory 
          //setCategories={setCategories}
          onNewCategory={(event) => onAddCategory(event)}
          />
      
     
        
        {
          Categories.map((category) => (
              <GifGrid 
              key={category} 
              category={category}/>
            )
          )
          }
     
      
    </>
  )
}
