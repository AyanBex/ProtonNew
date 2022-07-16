import "./navbar2.css";
import { useState, useEffect, isValidElement } from "react";
import { items } from "../actions/user";
import { saveAs } from "file-saver";
import { DefaultContext } from "../Context";
import { useContext } from "react";

// jshint ignore:start

const ContentPage = () => {
  const [images, setImages] = useState();
  const [imagesFilter, setImagesFilter] = useState();
  const [downloadImage, setDownloadImage] = useState();

  const { title } = useContext(DefaultContext);

  useEffect(() => {
    items(title).then((response) => {
      setImages(response);
      setImagesFilter(response);
      setDownloadImage(response);
    });
  }, []);

  const FilterCategory = (ind) => {
    let arr = [];
    let typer = titles2[ind];
    images.forEach((element) => {
      if (element.category == typer) {
        arr.push(element);
      }
    });
    setImagesFilter(arr);
  };

  const titles2 = ["Белый Шымкентский", "Черный Астанчанин", "Красный огурец"];

  const ImageUploader = (ind) => {
    let arr = [];
    console.log("hey");
    let type = titles[ind];

    images.forEach((element) => {
      if (element.title == type) {
        console.log("Get");
        saveAs(element.image, "image.jpg");
      }
    });

    setDownloadImage(arr);
  };

  const titles = ["Белый Шымкентский", "Черный Астанчанин", "Красный огурец"];
  // const id = Number(match.params.title);
  // const cardToShow = images.find((item) => item.title === id);

  return (
    <div className="secondpage">
      <div className="products1">
        {images ? (
          <>
            {images.map((item, index) =>
              item.type == "Сторис" ||
              item.type == "Пост" ||
              item.type == "Хайлайт" ? (
                <div key={index} className="subproduct1">
                  <div className="page1">
                    <div className="el1" onClick={() => ImageUploader(index)}>
                      <img
                        className="iproduct1"
                        src={item.image}
                        alt="template"
                      />
                      <p className="stproduct1">{item.type}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <> </>
              )
            )}
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ContentPage;
