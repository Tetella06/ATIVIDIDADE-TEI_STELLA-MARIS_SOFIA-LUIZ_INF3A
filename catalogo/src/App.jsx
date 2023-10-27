import React, { useState } from 'react';
import './App.css';
import ProductList from './listaProdutos';
import CategoryFilter from './filtroProduto';
import PriceRangeFilter from './filtroPreco';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';

const categorias = ["Samsung", "Apple", "Motorola"];

function App() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("");
  const [faixaSelecionada, setFaixaSelecionada] = useState("");

  return (
    <div style={{ width: '100%' }}>
      <nav className="navbar navbar-expand-lg navbar-light" style={{ background: '#238fd1', width: '100%' }}>
        <a className="navbar-brand" href="#">Phone's Shop</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="App.jsx">Início</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href='Contato.jsx'>Contato</a>
              </li>
              <li className="nav-item">
              <a className="nav-link" href='Contato.jsx'>Carrinho</a>
              </li>
            </ul>
        </div>
      </nav>

      <div className="Conteudo" style={{ width: '100%' }}>
        <h1>Lista de Produtos</h1>
        <div className="filtros">
          <CategoryFilter
            categorias={categorias}
            categoriaSelecionada={categoriaSelecionada}
            onCategoriaSelecionada={setCategoriaSelecionada}
          />
          <PriceRangeFilter
            faixaSelecionada={faixaSelecionada}
            onFaixaSelecionada={setFaixaSelecionada}
          />
        </div>
        <ProductList categoriaSelecionada={categoriaSelecionada} faixaSelecionada={faixaSelecionada} />
      </div>
    </div>

  );
}

export default App;
