import React, { useState, useEffect } from "react";
import AngleFish1 from "../../public/Assets/AngleFish1.png";
import ACrab1 from "../../public/Assets/ACrab1.png";
import AnglerFish1 from "../../public/Assets/AnglerFish1.png";
import Bass1 from "../../public/Assets/Bass1.png";
import BOcto1 from "../../public/Assets/BOcto1.png";
import BWhale1 from "../../public/Assets/BWhale1.png";
import Clownfish1 from "../../public/Assets/Clownfish1.png";
import Dolphin1 from "../../public/Assets/Dolphin1.png";
import Flounder1 from "../../public/Assets/Flounder1.png";
import HWhale1 from "../../public/Assets/HWhale1.png";
import Orca1 from "../../public/Assets/Orca1.png";
import OTurtle1 from "../../public/Assets/OTurtle1.png";
import Penguin1 from "../../public/Assets/Penguin1.png";
import POcto1 from "../../public/Assets/POcto1.png";
import Seahorse1 from "../../public/Assets/Seahorse1.png";
import Seal1 from "../../public/Assets/Seal1.png";
import Shark1 from "../../public/Assets/Shark1.png";
import Shrimp1 from "../../public/Assets/Shrimp1.png";
import Urchin1 from "../../public/Assets/Urchin1.png";
import Walrus1 from "../../public/Assets/Walrus1.png";

const photoGroups = [
  AngleFish1,
  ACrab1,
  AnglerFish1,
  Bass1,
  BOcto1,
  BWhale1,
  Clownfish1,
  Dolphin1,
  Flounder1,
  HWhale1,
  Orca1,
  OTurtle1,
  Penguin1,
  POcto1,
  Seahorse1,
  Seal1,
  Shark1,
  Shrimp1,
  Urchin1,
  Walrus1,
];

const generateCards = () => {
  const cards = [];
  for (let i = 0; i < 2; i++) {
    photoGroups.forEach((photo, index) => {
      cards.push({
        id: index + i * photoGroups.length,
        photo,
        isFlipped: false,
        isMatched: false,
      });
    });
  }
  return shuffle(cards);
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const Game = () => {
  const [cards, setCards] = useState(generateCards());
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [firstCard, secondCard] = flippedCards;

      if (firstCard.photo === secondCard.photo) {
        setMatchedPairs([...matchedPairs, firstCard.photo]);
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.id === firstCard.id || card.id === secondCard.id
              ? { ...card, isMatched: true, isFlipped: true }
              : card
          )
        );
      } else {
        setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((card) =>
              card.id === firstCard.id || card.id === secondCard.id
                ? { ...card, isFlipped: false }
                : card
            )
          );
        }, 1000);
      }

      setTimeout(() => {
        setFlippedCards([]);
      }, 1000);
    }
  }, [flippedCards, matchedPairs]);

  const handleCardClick = (id) => {
    const selectedCard = cards.find((card) => card.id === id);

    if (
      flippedCards.length < 2 &&
      !selectedCard.isFlipped &&
      !selectedCard.isMatched
    ) {
      setFlippedCards([...flippedCards, selectedCard]);
      setCards((prevCards) =>
        prevCards.map((card) =>
          card.id === id ? { ...card, isFlipped: true } : card
        )
      );
    }
  };

  return (
    <div
      style={{
        width: "100%", // Take full width
        display: "flex",
        justifyContent: "center", // Center the content horizontally
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(8, 100px)",
          gap: "10px",
        }}
      >
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => handleCardClick(card.id)}
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: "white",
              border: `5px solid ${card.isMatched ? "green" : "#ccc"}`, // Green border for matched cards
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              ":hover": {
                backgroundColor: "#f0f0f0",
              },
            }}
            className={`card ${card.isFlipped ? "flipped" : ""} ${
              card.isMatched ? "matched" : ""
            }`}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                perspective: "1000px",
                transform: card.isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                position: "relative",
              }}
            >
              {card.isFlipped || card.isMatched ? (
                <img
                  src={card.photo}
                  alt={`Card ${card.id}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              ) : (
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#333",
                    color: "white",
                    fontSize: "24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "absolute",
                    backfaceVisibility: "hidden",
                  }}
                >
                  ?
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Game;
