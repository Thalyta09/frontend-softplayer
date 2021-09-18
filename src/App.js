import { React } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Formulario from './componentes/Formulario';
import Listagem from './componentes/Listagem';
import Login from './componentes/Login';
import Sobre from './componentes/Sobre';

const App = () => {
  return(
    <Router>
      <Switch>
        < Route exact path={["/", "/login"]} component={Login} />
        < Route path={["/formulario/:id", "/formulario"]} component={Formulario} />
        < Route exact path="/lista" component={Listagem} />
        < Route exact path="/sobre" component={Sobre} />
      </Switch>  
    </Router>
  )
}

export default App;
