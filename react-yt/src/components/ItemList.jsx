import React, { useState } from "react";
import './ItemList.css'; // Import CSS file for styling

function ItemList() {
    // Sample data for items
    const [items] = useState([
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
        { id: 4, name: 'Item 4' },
        { id: 5, name: 'Item 5' },
        { id: 6, name: 'Item 6' },
        { id: 7, name: 'Item 7' },
        { id: 8, name: 'Item 8' },
        { id: 9, name: 'Item 9' },
        { id: 10, name: 'Item 10' },
        { id: 11, name: 'Item 11' },
        { id: 12, name: 'Item 12' },
        { id: 13, name: 'Item 13' },
        { id: 14, name: 'Item 14' },
        { id: 15, name: 'Item 15' },
        { id: 16, name: 'Item 16' },
        // Add more items as needed
    ]);

    // State to manage selected items
    const [selectedItems, setSelectedItems] = useState([]);

    const handleSelect = (item) => {
        setSelectedItems(prevSelectedItems =>
            prevSelectedItems.includes(item.id)
                ? prevSelectedItems.filter(id => id !== item.id)
                : [...prevSelectedItems, item.id]
        );
    };

    return (
        <div className="itm-lst">
            <h1 id="item-list">Item List</h1>
            <div className="grid-container">
                {items.map(item => (
                    <div
                        key={item.id}
                        className={`grid-item ${selectedItems.includes(item.id) ? 'selected' : ''}`}
                        onClick={() => handleSelect(item)}
                    >
                        {item.name}
                    </div>
                ))}
            </div>
            <div className="slct">
                <h2>Selected Items</h2>
                <ul className="itm">
                    {selectedItems.map(id => {
                        const selectedItem = items.find(item => item.id === id);
                        return <li key={id}>{selectedItem.name}</li>;
                    })}
                </ul>
            </div>
            <div className="confirm">
                <button className="btn-confirm">Confirm</button>
            </div>
        </div>
    );
}

export default ItemList;
