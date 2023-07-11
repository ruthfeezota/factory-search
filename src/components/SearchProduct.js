import React, {useState} from "react";
import './SearchPage.css';
import data from "./TemplateDataProduct.json";
import Footer from "./Footer";
import Navbar from "./Navbar";


function SearchProduct() {
    const [searchTerm, setSearchTerm] = useState("");
    return (
      <>
      <Navbar />
        <div className="searchContainer">
          <div className="searchInput_Container">
            <input id="searchInput" type="text" placeholder="Search by name or location..." onChange={(event) => {
              setSearchTerm(event.target.value);
            }} />
          </div>
          <div className="search_Container">
            {
              data
                .filter((val) => {
                  if(searchTerm == ""){
                    return val;
                  }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val;
                  }else if(val.location.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val;
                  }
                })

                .map((val) => {
                  return(
                    <div className="template" key={val.id}>
                        <img src={val.image} alt="" />
                        <h3>{val.title}</h3>
                        <h5>{val.price}</h5>
                        <p className="description">{val.description}</p>
                        <ul className="location" >
                        <li>{val.location}</li>

                        </ul>
                        <ul className="location" >
                        <li>{val.industry}</li>
                        </ul>
                    </div>

                  )
                })
            }
          </div>
          <Footer/>
        </div>
      </>
    )
    
  }


export default SearchProduct;