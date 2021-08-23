import logo from './logo.svg';
import React from 'react';
import Jumbotron from './Jumbotron';
import Navbar from './Navbar';
import Card from  './Card';
import Footer from './footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <Jumbotron />
        <Card titulo1="sup bruh" titulo2="Hello" titulo3="tech news"imagen1="http://lorempixel.com/output/food-q-c-500-325-2.jpg" imagen2="http://lorempixel.com/output/nightlife-q-c-500-325-4.jpg" imagen3="http://lorempixel.com/400/200/sports/Dummy-Text/" texto1="Life is like riding a bicycle. To keep your balance, you must keep moving." texto2="Elementary, my dear Watson." texto3="I love the smell of napalm in the morning."/>
        
        <Card titulo1="science" titulo2="titulo 2" titulo3="Hello"imagen1="http://lorempixel.com/output/nightlife-q-c-500-325-8.jpg" imagen2="http://lorempixel.com/output/abstract-q-c-500-325-6.jpg" imagen3="http://dummy-images.com/people/dummy-375x500-Apollo11.jpg" texto1="Life is like riding a bicycle. To keep your balance, you must keep moving." texto2="Not all those who wander are lost." texto3="I love the smell of napalm in the morning."/>
        
        <Card titulo1="sup bruh" titulo2="Hello" titulo3="news"texto1="Knowledge is power" texto2="Speak softly and carry a big stick" texto3="Not all those who wander are lost." imagen1="http://dummy-images.com/sport/dummy-454x280-SkiJumping.jpg" imagen2="http://dummy-images.com/people/dummy-375x500-Apollo11.jpg" imagen3="https://www.fillmurray.com/640/360"/>

        <Card titulo1="sup bruh" titulo2="Hello" titulo3="tech news" imagen1="http://lorempixel.com/output/food-q-c-500-325-2.jpg" imagen2="http://lorempixel.com/output/abstract-q-c-500-325-6.jpg" imagen3="https://www.fillmurray.com/640/360" texto1="If you want something done right, do it yourself" texto2="Elementary, my dear Watson." texto3="Knowledge is power."/>
        <Footer />  
        
        
        
       

        
          
        

      
        
      </div>
      
       
      
      


      


    </div>
  );
}

export default App;
