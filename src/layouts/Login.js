/*!

=========================================================
* Paper Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import {Switch, Route} from "react-router-dom"
import routes from "routes"

// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

function Login() {
  return (
    <>
      <div className="wrapper login-layout">
        <div className="text-center"> <p
          className="simple-text logo-normal h1"
        >
          <i className="nc-icon nc-atom" />
        Lixeira Ecológica
        </p>
        <hr />
        </div>
        <p>
          <div className="text-center mb-5 pb-5">
            <p className="h3 my-1">Bem vindo!</p>
            <p>Estamos felizes por ter você conosco! Cadastre-se para saber mais.</p>
          </div>
          <Switch>
            {routes.map((prop, key) => {
              return (
                <Route
                  path={prop.layout + prop.path}
                  component={prop.component}
                  key={key}
                />
              );
            })}
          </Switch>
        </p>
      </div>
    </>
  );
}

export default Login;
