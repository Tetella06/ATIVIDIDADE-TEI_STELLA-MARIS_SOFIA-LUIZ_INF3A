import React, { useState } from 'react';
import productsData from './produtosData';
import './App';
import ProductDetails from './detalhesProdutos';
import ReactDOMServer from 'react-dom/server';
import Cart from './carrinho';
import 'font-awesome/css/font-awesome.min.css';

function ProductList({ categoriaSelecionada, faixaSelecionada }) {
  const [ordem, setordem] = useState("asc");

  const filtroPorCategoria = categoriaSelecionada
    ? productsData.filter((product) => product.category === categoriaSelecionada)
    : productsData;

  const filtroPorFaixa = {
    "1000-3500": (product) => product.price >= 1000 && product.price <= 3500,
    "3501-6000": (product) => product.price >= 3501 && product.price <= 6000,
    "6001-8500": (product) => product.price >= 6001 && product.price <= 8500,
    "8501-11000": (product) => product.price >= 8501 && product.price <= 11000,
  };

  const filterFunction = filtroPorFaixa[faixaSelecionada] || ((product) => true);

  const filteredProducts = filtroPorCategoria.filter(filterFunction);

  const alterarOrdem = () => {
    setordem(ordem === "asc" ? "desc" : "asc");
  };

  const produtosOrdernados = [...filteredProducts];

  produtosOrdernados.sort((a, b) => {
    if (ordem === "asc") {
      // ordenação do menor para o maior
      return a.price - b.price;
    } else {
      // ordenação do maior para o menor
      return b.price - a.price;
    }
  });

  const [produtoSelecionado, setProdutoSelecionado] = useState(null);

  const mostrarDetalhesProdutos = (id) => {
    const produtoMostrar = productsData.find(product => product.id === id);
    console.log("Produto encontrado:", produtoMostrar);

    if (produtoMostrar) {
      setProdutoSelecionado(produtoMostrar);

      const productWindow = window.open('', '_blank');

      const productDetailsHtml = ReactDOMServer.renderToStaticMarkup(
        <ProductDetails product={produtoMostrar} onClose={() => productWindow.close()} />
      );

      productWindow.document.write(
        `<html><body>${productDetailsHtml}</body></html>`
      );
    } else {
      console.error("Produto não encontrado.");
    }
  }

  const [cart, setCart] = useState([]);

  // Função para adicionar um produto ao carrinho com base no ID
  const addNoCarrinho = (productId) => {
    const produtoAdd = productsData.find((product) => product.id === productId);
    if (produtoAdd) {
      const existingProduct = cart.find((product) => product.id === productId);

      if (existingProduct) {
        const updatedCart = cart.map((product) =>
          product.id === productId
            ? { ...product, quantidade: product.quantidade + 1 }
            : product
        );
        setCart(updatedCart);
      } else {
        setCart([...cart, { ...produtoAdd, quantidade: 1 }]);
      }
    }
  };

  const updatedCart = (newCart) => {
    setCart(newCart);
  };

  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center', margin:'5px'}}>
      <div className="sort-buttons">
        <button className="btn btn-light" onClick={alterarOrdem}>
          {ordem === 'asc' ? 'Menor para o Maior' : 'Maior para o Menor'}
        </button>
      </div>
      <div className="container" style={{ display: 'flex', flexDirection: 'column' }}>
        <div className="lista-produto" >
          <div className="listagem" >
            {produtosOrdernados.map((product) => (
              <div key={product.id} className="produtos" style={{ width: '200px', height: '400px' }}>
                <img
                  src={product.imageUrl}
                  alt={product.id}
                  style={{ width: '200px', height: '200px' }}
                />
                <h3>{product.name}</h3>
                <h3>R$ {product.price}</h3>
                <div className='lista-button' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '5px' }}>
                  <button type="button" class="btn btn-dark btn-floating" onClick={() => mostrarDetalhesProdutos(product.id)} style={{ marginRight: '1em', background: '#cbe5f6', color: 'black' }}>
                    Detalhes
                  </button>
                  <button type="button" class="btn btn-dark btn-floating" onClick={() => addNoCarrinho(product.id)} style={{ background: '#cbe5f6', color: 'black' }}>
                    <i className="fa fa-shopping-basket" aria-hidden="true"></i>
                  </button>
                </div>

              </div>
            ))}
          </div>
        </div>
        <div className="menu-bar" >
          <Cart cart={cart} updateCart={updatedCart} />
        </div>
      </div >
    </div>

  );
}

export default ProductList;
