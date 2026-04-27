import React, {useState} from 'react';
import './FileUploader.css';
import Preview from './Preview';

const FileUploader = () => {
    const [files,setFiles] = useState([]);
    const [isDragging, setIsDragging] = useState(false);
    const handleFileChange = (e) => {
        setFiles((prev) => [...prev, ...e.target.files]);
    }
    const handleRemove =(fileName) => {
        const newFiles = files.filter((file) => file.name !==fileName);
        setFiles(newFiles);
    }
    const handleDragEnter = (e) => {
        e.preventDefault();
        setIsDragging(true);
    }
    const handleDragLeave = (e) => {
        e.preventDefault();
        setIsDragging(false);
    }
    const handleDrop = (e) => {
        e.preventDefault();
        const droppedFiles = e.dataTransfer.files;
        setFiles((prev) => [...prev, ...droppedFiles]);
        setIsDragging(false);
    }
  return (
    <div className="file-uploader">
        <div className={`dropzone ${isDragging ? 'dragging' : ''}`} onDragEnter ={handleDragEnter} onDragLeave={handleDragLeave} onDragOver = {handleDragEnter} onDrop={handleDrop}>
            <p>Drag and Drop files here</p>
            <input type='file' multiple className="hidden-input" id="file-input" onChange={handleFileChange}/>
            <label htmlFor="file-input" className="browse-btn">Browse Files</label>
        </div>
        <div className="preview-container">
            {
                files.map((file, index) => {
                    return <Preview key={index} file={file} onRemove={handleRemove}/>
                })
            }
        </div>
    </div>
  )
}

export default FileUploader