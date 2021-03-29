import react, { useState } from "react";



const App = () =>{

const [initialItem,SetItem] = useState("");
const ItemSet = (event) =>{
    SetItem(event.target.value);
};

const [itemlist,SetItemList] = useState([]);
const addItemlist = () =>{
    SetItemList((oldItemlist)=>{
        return [...oldItemlist,initialItem];
    });
    SetItem('')
};


return (
<>
<div>
<h1>Todo List</h1>
<br/>
<input type="text" placeholder="Enter Item" onChange={ItemSet} value={initialItem
}/>
<button onClick={addItemlist}>+</button>
<br/>
</div>
<div>
    <ol>
    {
        itemlist.map((itemval) => {
           return <li>{itemval}</li>
        })
    }
       
    </ol>
</div>
</>
);
}

export default App;

