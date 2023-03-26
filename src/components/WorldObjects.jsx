import React, { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import WorldObjectCard from "./WorldObjectCard";

const World = () => {
  const [selectedCategory, setSelectedCategory] = useState("Characters");

  const characters = [
    {
      name: "Harry Potter",
      description: "A wizard and the main protagonist of the series.",
      img: "../assets/harry.jpg.webp",
    },
    {
      name: "Hermione Granger",
      description: "A witch and Harry's best friend.",
      img: "../assets/hermione.jpeg",
    },
    {
      name: "Ron Weasley",
      description: "A wizard and Harry's best friend.",
      img: "../assets/ron.jpeg",
    },
  ];

  const creatures = [
    {
      name: "Hippogriff",
      description:
        "A magical creature with the front legs, wings, and head of a giant eagle, and the body, hind legs, and tail of a horse.",
      img: "../assets/hippogriff.webp",
    },
    {
      name: "Basilisk",
      description: "A giant serpent that can kill people with its gaze.",
      img: "../assets/basilisk.webp",
    },
    {
      name: "Dragon",
      description:
        "A large, fire-breathing reptile that is often featured in mythology and fantasy literature.",
      img: "../assets/dragon.png",
    },
  ];

  const places = [
    {
      name: "Hogwarts School of Witchcraft and Wizardry",
      description:
        "A fictional school of magic where the main characters attend.",
      img: "../assets/hogwarts.jpeg",
    },
    {
      name: "Diagon Alley",
      description: "A magical shopping street located in London.",
      img: "../assets/diagon.webp",
    },
    {
      name: "Forbidden Forest",
      description:
        "A dense forest in the wizarding world that is forbidden to students at Hogwarts.",
      img: "../assets/forrest.webp",
    },
  ];

  const worldObjects = {
    Characters: characters,
    Creatures: creatures,
    Places: places,
  };

  const handleButtonClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <ButtonGroup>
        <Button
          variant={selectedCategory === "Characters" ? "primary" : "secondary"}
          style={{
            backgroundColor: "rgba(0,81,85,1)",
            borderColor: "transparent",
            opacity: selectedCategory === "Characters" ? 1 : 0.7,
          }}
          onClick={() => handleButtonClick("Characters")}
        >
          Characters
        </Button>
        <Button
          variant={selectedCategory === "Creatures" ? "primary" : "secondary"}
          style={{
            backgroundColor: "rgba(0,81,85,1)",
            borderColor: "transparent",
            opacity: selectedCategory === "Creatures" ? 1 : 0.7,
          }}
          onClick={() => handleButtonClick("Creatures")}
        >
          Creatures
        </Button>
        <Button
          variant={selectedCategory === "Places" ? "primary" : "secondary"}
          style={{
            backgroundColor: "rgba(0,81,85,1)",
            borderColor: "transparent",
            opacity: selectedCategory === "Places" ? 1 : 0.7,
          }}
          onClick={() => handleButtonClick("Places")}
        >
          Places
        </Button>
      </ButtonGroup>
      <div
        style={{
          marginTop: "20px",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        {worldObjects[selectedCategory].map((object, index) => (
          <WorldObjectCard
            img={object.img}
            title={object.name}
            description={object.description}
          />
        ))}
      </div>
    </div>
  );
};

export default World;
