import "./Btn.css";

export default function Btn({ value, onClickBtn }){
    return (
        <button className="btn-jogo" onClick={onClickBtn}>{value}</button>
    );
}