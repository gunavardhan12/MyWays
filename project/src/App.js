import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Chat from './ChatRoom';
import TaskBoard from './Task';

function App() {
  return (
    <Router>
      <div>
        <h1>MERN Stack Real-Time Chat & Task Board</h1>

        <Switch>
          <Route path="/chat">
            <Chat />
          </Route>
          <Route path="/task-board">
            <TaskBoard />
          </Route>
          <Route path="/" exact>
            {/* Default landing page */}
            <p>Welcome to our MERN app!</p>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
