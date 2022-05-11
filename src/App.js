import "./App.css";
import ProfilePic from "./components/ProfilePic";
import Info from "./components/Info";
import Socials from "./components/Socials";

function App() {
  return (
    <div className="App">
      <main>
        <div className="card">
          <ProfilePic />
          <Info />
          <Socials />
        </div>
      </main>
    </div>
  );
}

export default App;
