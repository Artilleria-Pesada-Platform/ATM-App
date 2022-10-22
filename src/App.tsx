import { useState } from 'react'
import { RecoilRoot } from 'recoil';
import AppRouter from './router/AppRouter'

import "primereact/resources/themes/bootstrap4-light-blue/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";    

function App() {

  return (
    <RecoilRoot>
      <AppRouter/>
    </RecoilRoot>
    
  );
}

export default App
