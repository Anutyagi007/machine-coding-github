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
import InteractiveShape from './components/InteractiveShape/InteractiveShape';
import TicTacToe from './components/TicTacToe/TicTacToe';
import Typeahead from './components/Typeahead/Typeahead';
import Todo from './components/Todo/Todo';
import MemoryGame from './components/MemoryGame/MemoryGame';
import InfiniteScroll from './components/InfiniteScroll/InfiniteScroll';
import ProgressBar from './components/ProgressBar/ProgressBar';
import Accordion from './components/Accordion/Accordion';
import Tabs from './components/Tabs/Tabs';
import NestedComments from './components/NestedComments/NestedComments';
import TrafficLights from './components/TrafficLights/TrafficLights';
import Calender from './components/Calender/Calender';
import Modal from './components/Modal/Modal';
import TypingEffect from './components/TypingEffect/TypingEffect';
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
    },
    {
      key: 'interactiveshape',
      name: 'Interactive Shape Component',
      element: <InteractiveShape/>
    },
    {
      key: 'tictactoe',
      name: 'Tic Tac Toe Component',
      element: <TicTacToe size={3} />
    },
    {
      key: 'typeahead',
      name: 'Typeahead Component',
      element: <Typeahead />
    },
    {
      key: 'todo',
      name: 'Todo Component',
      element: <Todo />
    },
    {
      key: 'memorygame',
      name: 'Memory Game Component',
      element: <MemoryGame />
    },
    {
      key: 'infinitescroll',
      name: 'Infinite Scroll Component',
      element: <InfiniteScroll />
    },
    {
      key: 'progressbar',
      name: 'Progress Bar Component',
      element: <ProgressBar />
    },
    {
      key: 'accordion',
      name: 'Accordion Component',
      element: <Accordion />
    },
    {
      key: 'tabs',
      name: 'Tabs Component',
      element: <Tabs />
    },
    {
      key: 'nestedcomments',
      name: 'Nested Comments Component',
      element: <NestedComments />
    },
    {
      key: 'trafficlights',
      name: 'Traffic Lights Component',
      element: <TrafficLights />
    },
    {
      key: 'calender',
      name: 'Calender Component',
      element: <Calender />
    },
    {
      key: 'modal',
      name: 'Modal Component',
      element: <Modal />
    },
    {
      key: 'typingeffect',
      name: 'Typing Effect Component',
      element: <TypingEffect />
    }
  ];

  const [activeKey, setActiveKey] = useState('toast');

  const activeComponent = components.find((item) => item.key === activeKey);

  return (
    <div className="App" style={{ padding: 24, display: 'flex', justifyContent: 'space-around' }}>
      <div style={{ display: 'flex', gap: '12px', marginBottom: 20, flexDirection: 'column' }}>
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
        <h1>Machine coding round playground</h1>
        {activeComponent ? activeComponent.element : <p>Select a component</p>}
      </div>
    </div>
  );
}

export default App;
