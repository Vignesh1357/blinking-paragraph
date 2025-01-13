import React, { useState, useEffect } from "react";

const RandomColorWords = ({ sentence }) => {
  const [colors, setColors] = useState([]);

  // Generate a random color
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    return `#${Array.from({ length: 6 })
      .map(() => letters[Math.floor(Math.random() * 16)])
      .join("")}`;
  };

  useEffect(() => {
    // Initialize colors for each word
    const words = sentence.split(" ");
    setColors(words.map(() => getRandomColor()));

    const interval = setInterval(() => {
      setColors((prevColors) => prevColors.map(() => getRandomColor()));
    }, 1000);

    return () => clearInterval(interval);
  }, [sentence]);

  return (
    <div style={{ wordBreak: "break-word" }}>
      {sentence.split(" ").map((word, index) => (
        <span key={index} style={{ color: colors[index], marginRight: "8px" }}>
          {word}
        </span>
      ))}
    </div>
  );
};

export default function App() {
  return (
    <div>
      <h1>Color Changing Words</h1>
      <RandomColorWords sentence="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel turpis mattis risus auctor vehicula ut a est. Nam metus mi, condimentum ut leo in, aliquam elementum quam. Aenean mattis aliquet placerat. Maecenas pulvinar tortor eget nunc accumsan volutpat. Suspendisse at finibus ante, at viverra dolor. Nunc congue consequat metus, in bibendum massa pretium eget. Nullam in massa eget velit pulvinar feugiat vitae id magna. Phasellus vel dui et turpis fringilla venenatis a eget nunc. In dolor massa, maximus in vehicula sed, aliquet et mi. Nulla blandit arcu at purus laoreet facilisis. Duis congue accumsan mauris, vel rutrum lorem laoreet quis. Sed ultrices accumsan nisl. Aliquam fringilla mollis ornare. Quisque egestas sit amet arcu eu blandit. Sed maximus nunc ac nisl blandit molestie. Nunc felis libero, dictum id dolor vitae, laoreet bibendum lacus. Ut quam nunc, scelerisque in magna ac, convallis sollicitudin arcu. Sed placerat diam libero, a sollicitudin sapien placerat in. Donec id lacinia diam. Nullam gravida euismod risus, eu vehicula mi egestas sed. Nullam in gravida augue, non mattis ipsum. Aliquam erat volutpat. In mollis velit ut mi feugiat, nec mattis augue vestibulum. Integer ultrices mi libero, id ullamcorper nisl posuere vitae. Pellentesque porta turpis sit amet augue tincidunt fermentum. Curabitur tristique sem nunc, sit amet laoreet tellus egestas sed. Pellentesque vitae lectus sit amet lectus condimentum varius et eget mi." />
    </div>
  );
}
