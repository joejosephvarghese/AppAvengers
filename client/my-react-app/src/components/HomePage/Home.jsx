// src/SplitView.js
import React, { useCallback, useState } from 'react';
import debounce from 'lodash/debounce';
import { useSelector, useDispatch } from 'react-redux';
import { setNotes, updateNote, setError, setLoading } from '../../redux/slice/noteSlice';
import { saveNote,updateNoteAPI } from '../../apis/notes';

const SplitView = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes.data);
  const [selectedItem, setSelectedItem] = useState(null);
  const [editedContent, setEditedContent] = useState('');




  const handleAddNote = () => {
    const newItemId = notes.length + 1;
    const newItem = { id: newItemId, title: `Item ${newItemId}`, content: '' };
    dispatch(setNotes([...notes, newItem]));
    setSelectedItem(newItem);
    setEditedContent('');
  };

  const handleSave = useCallback(
    debounce(async (e) => {
      try {
        dispatch(setLoading(true));

        
    
        if (selectedItem?._id) {
          
          // If the note exists, update it
          await updateNoteAPI({
            id: selectedItem._id,
            title: selectedItem.title,
            content: e.target.value,
            author: 'authorId',
          });
        } else {
          // If the note doesn't exist, save it as a new note
          await saveNote({
            title: selectedItem.title,
            content: e.target.value,
            author: 'authorId',
          });
        }
  
        dispatch(setLoading(false));
      } catch (error) {
        dispatch(setError('Failed to save note'));
        console.error('Failed to save note', error);
      }
    }, 2000),
    [selectedItem, dispatch]
  );

  return (
    <div className="flex h-screen">
      <div className="w-1/3 border-r border-gray-300 p-4">
        <button onClick={handleAddNote} className="mb-4 bg-blue-500 text-white px-4 py-2 rounded">
          + Add Note
        </button>
        <ul className="list-none p-0">
          {notes.map((note) => (
            <li
              key={note.id}
              onClick={() => {
                setSelectedItem(note);
                setEditedContent(note.content);
              }}
              className={`p-4 cursor-pointer ${
                selectedItem && selectedItem.id === note.id ? 'bg-gray-200' : 'bg-white'
              }`}
            >
              {note.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-2/3 p-4">
        {selectedItem ? (
          <div>
            <h2 className='text-blue-500 text-500 text-2xl font-bold'>{selectedItem.title}</h2>
            <textarea
              value={editedContent}
              onChange={(e) => {
                setEditedContent(e.target.value);
                dispatch(updateNote({
                  ...selectedItem,
                  content: editedContent
                }));
                handleSave(e);
              }}
              placeholder="Enter your content here..."
              className="w-full h-64 p-2 border border-gray-300 rounded"
            />
          </div>
        ) : (
          <div text-gray-500 text-xl font-semibold>Select an item to see the details</div>
        )}
      </div>
    </div>
  );
};

export default SplitView;
