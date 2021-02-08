import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
// import Footer from "../components/Footer";
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

// const API = "http://localhost:3000/initalState"; Ya no se necesita

const Home = ({ myList, trends, originals }) => {
  // const initialState = useInitialState(API);
  return (
    //Ya no tengo que validar si tengo o no tengo datos
    <>
      <Header />
      <Search isHome />
      {myList.length > 0 && (
        <Categories title='Mi Lista'>
          <Carousel>
            {myList.map(item => (
              <CarouselItem key={item.id} {...item} isList />
            ))}
          </Carousel>
        </Categories>
      )}
      <Categories title='Tendencias'>
        <Carousel>
          {trends.map(item => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
      <Categories title='Originales de Platzi Video'>
        <Carousel>
          {originals.map(item => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
      {/* <Footer /> */}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};

// export default Home;
//connect(props, actions)
//estamos exportando un componente ya conectado a nuestro provider para utilizar el state
export default connect(mapStateToProps, null)(Home);
