import React, { useState } from 'react'
import './FileExplorer.css'
const FileExplorer = ({fileData}) => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='explorer-container'>
        <h5 onClick={() => setIsOpen(!isOpen)}>
            {fileData.type === "folder" ? "📁" : '📄'}<span>{fileData.name}</span>
        </h5>
        {
            isOpen && fileData?.children?.map((child) => {
                return (<FileExplorer key={child.name} fileData={child} />)
            })
        }
    </div>
  )
}
// "📂" : "📁" "📄"
export default FileExplorer