import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../PageDefault';
import Button from '../../../components/Button';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const defaultCategory = {
    name: '',
    description: '',
    color: '',
  };
  const [categories, setCategories] = useState([defaultCategory]);
  const [category, setCategory] = useState(defaultCategory);

  function handleChange(e) {
    setCategory({
      ...category,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setCategories([
      ...categories,
      category,
    ]);
  }

  useEffect(() => {
    if (window.location.href.includes('localhost')) {
      const URL = 'https://robflix-sigma.herokuapp.com/categorias';
      fetch(URL).then(async (serverResponse) => {
        if (serverResponse.ok) {
          const response = await serverResponse.json();
          setCategories(response);
          return;
        }
        throw new Error('Não foi possível pegar os dados');
      });
    }
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        <span style={{ color: category.color }}>
          {category.name}
        </span>
      </h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Nome da Categoria"
          name="name"
          type="text"
          value={category.name}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          name="description"
          type="textarea"
          value={category.description}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          name="color"
          type="color"
          value={category.color}
          onChange={handleChange}
        />

        <Button onClick={handleSubmit} type="submit">
          Cadastrar
        </Button>
      </form>

      <ul>
        {categories.map((item, index) => (
          <li key={`${item.titulo}${index}`} style={{ color: item.cor }}>{item.titulo}</li>
        ))}
      </ul>

      <Button as={Link} to="/">
        Ir para home
      </Button>
    </PageDefault>
  );
}

export default CadastroCategoria;
