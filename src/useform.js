import { useState } from "react";
import React from "react";
import './App.css';

export function Userform(){
    const [content,setContect] = useState();
    const [selectedItem,setSelectedItem] = useState("Item 1");

    const handleSubmit=event=>{
        event.preventDefault();
        const msg=`You selected ${selectedItem} item,with value ${content}`;
        alert(msg);
    }
    return(
        <div>
            <form className="userform" onSubmit={handleSubmit}>
                <label>
                    Please select an item:
                    <select value={selectedItem} onChange={event=>setSelectedItem(event.target.value)}>
                    <option value="item1">Item 1</option>
                    <option value="item2">Item 2</option>
                    <option value="item3">Item 3</option>
                    </select>
                </label>
                <textarea value={content} onChange={event=>setContect(event.target.value)} placeholder="Please enter your feedback" required/>
                </form>
        </div>
    )
}