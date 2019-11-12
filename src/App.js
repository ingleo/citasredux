import React from "react";
import store from "./store";
import { Provider } from "react-redux";

import AgregarCita from "./components/AgregarCita";
import ListadoCitas from "./components/ListadoCitas";

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <header>
          <h1 className="text-center">
            Administrador de pacientes de veterinaria
          </h1>
        </header>

        <div className="row mt-3">
          <div className="col-md-6">
            <AgregarCita />
          </div>
          <div className="col-md-6">
            <ListadoCitas />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
