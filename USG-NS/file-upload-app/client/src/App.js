// App.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import io from "socket.io-client";
import "./App.css";
import eyeBrow from "./assets/eyebrow.png";
import eye from "./assets/eye.png";
import FileModal from "./FileModal"; // Import the new modal component

const socket = io("http://localhost:3001");

const FileTable = ({ files, openFileModal }) => (
  <table className="custom-table">
    <thead className="custom-header">
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Size</th>
        <th>Last Modified</th>
        <th>Status</th>
        <th>View File</th>
      </tr>
    </thead>
    <tbody>
      {files.map((file, index) => (
        <tr key={file.name}>
          <td>{index + 1}</td>
          <td>{file.name}</td>
          <td>{file.size} bytes</td>
          <td>{new Date(file.lastModified).toLocaleString()}</td>
          <td className={file.isDeleted ? "consumed" : "generated"}>
            {file.isDeleted ? "Consumed" : "Generated"}
          </td>
          <td>
            {file.isDeleted ? (
              <img
                src={eyeBrow}
                alt="Closed Eye"
                className="eye-image"
                width={24}
                height={24}
              />
            ) : (
              <img
                src={eye}
                alt="Open Eye"
                className="eye-image custom-img"
                width={24}
                height={24}
                onClick={() => openFileModal(file.name)} // Handle click event to open modal
              />
            )}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

function App() {
  const [files, setFiles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [fileContent, setFileContent] = useState("");
  const [selectedFileName, setSelectedFileName] = useState("");

  const openFileModal = (fileName) => {
    // Fetch file content and update state
    axios.get(`http://localhost:3001/files/${fileName}/content`)
      .then(response => {
        setFileContent(response.data.content);
        setSelectedFileName(fileName);
        setModalOpen(true);
      })
      .catch(error => {
        console.error("Error fetching file content:", error);
      });
  };

  const closeModal = () => {
    setModalOpen(false);
    setFileContent("");
    setSelectedFileName("");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/files");
        setFiles(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    socket.on("updateFiles", (updatedFiles) => {
      setFiles(updatedFiles);
    });

    console.log("WebSocket connection established");

    return () => {
      socket.off("updateFiles");
    };
  }, []);

  const filteredFiles = files.filter((file) =>
    file.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <header className="navbar">
        <h1>Company Name</h1>
      </header>
      <div className="dashboard">
        <div className="sidebar">
          <input
            type="text"
            placeholder="Search files"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="dashboard-main">
          <FileTable files={filteredFiles} openFileModal={openFileModal} />
          {modalOpen && (
            <FileModal
              fileContent={fileContent}
              closeModal={closeModal}
              fileName={selectedFileName}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
