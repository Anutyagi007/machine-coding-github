import './App.css';
import { useState } from 'react';
import ToastIndex from './components/Toast/ToastIndex';
import OTP from './components/OTP/OTP';

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
