import './App.css';
import { useState } from 'react';
import ToastIndex from './components/Toast/ToastIndex';
import OTP from './components/OTP/OTP';
import Stepper from './components/Stepper/Stepper';
import Pagination from './components/Pagination/Pagination';
import Carousel from './components/Carousel/Carousel';
import Stopwatch from './components/Stopwatch/Stopwatch';
import VirtualisedList from './components/VirtualisedList/VirtualisedList';
import FileExplorer from './components/FileExplorer/FileExplorer';
import fileData from '../src/components/FileExplorer/Data.json';
import StarRating from './components/StarRating/StarRating';
function App() {
  const components = [
    {
      key: 'toast',
      name: 'Toast Component',
      element: <ToastIndex />
    },
    {
      key: 'otp',
      name: 'OTP Component',
      element: <OTP />
    },
    {
      key: 'stepper',
      name: 'Stepper Component',
      element: <Stepper />
    },
    {
      key: 'pagination',
      name: 'Pagination Component',
      element: <Pagination/>
    },
    {
      key: 'carousel',
      name: 'Carousel Component',
      element: <Carousel/>
    },
    {
      key: 'stopwatch',
      name: 'Stopwatch Component',
      element: <Stopwatch/>
    },
    {
      key: 'virtualisedList',
      name: 'Virtualised List Component',
      element: <VirtualisedList/>
    },
    {
      key: 'fileexplorer',
      name: 'File Explorer Component',
      element: <FileExplorer fileData={fileData} />
    },
    {
      key: 'starrating',
      name: 'Star Rating Component',
      element: <StarRating/>
    }
  ];

  const [activeKey, setActiveKey] = useState('toast');

  const activeComponent = components.find((item) => item.key === activeKey);

  return (
    <div className="App" style={{ padding: 24 }}>
      <h1>Machine coding round playground</h1>
      <div style={{ display: 'flex', gap: '12px', marginBottom: 20 }}>
        {components.map((comp) => (
          <button
            key={comp.key}
            onClick={() => setActiveKey(comp.key)}
            style={{
              padding: '8px 14px',
              cursor: 'pointer',
              background: comp.key === activeKey ? '#007bff' : '#eee',
              color: comp.key === activeKey ? '#fff' : '#000',
              border: '1px solid #ccc',
              borderRadius: 4
            }}
          >
            {comp.name}
          </button>
        ))}
      </div>

      <div>
        {activeComponent ? activeComponent.element : <p>Select a component</p>}
      </div>
    </div>
  );
}

export default App;
