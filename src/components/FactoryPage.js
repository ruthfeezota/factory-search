import React, {Component, ReactDOM} from 'react';
import './FactoryPage.css'
import Navbar from './Navbar';
import factory from './TemplateData.json'
import FactoryButton from './FactoryButton';


class FactoryHeroBanner  extends Component  {
    render(){
        return (
            <>
            <Navbar />
            
              {factory.map((item) => (
                <div key={item.id}>
                     <img src={item.banner} alt="Hero Banner" className="hero-image" />
                     <div className="hero-content">
                  <h1 className="hero-title">{item.title}</h1>
                <div className="hero-buttons">
                <button className="hero-button">View Products</button>
                <button className="hero-button">Contact Us</button>
                </div>
                  <p>{item.description}</p>
                  </div>
                  <FactoryButton/>
                </div>
              ))}
           
            
            </>
            
          );
        }
        
      };
    



        //   <img src={HeaderBanner} alt="Hero Banner" className="hero-image" />
        //   <div className="hero-content">
        //     <h1 className="hero-title">Welcome to My Factory</h1>
        //     <div className="hero-buttons">
        //       <button className="hero-button">View Products</button>
        //       <button className="hero-button">Contact Us</button>
        //     </div>
        //   </div>
        
 


export default FactoryHeroBanner ;
