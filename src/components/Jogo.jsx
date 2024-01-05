import { useState } from "react";
import VerificaVencedor from "./VerificaVencedor";
import Btn from "./Btn";
import './Jogo.css'

export default function Jogo() {
    const [isX, setIsX] = useState(true);
    const [btn, setBtn] = useState(Array(9).fill(null));
  
    function clicado(i) {
      // se já existe um valor (X/O) então ele continuará.
      if (btn[i] || VerificaVencedor(btn)) {
        return;
      }
  
      const botoes = btn.slice();
  
      // X ou O
      if (isX) {
        botoes[i] = "X";
      } else {
        botoes[i] = "O";
      }
  
      setBtn(botoes);
      setIsX(!isX);
    }
  
    // mostra os resultados do jogo
    const vencendor = VerificaVencedor(btn);
    let status;
    if (vencendor) {
      status = "Vencendor: " + vencendor;
    } else {
      status = "Jogo: " + (isX ? "X" : "O");
    }
  
    function btnZerar() {
      let zerar = btn.map(() => {
        btn.value = " ";
      });
      setBtn(zerar);
    }
  
    return (
      <>
        <div className="div-btn">
          <Btn value={btn[0]} onClickBtn={() => clicado(0)} />
          <Btn value={btn[1]} onClickBtn={() => clicado(1)} />
          <Btn value={btn[2]} onClickBtn={() => clicado(2)} />
        </div>
        <div  className="div-btn">
          <Btn value={btn[3]} onClickBtn={() => clicado(3)} />
          <Btn value={btn[4]} onClickBtn={() => clicado(4)} />
          <Btn value={btn[5]} onClickBtn={() => clicado(5)} />
        </div>
        <div  className="div-btn">
          <Btn value={btn[6]} onClickBtn={() => clicado(6)} />
          <Btn value={btn[7]} onClickBtn={() => clicado(7)} />
          <Btn value={btn[8]} onClickBtn={() => clicado(8)} />
        </div>
  
        <div className="div-status">{status}</div>
  
        <div className="div-btn-zerar">
            <button onClick={btnZerar} className="btn-zerar">Zerar</button>
        </div>
      </>
    );
}