
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../PageDefault';
import Button from '../../../components/Button';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const defaultCategory = {
    name: 'Vídeos',
    description: 'Os melhores vídeos dos melhores canais',
    color: '#ffffff'
  };
  const [categories, setCategories] = useState([defaultCategory]);
  const [category, setCategory] = useState(defaultCategory);

  function handleChange(e) {
    setCategory({
      ...category,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setCategories([
      ...categories,
      category
    ]);
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: <span style={{ color: category.color }}>{category.name}</span></h1>

      <form onSubmit={handleSubmit}>
        {/*STATE*/}

        <FormField
          label='Nome da Categoria:'
          name='name'
          type='text'
          value={category.name}
          onChange={handleChange}
        />

        <FormField
          label='Descrição:'
          name='description'
          type="text-area"
          value={category.description}
          onChange={handleChange}
        />

        <FormField
          label='Cor:'
          name="color"
          type="color"
          value={category.color}
          onChange={handleChange}
        />

        <button onClick={handleSubmit}>
          Cadastrar
        </button>
      </form>

      <ul>
        {categories.map((category, index) => {
          return (
            <li key={`${category.name}${index}`} style={{ color: category.color }}>{category.name}</li>
          );
        })}
      </ul>

      <Button as={Link} to="/">
        Ir para home
      </Button>
    </PageDefault>
  )
}

export default CadastroCategoria;