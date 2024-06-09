import logo from './logo.svg';
import './App.css';
import Card from './Card';

function App() {
  // const terramentalInfo = [
  //   "Released on Google Play Store for Android",
  //   "Collaborated within a team of 5 people with the role of C# programmer",
  //   "Presented the project at Barclays Games Frenzy 2023",
  //   "Selected to receive funding from QHT trust to commercialize the project"
  // ];

  const terramentalTools = "Unity (2D) | C# | GitHub"
  const terramentalDesc = "A 2D platformer where the player must harness the power of the elements to progress through levels. 5 person group project being worked on alongside university course with the aim of a publication deal and Steam release in 2023."

  return (
    <div className="card-container">
      <Card tools={terramentalTools} desc={terramentalDesc}/>
      <Card desc={terramentalDesc}/>
      <Card desc={terramentalDesc}/>
    </div>
  );
}

export default App;
