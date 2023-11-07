import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {


  return (
    <div>
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src="https://cdn.sanity.io/images/kts928pd/production/b46a6970cc0f064f5ba5d6370077c7f2e18dbb0f-1200x630.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top" />
            Bootstrap
          </a>
          <a className='link'>ANASAYFA</a>
          <a className='link'>HAKKIMIZDA</a>
          <a className='link'>GALERİ</a>
          <a className='link'>İLETİŞİM</a>

        </div>
      </nav>
      <div class="container">
        <div className='col-5'>
          <h1>Kategoriler</h1>
          <li>
            <ul>asdasf</ul>
          </li>

        </div>

      </div>
    </div>
  );
}

export default App;
