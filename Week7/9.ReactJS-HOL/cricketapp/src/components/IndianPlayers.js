import React from "react";

const IndianPlayers = () => {
  const players = [
    "Sachin1",
    "Dhoni2",
    "Virat3",
    "Rohit4",
    "Yuvraj5",
    "Raina6",
  ];

  const oddPlayers = players.filter((_, i) => i % 2 === 0);
  const evenPlayers = players.filter((_, i) => i % 2 !== 0);

  const T20players = [
    "Mr. First Player",
    "Mr. Second Player",
    "Mr. Third Player",
  ];
  const ranjiPlayers = [
    "Mr. Fourth Player",
    "Mr. Fifth Player",
    "Mr. Sixth Player",
  ];
  const mergedPlayers = [...T20players, ...ranjiPlayers];

  return (
    <div>
      <h2>Odd Players</h2>
      <ul>
        {oddPlayers.map((p, i) => (
          <li key={i}>
            {`${["First", "Third", "Fifth"][i] || "Player"} : ${p}`}
          </li>
        ))}
      </ul>

      <hr />

      <h2>Even Players</h2>
      <ul>
        {evenPlayers.map((p, i) => (
          <li key={i}>
            {`${["Second", "Fourth", "Sixth"][i] || "Player"} : ${p}`}
          </li>
        ))}
      </ul>

      <hr />

      <h2>List of Indian Players Merged:</h2>
      <ul>
        {mergedPlayers.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
