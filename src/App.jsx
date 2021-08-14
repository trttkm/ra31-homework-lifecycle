import React from 'react';
import { Header } from './components/Header';
import AppRouter from './routes/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
  return (
    <div className="container">
      <Header />
      <AppRouter />
    </div>
  );
}

export default App;
