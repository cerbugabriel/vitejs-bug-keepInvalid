import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css'; //icons
import 'primeflex/primeflex.css'; // flex
import './App.css';
import { Calendar } from 'primereact/calendar';

function App() {
  const [date, setDate] = useState(null);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + PrimeReact</h1>
      <div>
        <h2>PrimeReact Typescript Issue Template</h2>
        <p>
          Please create a test case and attach the link to the to your github
          issue report.
        </p>
      </div>
      <div className="card">
        <Calendar
          value={date}
          onChange={(e) => setDate(e.target.value)}
          keepInvalid
        />
        <p>
          Edit <code>src/App.tsx</code> and save to test PrimeReact
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
