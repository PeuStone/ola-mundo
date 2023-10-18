import SobreMim from "./paginas/SobreMim";
import Inicio from "./paginas/Inicio";

const pagina = window.location.pathname === '/' ? <Inicio /> : <SobreMim />

function App() {
  return pagina;
}

export default App;
