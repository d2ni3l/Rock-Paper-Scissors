import { useState } from 'react';
import Header from './componets/Header';
import Game from './componets/Game';
import Button from './componets/Button';

function App() {

  return (
    <div className='min-h-[100vh]'>
    <Header/>
    <Game/>
    <Button/>
    </div>
  )
}

export default App
