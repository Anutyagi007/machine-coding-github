import React, {useState} from 'react';
import './InstagramStory.css';

const InstagramStory = () => {
    const [stories, setStories] = useState([]);
    const handleChange = (e) => {
        console.log(e.target.files);
        setTimeout(() => {
            setStories((prev) => prev.filter((story) => {
                if(story.name === e.target.files[0].name) {
                    return false;
                }
                URL.revokeObjectURL(story);
                return true;
            }));
        }, 15000)
        setStories((prev) => [...prev, ...e.target.files]);

    }
    console.log(stories);
  return (
    <div className="story-container">
        <div className="add-story story-item">
            <input type="file" multiple hidden id="add-story-input" onChange={handleChange}/>
            <label htmlFor="add-story-input">+</label>
        </div>
        <div className = "stories-container">
            {
                stories.map((story, index) => {
                    return <div key={index} className="story-item">
                        <img src = {URL.createObjectURL(story)} alt={story.name} />
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default InstagramStory