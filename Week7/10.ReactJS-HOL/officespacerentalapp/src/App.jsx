function App() {
  const element = "Office Space";

  const jsxatt = (
    <img
      src="/OfficePhoto.jpg"
      width="25%"
      height="25%"
      alt="Office Space"
    />
  );

  const ItemName = {
    Name: "DBS",
    Rent: 50000,
    Address: "Chennai"
  };

  const rentStyle = {
    color: ItemName.Rent <= 60000 ? 'red' : 'green',
    fontWeight: 'bold'
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial", textAlign: "center" }}>
      <h1>{element} , at Affordable Range</h1>
      {jsxatt}
      <h2>Name: {ItemName.Name}</h2>
      <h3 style={rentStyle}>Rent: Rs. {ItemName.Rent}</h3>
      <h3>Address: {ItemName.Address}</h3>
    </div>
  );
}

export default App;
