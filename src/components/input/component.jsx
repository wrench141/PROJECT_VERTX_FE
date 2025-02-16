import "./style.css";

export default function Input({theme, label, state, setState, dis}){
    return (
      <input
        type="text"
        className={`inp ${theme}`}
        value={state}
        onChange={(e) => setState(e.target.value)}
        placeholder={label}
        disabled={dis}
      />
    );
};