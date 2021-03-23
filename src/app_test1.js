//ejecutar serivdor de webpack con npx webpack serve
import { showAlert, search, render1 } from './message';
import "./style.css";
const id = prompt('Indique el Id del personaje')

search(id)
  .then((data)=> {
    render1(data)
  })
  .catch(()=>{
    console.log('No hay resultado')
  })
document.getElementById('btn-alert')
    .addEventListener('click', showAlert);