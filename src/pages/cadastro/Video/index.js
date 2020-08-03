import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../PageDefault';
import Button from '../../../components/Button';

function CadastroVideo() {
  return (
    <PageDefault>
      <h1>Cadastro de Vídeo</h1>
      <Button as={Link} to="/cadastro/categoria">
        Cadastrar
      </Button>
    </PageDefault>
  );
}

export default CadastroVideo;
