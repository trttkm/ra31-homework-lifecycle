import React from 'react';
import { Header } from './components/Header';
import AppRouter from './routes/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <AppRouter />
    </>
  );
}

export default App;
