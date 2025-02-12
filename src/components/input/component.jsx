import "./style.css";

export default function Input({theme, label, state, setState}){
    return (
      <input
        type="text"
        className={`inp ${theme}`}
        value={state}
        onChange={(e) => setState(e.target.value)}
        placeholder={label}
      />
    );
};