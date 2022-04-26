import './App.css';
import Button from './components/Button';

function App() {

  const createButtons = () => {
    let names = ["Aaberg","Aalst","Aara","Aaren","Aarika","Aaron","Aaronson","Ab","Aba"]
    return names.map(name => {
      return <Button firstName={name} />
    })
    // let buttonsArr = [];
    // for (let i = 0; i < names.length; i++) {
    //   buttonsArr.push(<Button key={i} firstName={names[i]} />)
    // }
    // return buttonsArr
  }

  return (
    <div className="App">
    <h1> This is my button clicking app</h1>
      {
        createButtons()
      }
    </div>
  );
}

export default App;
