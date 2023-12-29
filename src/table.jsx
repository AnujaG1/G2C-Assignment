import React, {useState} from 'react';


const ShowTable = () => {
    const[buttonClicked, setButtonClicked] = useState(false);

    const handleClick = () => {
        setButtonClicked(true);
    };
    const renderTable = () => {
    const data = [
        { category: "Fruits", price: "$1", stocked: "yes", name: "Apple" },
         { category: "Fruits", price: "$1", stocked: "yes", name: "Dragonfruit" },
         { category: "Fruits", price: "$2", stocked: "no", name: "Passionfruit" },
         { category: "Vegetables", price: "$2", stocked: "yes", name: "Spinach" },
         { category: "Vegetables", price: "$4", stocked: "no", name: "Pumpkin" },
         { category: "Vegetables", price: "$1", stocked: "yes", name: "Peas" }
       ];
       
       return ( 
       <table>
    <thead>
        <tr id = "row">
           <th>Category</th> 
           <th>Price</th>
           <th>Stocked</th>
           <th>Name</th>
        </tr>
    </thead>
    <tbody>
        {data.map(item => (
            <tr key= {item.index}>
                <td>{item.category}</td>
                <td>{item.price}</td>
                <td>{item.stocked}</td>
                <td>{item.name}</td>
            </tr>
        ))}
    </tbody>
</table>
       );
    };
    return (
        <body>
        <div>
            <h1> My Component </h1>
            <button onClick={handleClick} disabled={buttonClicked} >
        {buttonClicked ? 'Button Clicked!' : 'Click me'}
      </button>
      {buttonClicked && renderTable()}
        </div>
        </body>
    );
};


export default ShowTable