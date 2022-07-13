import "./navbar2.css";
import Footer from "../1page/footer";

// jshint ignore:start

const mainarr = [
  {
    title: "Business",
    arr: [
      {
        title: "apple",
        type: "5 posts, 16 stories, 8 highlights",
        img: require("../imgs/product1.jpg"),
      },
      {
        title: "pen",
        type: "3 posts, 12 stories, 6 highlights",
        img: require("../imgs/product1.jpg"),
      },
      {
        title: "sen",
        type: "7 posts, 7 stories, 5 highlights",
        img: require("../imgs/product1.jpg"),
      },
      {
        title: "men",
        type: "3 posts, 12 stories, 6 highlights",
        img: require("../imgs/product1.jpg"),
      },
      {
        title: "Banana",
        type: "5 posts, 16 stories, 8 highlights",
        img: require("../imgs/product1.jpg"),
      },
      {
        title: "Pineapple",
        type: "5 posts, 16 stories, 8 highlights",
        img: require("../imgs/product1.jpg"),
      },
    ],
  },
  {
    title: "Blog",
    arr: [
      {
        title: "apple",
        type: "5 posts, 16 stories, 8 highlights",
        img: require("../imgs/product1.jpg"),
      },
      {
        title: "pen",
        type: "3 posts, 12 stories, 6 highlights",
        img: require("../imgs/product1.jpg"),
      },
      {
        title: "sen",
        type: "7 posts, 7 stories, 5 highlights",
        img: require("../imgs/product1.jpg"),
      },
      {
        title: "men",
        type: "3 posts, 12 stories, 6 highlights",
        img: require("../imgs/product1.jpg"),
      },
      {
        title: "Banana",
        type: "5 posts, 16 stories, 8 highlights",
        img: require("../imgs/product1.jpg"),
      },
      {
        title: "Pineapple",
        type: "5 posts, 16 stories, 8 highlights",
        img: require("../imgs/product1.jpg"),
      },
    ],
  },
  {
    title: "Creativity",
    arr: [
      {
        title: "apple",
        type: "5 posts, 16 stories, 8 highlights",
        img: require("../imgs/product1.jpg"),
      },
      {
        title: "pen",
        type: "3 posts, 12 stories, 6 highlights",
        img: require("../imgs/product1.jpg"),
      },
      {
        title: "sen",
        type: "7 posts, 7 stories, 5 highlights",
        img: require("../imgs/product1.jpg"),
      },
      {
        title: "men",
        type: "3 posts, 12 stories, 6 highlights",
        img: require("../imgs/product1.jpg"),
      },
      {
        title: "Banana",
        type: "5 posts, 16 stories, 8 highlights",
        img: require("../imgs/product1.jpg"),
      },
      {
        title: "Pineapple",
        type: "5 posts, 16 stories, 8 highlights",
        img: require("../imgs/product1.jpg"),
      },
    ],
  },
];

const SecondPage = () => {
  return (
    <div className="secondpage">
      <div className="navbar2">
        <a href="/logo" className="logo">
          Proton
        </a>
        <div className="links1">
          <a href="/about" className="a1">
            Шаблоны
          </a>
          <a href="/action" className="a1">
            Категории
          </a>
          <a href="/comm" className="a1">
            Цены
          </a>
        </div>
        <div className="links2">
          <a href="/login" className="login">
            Войти
          </a>
          <a className="button" href="/registration">
            Регистрация
          </a>
        </div>
      </div>
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
          <img className="filter" src={require("../imgs/filter.png")} />
        </div>
      </div>
      <div className="products1">
        {mainarr.map((item, index) => (
          <div className="subproduct1">
            <p className="tproduct1">{item.title}</p>
            <div className="page1">
              {item.arr.map((item, index) => (
                <div className="el1" key={index}>
                  <img className="iproduct1" src={item.img} />
                  <p className="stproduct1">{item.title}</p>
                  <p className="mstproduct1">{item.type}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};
// jshint ignore:end

export default SecondPage;
