import logo from './logo.svg';
import './App.css';
function Clicked(){
  alert("You clicked me!");
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>About me</p>
        <ul>
          <li>
            Name: <input type="text" value={'Vadim'} />
            <button id="btn_save" onClick={Clicked}>Save</button>
            <button id="btn_return">Return</button>
          </li>
          <li>
            Surname: <input type="text" value={'Teslitskiy'} />
            <button id="btn_save">Save</button>
            <button id="btn_return">Return</button>
          </li>
          <li>
            Age: <input type="text" value={18} />
            <button id="btn_save">Save</button>
            <button id="btn_return">Return</button>
          </li>
          <li>
            Email:
            <input type="text" value={'vadimteslitskiy0@gmail.com'} />
            <button id="btn_save">Save</button>
            <button id="btn_return">Return</button>
          </li>
          <li>
            Phone: <input type="text" value={'+380947508910'} />
            <button id="btn_save">Save</button>
            <button id="btn_return">Return</button>
          </li>
        </ul>
        <p>Skills</p>
        <ul>
          <li>
            <input type="text" value={'HTML'} />
            <button id="btn_save">Save</button>
            <button id="btn_return">Return</button>
          </li>
          <li>
            <input type="text" value={'CSS'} />
            <button id="btn_save">Save</button>
            <button id="btn_return">Return</button>
          </li>
          <li>
            <input type="text" value={'JavaScript'} />
            <button id="btn_save">Save</button>
            <button id="btn_return">Return</button>
          </li>
          <li>
            <input type="text" value={'React'} />
            <button id="btn_save">Save</button>
            <button id="btn_return">Return</button>
          </li>
          <li>
            <input type="text" value={'MongoDB'} />
            <button id="btn_save">Save</button>
            <button id="btn_return">Return</button>
          </li>
          <li>
            <input type="text" value={'.NET'} />
            <button id="btn_save">Save</button>
            <button id="btn_return">Return</button>
          </li>
          <li>
            <input type="text" value={'Angular'} />
            <button id="btn_save">Save</button>
            <button id="btn_return">Return</button>
          </li>
          <li>
            <input type="text" value={'SQL'} />
            <button id="btn_save">Save</button>
            <button id="btn_return">Return</button>
          </li>
          <li>
            <input type="text" value={'PHP'} />
            <button id="btn_save">Save</button>
            <button id="btn_return">Return</button>
            <li>
              <input type="text" value={'Magento 2'} />
              <button id="btn_save">Save</button>
              <button id="btn_return">Return</button>
            </li>
            <li>
              <input type="text" value={'C'} />
              <button id="btn_save">Save</button>
              <button id="btn_return">Return</button>
            </li>
            <li>
              <input type="text" value={'C#'} />
              <button id="btn_save">Save</button>
              <button id="btn_return">Return</button>
            </li>
            <li>
              <input type="text" value={'C++'} />
              <button id="btn_save">Save</button>
              <button id="btn_return">Return</button>
            </li>
          </li>
        </ul>
        <p>Languages</p>
        <ul>
          <li>
            <input type="text" value={'Ukr'} />
            <button id="btn_save">Save</button>
            <button id="btn_return">Return</button>
          </li>
          <li>
            <input type="text" value={'Eng'} />
            <button id="btn_save">Save</button>
            <button id="btn_return">Return</button>
          </li>
          <li>
            <input type="text" value={'Rus'} />
            <button id="btn_save">Save</button>
            <button id="btn_return">Return</button>
          </li>
          <li>
            <input type="text" value={'Nor'} />
            <button id="btn_save">Save</button>
            <button id="btn_return">Return</button>
          </li>
        </ul>
        <p>Education</p>
        <ul>
          <li>
            <input type="text" value={'IT Step Academy'} />
            <button id="btn_save">Save</button>
            <button id="btn_return">Return</button>
          </li>
        </ul>
        <br></br>
      </header>

      <footer className="App-Footer">
        <a
          className="App-link"
          href="https://github.com/Demonity543"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </footer>
    </div>
  );
}

export default App;