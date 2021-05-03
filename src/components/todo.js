import React, { useState, useEffect } from 'react';
import "../App.css"

const getLocalItems = () => {
    let list = localStorage.getItem('lists');
    if (list) {
        return JSON.parse(localStorage.getItem('lists'));
    }
    else {
        return [];
    }
}

const Todo = () => {

    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState(getLocalItems());

    const addItem = () => {
        if (!inputData) {

        }
        else{
        setItems([...items, inputData]);
        setInputData('')
        }
    }
    const deleteItem = (id) => {
        const updateditems = items.filter((elem, ind) => {
            return ind !== id;
        });

        setItems(updateditems);
    }

    const removeAll = () => {
        setItems([]);
    }

    useEffect(() => {
        localStorage.setItem('lists', JSON.stringify(items))
    }, [items]);

    return (
        <>
            <div className = "main-div">
                <div className = "child-div">
                    <figure>
                    <figcaption>
                        Add Your List Here
                    </figcaption>
                    </figure>
                    <div className = "addItem">
                        <input type = "text" placeholder = "Add Items.."
                            value = {inputData}
                            onChange = {(e) => setInputData(e.target.value)}
                        />
                        <i className="fa fa-plus add-btn" title = "Add Item" onClick={addItem}> </i>
                    </div>
                    <div className = "showItems">
                        {
                            items.map((elem, ind) => {
                                return(
                                    <div className = "eachItem" key = {ind}>
                                        <h3>{ elem }</h3>
                                        <i className="far fa-trash-alt add-btn" title = "Delete Item" onClick = {() => deleteItem(ind)}></i>
                                    </div>
                                )

                            })
                        }
                        
                    </div>
                    <div className= "showItems">
                        <button className="btn effect04" data-sm-link-text="Remove All" onClick= {removeAll}><span>CHECKLIST</span></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo