import { useEffect, useState } from 'react';
import './App.css';
import Induk from './Components/Induk';

function App() {
  const [nama, setNama] =useState('Nasiuduk');
  let variabelBiasa = 'andri';

  useEffect(() => {
    console.log('useEffect', nama);
  }, [nama]);

  const ubahNama = () => {
    setNama('gorengan');
    variabelBiasa = 'berubah';
  };
  return (
    <div className='App'>
      <header className='App-header'>
        <Induk judul={nama} tanggal='28-11-1928'>
          <p>use state</p>
        </Induk>
        <Induk judul={variabelBiasa} tanggal='04-04-2020'>
          <p>variabelBiasa.</p>
        </Induk>
        <button onClick={() => ubahNama()}>Ubahnama</button>
      </header>
    </div>
  );
}

export default App;
