import React from 'react';
import ReactDOM from 'react-dom';
import RouteSwitch from './RouteSwitch'
import { TasksProvider } from './TasksContext'

ReactDOM.render(
  <React.StrictMode>
    <TasksProvider>
      <RouteSwitch />
    </TasksProvider>
  </React.StrictMode>,
  document.getElementById('root')
);