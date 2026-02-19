
function Button({ text, onClick }) {
return (
  <button 
  //Evento onClick que se ejecuta al hacer click en el botón
  onClick={onClick}
  style={{
    padding: '10px 20px',
    backgroundColor: '#FFBB00',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  }}>
{/*Mostramos el texto que se le pasa como prop al botón*/}
    {text}
  </button>
)
}

export default Button