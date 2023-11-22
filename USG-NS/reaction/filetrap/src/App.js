import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FileDetailsComponent = () => {
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    // Fetch files from the server when the component mounts
    axios.get('http://localhost:3001/files')
      .then(response => setFiles(response.data))
      .catch(error => console.error('Error fetching files', error));
  }, []);

  const displayFileDetails = (fileName) => {
    // Trigger this function when you want to display file details
    axios.get(`http://localhost:3001/files/${fileName}`)
      .then(response => {
        console.log('File details:', response.data);
        // Update state or UI with the file details as needed
        setSelectedFile(response.data);
      })
      .catch(error => console.error('Error fetching file details', error));
  };

  return (
    <div>
      <h1>File Details</h1>
      <ul>
        {files.map(file => (
          <li key={file.name} onClick={() => displayFileDetails(file.name)}>
            {file.name}
          </li>
        ))}
      </ul>
      {selectedFile && (
        <div>
          <h2>Selected File Details</h2>
          <p>Name: {selectedFile.name}</p>
          <p>Timestamp: {selectedFile.timestamp}</p>
          <p>Status: {selectedFile.status}</p>
        </div>
      )}
    </div>
  );
};

export default FileDetailsComponent;
