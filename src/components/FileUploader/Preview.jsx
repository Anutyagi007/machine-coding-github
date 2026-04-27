import React from 'react'

const Preview = ({file, onRemove}) => {
  return (
    <div className = "file-preview">
        <img className="thumbnail" src={URL.createObjectURL(file)}/>
        <div className="file-info">
            <p className="file-name">{file.name}</p>
            <p className="file-size">{(file.size / 1024).toFixed(2)} KB</p>
        </div>
        <button onClick ={()=> onRemove(file.name)} className="remove-btn">x</button>
    </div>
  )
}

export default Preview