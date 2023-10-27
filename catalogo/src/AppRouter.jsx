import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Perfil from './Contato';
import Compras from './ShoppingCart';

function AppRouter() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/contato" component={Perfil} /> {/* Configurar a rota para o componente Contato */}
                    {/* <Route path="/compras" component={Compras} />                 */}
                    </Switch>
            </div>
        </Router>
    );
}

export default AppRouter;
