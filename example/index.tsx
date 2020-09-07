import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useStates } from '../.';

const App = () => {
  const states = useStates();
  return (
    <div>
      {states.map(state => (
        <div>
          {state.abbreviation} | {state.name}
        </div>
      ))}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
