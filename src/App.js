import React from 'react';
import Form from './components/Form/Form';
import './App.css';

function App() {
  return (
    <div className="App">
      <h3>Invoice to PDF</h3>
      <p>Enter information in each field and click submit to preview your PDF</p>
      <Form />
    </div>
  );
}

export default App;
