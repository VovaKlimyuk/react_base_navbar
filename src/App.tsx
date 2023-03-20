import React from 'react';
import './App.css';
import { TestComponents } from './components/TestComponents';
import { TestPage } from './pages/TestPage';

const App: React.FC = () => (
  <>
    <h1 className="title">Hello world</h1>

    <TestComponents />
    <TestPage />
  </>
);

export default App;
