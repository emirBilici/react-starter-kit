import {createElement, Fragment} from 'react';
import Button from './components/Button';
import Tab from './components/Tab';
import './tailwind.css';

function App() { 
//  const body = document.body;

//  let main = document.createElement('main')
//    , h1 = document.createElement('h1');

//  h1.innerText = `I'm learning React!`;

//  body.appendChild(main);
//  main.appendChild(h1);
/*

  const todos = [ 
    'Todo 1',
    'Todo 2',
    'Todo 3'
  ];

  const h2 = createElement("h1", {
    id: "title"
  }, "My Todos..");
  const ul = createElement("ul", null, todos.map((todo, index) => (
    <li key={index}>{todo}</li>
  )));

  return createElement("main", null, h2, ul);

  return(
    <main>
      <h1>My Todos..</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </main>
  );

  const h1 = createElement("h1", null, "This is an title.")
  return createElement("main", null, h1);

  return createElement('h1', {
    id: "big-title",
    className: "title",
    onClick: function(e) {
      console.log(e);
    }
  }, "This is an title.");
*/

  /*function Button(props) {
    return <button type="button">{props.text}</button>
  }*/

  const name = "Emir";

  const inputStyles = {
    backgroundColor: 'red',
    color: '#fff'
  };

  return(
    <>
      <div style={{padding: 20}}>
        <Tab activeTab={1}>
          <Tab.panel title="Hakkında">1st tab panel</Tab.panel>
          <Tab.panel title="Ayarlar">2nd tab panel</Tab.panel>
          <Tab.panel title="Hesabım">3rd tab panel</Tab.panel>
        </Tab>
      </div>
    
      <div style={{padding: 20}}>
        <Button>
            Default Button
        </Button>
        <Button variant="success">
          Success Button
        </Button>
        <Button variant="danger">
          Danger Button
        </Button>
        <Button variant="warning">
          Warning Button
        </Button>
        {/*<label htmlFor="u">Username</label>
        <input type="text" id="u" style={inputStyles} />*/}
      </div>
    </>
  );

}

export default App;