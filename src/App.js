function App() {
  return (
    <div className="App">
      {process.env.NODE_ENV === "development" && (
          <h3>Hello World from React!</h3>
      )}
      <p>{process.env.REACT_APP_API_URL}</p>
    </div>
  );
}

export default App;