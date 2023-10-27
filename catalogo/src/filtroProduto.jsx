import React from 'react';

function CategoryFilter({ categorias, categoriaSelecionada, onCategoriaSelecionada }) {
  
  return (
    <div>
      <label htmlFor="category">Filtrar por Categoria:</label>
      <select
        id="category"
        value={categoriaSelecionada}
        onChange={(e) => onCategoriaSelecionada(e.target.value)}
        className="form-select form-select-sm"
      >
        <option value="">Todas as Categorias</option>

        {categorias.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}

      </select>
    </div>
  );
}

export default CategoryFilter;
