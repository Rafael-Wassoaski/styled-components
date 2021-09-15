import React, {useState} from "react";
import { ThemeProvider } from "styled-components";
import {temaClaro, temaEscuro} from "./Components/UI/temas";
import { BtnTema } from "./Components/UI";
import SwitchTema from "./Components/SwitchTema";


import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { GlobalStyle } from "./Components/globalStyle";

function App() {
  const [tema, setTema] = useState(true);

  const toogleTema = ()=>{
    setTema(!tema);
  }

  return (
    <>
      <ThemeProvider theme={tema ? temaClaro : temaEscuro}>
        <GlobalStyle/>
        <BtnTema onClick={toogleTema}>
          <SwitchTema tema = {tema}/>
        </BtnTema>
        <Cabecalho />
        <Container />
      </ThemeProvider>
    </>
  );
}

export default App;
