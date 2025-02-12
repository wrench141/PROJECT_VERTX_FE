import "./style.css";

export default function Button({theme, context, callback}){
    return(
        <button className={`button ${theme}`} onClick={() => {
            callback();
        }}>{context}</button>
    )
};