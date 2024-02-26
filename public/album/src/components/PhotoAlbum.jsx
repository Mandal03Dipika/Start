import React from "react";
import { useState } from "react";
import Modal from "./Modal";
import "../style.css";

function PhotoAlbum() {
  const [modal, setModal] = useState(false);
  const photos = [
    {
      id: "0",
      name: "Cat",
      type: "Domestic",
      likes: "28",
      img_url: "../images/cat.webp",
      detail: "I am here 0",
      line:
        "The cat prowled silently through the moonlit night, a shadow among shadows.",
    },
    {
      id: "1",
      name: "Crow",
      type: "Birds",
      likes: "32",
      img_url: "../images/crow.jpg",
      detail: "I am here 1",
    },
    {
      id: "2",
      name: "Dog",
      type: "Domestic",
      likes: "18",
      detail: "I am here 2",
      img_url: "../images/dog.jpg",
    },
    {
      id: "3",
      name: "Eagle",
      type: "Birds",
      likes: "68",
      img_url: "../images/eagle.jpg",
      detail: "I am here 3",
    },
    {
      id: "4",
      name: "Kamodo-dragon",
      type: "Amphibian",
      likes: "60",
      img_url: "../images/kamodo-dragon.jpg",
      detail: "I am here 4",
    },
    {
      id: "5",
      name: "Lion",
      type: "Wild",
      likes: "90",
      img_url: "../images/lion.webp",
      detail: "I am here 5",
    },
    {
      id: "6",
      name: "Lizard",
      type: "Amphibian",
      likes: "55",
      img_url: "../images/lizard.jpg",
      detail: "I am here 6",
    },
    {
      id: "7",
      name: "Parrot",
      type: "Birds",
      likes: "108",
      img_url: "../images/parrot.avif",
      detail: "I am here 7",
    },
    {
      id: "8",
      name: "Tiger",
      type: "Wild",
      likes: "98",
      img_url: "../images/tiger.jpg",
      detail: "I am here 8",
    },
    {
      id: "9",
      name: "Hangman",
      type: "Wild",
      likes: "986",
      img_url: "../images/hangman.jpeg",
      detail: "I am here 9",
    },
    {
      id: "10",
      name: "Memory",
      type: "Wild",
      likes: "982",
      img_url: "../images/memory.jpg",
      detail: "I am here 10",
    },
    {
      id: "11",
      name: "Number",
      type: "Birds",
      likes: "98",
      img_url: "../images/number.jpg",
      detail: "I am here 11",
    },
    {
      id: "12",
      name: "Snake",
      type: "Wild",
      likes: "98",
      img_url: "../images/snake.jpg",
      detail: "I am here 12",
    },
    {
      id: "13",
      name: "Tic-Tac-Toe",
      type: "Birds",
      likes: "918",
      img_url: "../images/tic-tac-toe.jpg",
      detail: "I am here 13",
    },
  ];
  const [filteredTask, setFilteredTask] = useState(photos);
  const [search, setSearch] = useState("");
  const filterTask = (str) => {
    if (str === "all") {
      setFilteredTask(photos);
    } else {
      setFilteredTask(
        photos.filter((item) => {
          return item.type === str;
        })
      );
    }
  };

  const sort = (filteredTask) => {
    filteredTask.sort((a, b) => a.likes - b.likes);
    setFilteredTask(filteredTask);
  };

  const more = (id) => {
    console.log(id);
    var div = document.getElementsByClassName("detail");
    console.log(div);
    var index = div[id];
    console.log(index);
    index.style.display = "block";
  };

  const large = (id) => {
    var modal1 = document.getElementById("myModal");
    var img = document.getElementsByClassName("myImg");
    for (var i = 0; i < img.length; i++) {
      var filename = img[i].src.split("/").pop();
      var final_img = "../images/".concat(filename);
      if (final_img == photos[id].img_url) {
        var image = final_img;
      }
    }
    var modalImg = document.getElementById("img01");
    // var captionText = document.getElementById("caption");
    modal1.style.display = "block";
    modalImg.src = image;
    // captionText.innerHTML = image.alt;
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function () {
      modal1.style.display = "none";
    };
  };
  const addImage = (obj) => {
    const object = { ...obj };
    console.log("obj", object);
    photos.push(object);
    console.log("photo", photos);
    setFilteredTask((prev) => photos);
  };
  const del = (item) => {
    console.log(item);
    photos.splice(item.id, 1);
    setFilteredTask((prev) => photos);
  };
  const closeModal = () => {
    setModal(false);
  };
  return (
    <>
      {modal && <Modal close={closeModal} addImage={addImage} />}
      <div className="bg-dark">
        <div className="top">
          <h1 className="my-3 ml-1 head"> Photo Album</h1>
          <div className="two">
            <div
              onClick={() => {
                sort(filteredTask);
              }}
              className="btnDesign_all m-3"
            >
              Sort
            </div>
            <input
              type="text"
              placeholder="Search Photos"
              className="search"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="all gap-3 p-3 ">
          <div
            onClick={() => {
              setModal(true);
            }}
            className="btnDesign_all"
          >
            Add
          </div>
          <div
            onClick={() => {
              filterTask("all");
            }}
            className="btnDesign_all"
          >
            Show All
          </div>
          <div
            onClick={() => {
              filterTask("Domestic");
            }}
            className="btnDesign"
          >
            Domestic
          </div>
          <div
            onClick={() => {
              filterTask("Birds");
            }}
            className="btnDesign"
          >
            Birds
          </div>
          <div
            onClick={() => {
              filterTask("Amphibian");
            }}
            className="btnDesign"
          >
            Amphibian
          </div>
          <div
            onClick={() => {
              filterTask("Wild");
            }}
            className="btnDesign"
          >
            Wild
          </div>
        </div>
        <div className="pics">
          {filteredTask
            .filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.name.toLowerCase().includes(search);
            })
            .map((item, index) => (
              <div key={index} className="bg-light p-2">
                <img
                  src={item.img_url}
                  alt="xyz"
                  width="300px"
                  height="300px"
                  className="rounded myImg"
                  onClick={() => large(item.id)}
                />
                <div className="name">
                  <b>{item.name}</b>
                </div>
                <div className="smallDetail">{item.detail}</div>
                <span>Likes: </span>
                <span className="">{item.likes}</span>
                <div className="text-primary" onClick={() => more(item.id)}>
                  Read More
                </div>
                <div className="detail" style={{ display: "none" }}>
                  {item.detail}
                </div>
                <div>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      del(item);
                    }}
                  >
                    Del
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div id="myModal" className="modal">
        <span className="close">×</span>
        <img className="modal-content" id="img01" />
        {/* <div id="caption" /> */}
      </div>
    </>
  );
}

export default PhotoAlbum;
