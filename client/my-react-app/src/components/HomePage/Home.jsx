// src/SplitView.js
import React, { useState } from 'react';

const SplitView = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [editedContent, setEditedContent] = useState('');
  const [items, setItems] = useState([
    { id: 1, title: 'Item 1', content: 'This is the content of Item 1' },
    { id: 2, title: 'Item 2', content: 'This is the content of Item 2' },
    { id: 3, title: 'Item 3', content: 'This is the content of Item 3' },
  ]);

  const handleContentChange = (event) => {
    setEditedContent(event.target.value);
  };

  const handleAddNote = () => {
    const newItemId = items.length + 1;
    const newItem = { id: newItemId, title: `Item ${newItemId}`, content: '' };
    setItems([...items, newItem]);
    setSelectedItem(newItem);
    setEditedContent('');
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/3 border-r border-gray-300 p-4">
        <button onClick={handleAddNote} className="mb-4 bg-blue-500 text-white px-4 py-2 rounded">
          + Add Note
        </button>
        <ul className="list-none p-0">
          {items.map((item) => (
            <li
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className={`p-4 cursor-pointer ${
                selectedItem && selectedItem.id === item.id ? 'bg-gray-200' : 'bg-white'
              }`}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-2/3 p-4">
        {selectedItem ? (
          <div>
            <h2>{selectedItem.title}</h2>
            <textarea
              value={editedContent}
              onChange={handleContentChange}
              placeholder="Enter your content here..."
              className="w-full h-64 p-2 border border-gray-300 rounded"
            />
          </div>
        ) : (
          <div>Select an item to see the details</div>
        )}
      </div>
    </div>
  );
};

export default SplitView;
