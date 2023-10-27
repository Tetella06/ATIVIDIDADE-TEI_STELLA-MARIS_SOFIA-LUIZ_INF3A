import React from 'react';

function PriceRangeFilter({ faixaSelecionada, onFaixaSelecionada }) {
    return (
        <div>
            <label htmlFor="priceRange">Filtrar por Faixa de Preço:</label>
            <select
                className="form-select form-select-sm"
                id="priceRange"
                value={faixaSelecionada}
                onChange={(e) => onFaixaSelecionada(e.target.value)}
            >
                <option value="">Todas as Faixas de Preço</option>
                <option value="1000-3500">R$1000 - R$3500</option>
                <option value="3501-6000">R$3501 - R$6000</option>
                <option value="6001-8500">R$6001 - R$8500</option>
                <option value="8501-11000">R$8501 - R$11000</option>
            </select>
        </div>
    );
}

export default PriceRangeFilter;
