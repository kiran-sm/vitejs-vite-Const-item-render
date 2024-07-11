import React, { useState } from 'react';
import './App.css';

const data = {
  id: '1',
  name: 'root',
  isFolder: true,
  items: [
    {
      id: '2',
      name: 'public',
      isFolder: true,
      items: [
        {
          id: '3',
          name: 'public nested 1',
          isFolder: true,
          items: [
            {
              id: '4',
              name: 'index.html',
              isFolder: false,
              items: [],
            },
            {
              id: '5',
              name: 'hello.html',
              isFolder: false,
              items: [],
            },
          ],
        },
        {
          id: '6',
          name: 'public_nested_file',
          isFolder: false,
          items: [],
        },
      ],
    },
    {
      id: '7',
      name: 'src',
      isFolder: true,
      items: [
        {
          id: '8',
          name: 'App.js',
          isFolder: false,
          items: [],
        },
        {
          id: '9',
          name: 'Index.js',
          isFolder: false,
          items: [],
        },
        {
          id: '10',
          name: 'styles.css',
          isFolder: false,
          items: [],
        },
      ],
    },
    {
      id: '11',
      name: 'package.json',
      isFolder: false,
      items: [],
    },
  ],
};

function App() {
  const [fileData, setFileData] = useState(data);

  const renderItems = (items) => {
    return (
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}
            {item.isFolder && item.items.length > 0 ? renderItems(item.items) : null}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="App">
      <h1>File Structure</h1>
      {renderItems([fileData])}
    </div>
  );
}

export default App;
