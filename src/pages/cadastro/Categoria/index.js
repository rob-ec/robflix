import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import config from '../../../config';
import useForm from '../../../hooks/useForm';
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
  const { handleChange, clearForm, values } = useForm(defaultCategory);

  function handleSubmit(e) {
    e.preventDefault();

    setCategories([
      ...categories,
      values,
    ]);

    clearForm();
  }

  useEffect(() => {
    fetch(`${config.CONFIG_DB_HOST}/categorias`)
      .then(async (serverResponse) => {
        const response = await serverResponse.json();
        setCategories([
          ...response,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        <span style={{ color: values.color }}>
          {values.name}
        </span>
      </h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Nome da Categoria"
          name="name"
          type="text"
          value={values.name}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          name="description"
          type="textarea"
          value={values.description}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          name="color"
          type="color"
          value={values.color}
          onChange={handleChange}
        />

        <Button onClick={handleSubmit} type="submit">
          Cadastrar
        </Button>
      </form>

      <ul>
        {categories.map((item, index) => (
          <li key={`${item.titulo}${index + 0}`} style={{ color: item.cor }}>{item.titulo}</li>
        ))}
      </ul>

      <Button as={Link} to="/">
        Ir para home
      </Button>
    </PageDefault>
  );
}

export default CadastroCategoria;
