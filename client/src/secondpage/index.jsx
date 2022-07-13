import "./navbar2.css";
import { useState, useEffect } from "react";
import { items } from "../actions/user";

const SecondPage = () => {
  const [images, setImages] = useState();

  useEffect(() => {
    items().then((response) => setImages(response));
  }, [])

  return (
    <div className="secondpage">
      <div className="searcher">
        <form className="SecPageForm">
          <input
            className="SecPageInput"
            // value={values.name}
            // onChange={handleInputChange}
            name="search"
            placeholder="Поиск категорий"
          />
        </form>
        <div className="filterpack">
          <img className="filter" src={require("../imgs/filter.png")} alt="filter icon"/>
        </div>
      </div>
      <div className="products1">
        {images ? <>{images.map((item, index) => 
          <div key={index} className="subproduct1">
            <p className="tproduct1">{item.title}</p>
            <div className="page1">
                <div className="el1">
                  <img className="iproduct1" src={item.image} alt="template"/>
                  <p className="stproduct1">{item.title}</p>
                  <p className="mstproduct1">{item.subtitle}</p>
                </div>
            </div>
          </div>)}</> : <></>} 
      </div>
    </div>
  );
};

export default SecondPage;
