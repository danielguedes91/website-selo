import React from 'react';
import './css/App.css';

// Section components
import About from './pages/About';
import Services from './pages/Services';
import Steps from './pages/Steps';
import Connect from './pages/Connect';

// Javascript -> .js
// JSX (React) -> .jsx
// Typescript -> .ts
// Typescript JSX -> .tsx

// adicionar font
// adicionar imagens
// grid -> with dani
// zoom
// ui library framework -> with dani

const App: React.FC = () => {
  /**
   * # As primeiras notas para o Dani
   * Aqui é onde vais começar a fazer o código para a tua app. O que tens que fazer:
   * 1. run `yarn` no teu terminal -> se tiveres alguma problema, diz-me.
   * 2. Se tudo correr bem, executa `yarn dev` para iniciar o teu dev environment. Isto abre-te uma janela do teu browser automaticamente.
   * 3. Começa a estourar tudo no código!
   */

  /**
   * Podes passar styles de várias maneiras. A mais simples e directa é fazendo dentro dos componentes, assim:
   */
  const styles: Record<string, React.CSSProperties> = {
    main: {
      width: '100%',
      height: '100vh',
    }
  }

  return (
    <div style={styles.main}>
      <About />
      <Services />
      <Steps />
      <Connect />
    </div>
  );
}

export default App;
