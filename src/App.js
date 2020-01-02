import React from 'react';
import AutocompleteText from './AutocompleteText';
import countries from './countries';

function App() {
  return (
    <div className="App">
      <AutocompleteText items={countries}/>
    </div>
  );
}

export default App;
