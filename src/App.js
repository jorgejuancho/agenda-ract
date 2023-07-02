import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas';
import jlogo from './imagenes/j-logo.png' 
// import Tarea from './componentes/Tarea';

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='j-logo-contenedor'>
        <img src={jlogo} alt=" " className='j-logo' />
      </div>
<div className='tareas-lista-principal'>
  <h1>Mis Tareas</h1>
  {/* <Tarea texto="Aprender React" /> */}
<ListaDeTareas />
</div>

    </div>
  );
}

export default App;
