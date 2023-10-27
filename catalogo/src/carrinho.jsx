import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

function Cart({ cart, updateCart }) {

    // Função para calcular o valor total da compra
    const calcularTotal = () => {
        return cart.reduce((total, product) => total + product.price * product.quantidade, 0);
    };

    const itensCarrinho = Array.from(new Set(cart.map((product) => product.id)).values());

    // Função para diminuir a quantidade de um produto no carrinho
    const diminuirQuantidade = (productId) => {
        const updatedCart = [...cart];
        const index = updatedCart.findIndex((product) => product.id === productId);

        if (index !== -1) {
            if (updatedCart[index].quantidade > 1) {
                updatedCart[index].quantidade -= 1;
                updateCart(updatedCart);
            } else {
                updatedCart.splice(index, 1);
                updateCart(updatedCart);
            }
        }
    };

    const removerDoCarrinho = (productId) => {
        const updatedCart = cart.filter((product) => product.id !== productId);
        updateCart(updatedCart);
    }

    return (
        <section className="h-100 h-custom" style={{ backgroundColor: '#eee' }}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="row g-0">
                                    <div className="col-lg-8">
                                        <h1 className="fw-bold mb-0 text-black">Carrinho de Compras</h1>
                                        <h6 className="mb-0 text-muted">3 items</h6>
                                        <hr className="my-4" />

                                        <div className="row mb-4 d-flex justify-content-between align-items-center">
                                            {/* Repeat this block for each item in the cart */}
                                            {itensCarrinho.map((productId) => {
                                                const product = cart.find((p) => p.id === productId);
                                                return (
                                                    <div key={product.id} className="col-md-12 col-lg-12 col-xl-12">
                                                        <div className="row g-0">
                                                            <div className="col-md-2 col-lg-2 col-xl-2">
                                                                <img
                                                                    src={product.imageUrl}
                                                                    className="img-fluid rounded-3"
                                                                    alt={product.name}
                                                                />
                                                            </div>
                                                            <div className="col-md-3 col-lg-3 col-xl-3">
                                                                <h6 className="text-muted">Shirt</h6>
                                                                <h6 className="text-black mb-0">{product.name}</h6>
                                                            </div>
                                                            <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                                                <button className="btn btn-link px-2" onClick={() => diminuirQuantidade(product.id)}>
                                                                        <FontAwesomeIcon icon={faMinus}/>
                                                                </button>
                                                                <input
                                                                    min="0"
                                                                    name="quantity"
                                                                    value={product.quantidade}
                                                                    type="number"
                                                                    className="form-control form-control-sm"
                                                                />
                                                                <button className="btn btn-link px-2" onClick={() => removerDoCarrinho(product.id)}>
                                                                    <FontAwesomeIcon icon={faTrash} />                                                                </button>
                                                            </div>
                                                            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                                <h6 className="mb-0">{`R$ ${product.price.toFixed(2)}`}</h6>
                                                            </div>
                                                            <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                                                <a href="#!" className="text-muted"><i className="fas fa-times"></i></a>
                                                            </div>
                                                        </div>
                                                        <hr className="my-4" />
                                                    </div>
                                                );
                                            })}
                                        </div>

                                        <div className="pt-5">
                                            <h6 className="mb-0"><a href="#!" className="text-body"><i className="fas fa-long-arrow-alt-left me-2"></i>Back to shop</a></h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 bg-grey">
                                        <div className="p-5">
                                            <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                                            <hr className="my-4" />

                                            <div className="d-flex justify-content-between mb-4">
                                                <h5 className="text-uppercase">items {cart.length}</h5>
                                                <h5>{`R$ ${calcularTotal().toFixed(2)}`}</h5>
                                            </div>

                                            <h5 className="text-uppercase mb-3">Shipping</h5>

                                            <div className="mb-4 pb-2">
                                                <select className="form-select form-select-sm">
                                                    <option value="1">Standard-Delivery- R$5.00</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                    <option value="4">Four</option>
                                                </select>
                                            </div>

                                            <h5 className="text-uppercase mb-3">Give code</h5>

                                            <div className="mb-5">
                                                <div className="form-outline">
                                                    <input
                                                        type="text"
                                                        id="form3Examplea2"
                                                        className="form-control form-control-lg"
                                                    />
                                                    <label className="form-label" htmlFor="form3Examplea2">Enter your code</label>
                                                </div>
                                            </div>

                                            <hr className="my-4" />

                                            <div className="d-flex justify-content-between mb-5">
                                                <h5 className="text-uppercase">Total price</h5>
                                                <h5>{`R$ ${calcularTotal().toFixed(2)}`}</h5>
                                            </div>

                                            <button type="button" className="btn btn-dark btn-block btn-lg" data-mdb-ripple-color="dark">Register</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cart;
