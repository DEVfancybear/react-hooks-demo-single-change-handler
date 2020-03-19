import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    bio: '',
    hooks: true,
    level: 'master',
    version: '16.5',
  });

  const handleChange = evt => {
    const value = evt.target.type === 'checkbox' ? evt.target.checked : evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

  return (
    <div className="app">
      <form>
        <label>
          <div className="heading">First Name</div>
          <input type="text" name="firstName" value={state.firstName} onChange={handleChange} />
        </label>
        <label>
          <div className="heading">Last Name</div>
          <input type="text" name="lastName" value={state.lastName} onChange={handleChange} />
        </label>
        <label>
          <div className="heading">Bio</div>
          <textarea name="bio" value={state.bio} onChange={handleChange} />
        </label>
        <label>
          <div className="heading">With hooks</div>
          <input type="checkbox" name="hooks" checked={state.hooks} onChange={handleChange} />
        </label>
        <div>
          <div className="heading">Level</div>
          <label>
            Acolyte
            <input type="radio" name="level" value="acolyte" onChange={handleChange} />
          </label>
          <label>
            Decarati
            <input type="radio" name="level" value="Decarati" onChange={handleChange} />
          </label>
          <label>
            KarenaSec
            <input type="radio" name="level" value="KarenaSec" onChange={handleChange} />
          </label>
        </div>
        <label>
          <div className="heading">Favorite version</div>
          <select name="version" onChange={handleChange} value={state.version}>
            <option value=""></option>
            <option value="16.12">v16.12.0</option>
            <option value="16.8">v16.8.0</option>
            <option value="16.7">v16.7.0</option>
            <option value="16.6">v16.6.0</option>
            <option value="16.5">v16.5.0</option>
          </select>
        </label>
      </form>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
};
export default App;
