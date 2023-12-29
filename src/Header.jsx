import React from 'react';


const Header = (props) => {
    return(
        
        <header id = 'header'>
          
            <h2>{props.title}</h2>
        </header>
    );
};


export default Header