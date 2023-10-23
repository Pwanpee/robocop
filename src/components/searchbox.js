import React from "react";

const Searchbox = ({searchfield, searchChange}) => {
    
   return(
       <div className="pa2">
        <input className="pa2 bg-lightest-blue ba b--green"
        //b-- means border color
         type="search" placeholder="search for robots" 
      onChange = {searchChange}
      />
       </div>
        
    )
}
export default Searchbox