import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { listarPersonajesOrdenAlfabetico } from "./utilidades/utilidades"; // Importa la función de utilidad

import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";
import Card from "./components/Card/Card";
import Pagination from "./components/Pagination/Pagination";
import Filter from "./components/Filter/Filter";
import Episodes from "./Pages/Episodes";
import Location from "./Pages/Location";
import CardDetails from "./components/Card/CardDetails";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Componente de la barra de navegación */}
        <Navbar />
      </div>
      <Routes>
        {/* Rutas para diferentes páginas */}
        <Route path="/" element={<Home />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/location" element={<Location />} />
        <Route path="/:id" element={<CardDetails />} />
        <Route path="/episodes/:id" element={<CardDetails />} />
        <Route path="/location/:id" element={<CardDetails />} />
      </Routes>
    </Router>
  );
}

// Componente de la página principal (Home)
const Home = () => {
  // Estados para manejar la paginación y los filtros de búsqueda
  const [pageNumber, updatePageNumber] = useState(1);
  const [status, updateStatus] = useState("");
  const [gender, updateGender] = useState("");
  const [species, updateSpecies] = useState("");
  const [fetchedData, updateFetchedData] = useState({ info: {}, results: [] });
  const [search, setSearch] = useState("");

  // URL de la API para obtener los datos de los personajes
  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  // Efecto para cargar los datos de los personajes cuando cambian los filtros o la paginación
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(api).then((res) => res.json());
        const sortedData = listarPersonajesOrdenAlfabetico(data); // Ordena los personajes alfabéticamente
        updateFetchedData(sortedData);
      } catch (error) {
        console.error("Error fetching character data:", error);
      }
    };

    fetchData();

    // Cleanup para evitar múltiples solicitudes en caso de cambios rápidos
    return () => {
      updateFetchedData({ info: {}, results: [] });
    };
  }, [api]);

  return (
    <div className="App">
      <h1 className="text-center mb-3">Personajes</h1>
      {/* Componente de búsqueda */}
      <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
      <div className="container">
        <div className="row">
          {/* Componente de filtros */}
          <Filter
            pageNumber={pageNumber}
            status={status}
            updateStatus={updateStatus}
            updateGender={updateGender}
            updateSpecies={updateSpecies}
            updatePageNumber={updatePageNumber}
          />
          <div className="col-lg-8 col-12">
            <div className="row">
              {/* Componente de tarjetas para mostrar los personajes */}
              <Card page="/" results={fetchedData.results} />
            </div>
          </div>
        </div>
      </div>
      {/* Componente de paginación */}
      <Pagination
        info={fetchedData.info}
        pageNumber={pageNumber}
        updatePageNumber={updatePageNumber}
      />
    </div>
  );
};

export default App;
