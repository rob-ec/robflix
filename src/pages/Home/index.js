import React from 'react';
import dadosIniciais from '../../data/dados_iniciais.json';
import PageDefault from '../PageDefault';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';

function Home() {
  return (
    <PageDefault>

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"I made this with the intention of avoiding major spoilers for a friend who's currently watching One Piece for the first time and is only up to the Davy Back Fight arc. It was admittedly a challenge, but it was kind of fun too! This is supposed to be a bit of a teaser for what's to come plus an amv he can actually watch haha. This song suits One Piece very well as almost every character has been shaped by pain, in both good ways and bad."}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />
      
      <Carousel
        category={dadosIniciais.categorias[3]}
      />

      <Carousel
        category={dadosIniciais.categorias[4]}
      />

      <Carousel
        category={dadosIniciais.categorias[5]}
      />

    </PageDefault>
  );
}

export default Home;
