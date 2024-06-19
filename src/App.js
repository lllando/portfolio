import logo from './logo.svg';
import './App.css';
import Card from './Card';
import About from './About';

function App() {

  // const terramentalInfo = [
  //   "Released on Google Play Store for Android",
  //   "Collaborated within a team of 5 people with the role of C# programmer",
  //   "Presented the project at Barclays Games Frenzy 2023",
  //   "Selected to receive funding from QHT trust to commercialize the project"
  // ];

  // Usage example

  //#region Experience Variables
  const educationTitle = "Education"

  const educationHeader = [
    "BSc Computer Games Development"
  ];

  const educationDescs = [
    "University of Westminster"
  ];

  const educationImgUrl = "/assets/icons/education.png";
  //#endregion
  //#region Skills Variables
  const skillsTitle = "Skills"

  const skillsHeaders = [
    "Game Development",
    "Programming Languages",
    "Version Control",
    "Project Management"
  ];

  const skillsDescs = [
    "Unity, Unreal Engine, MonoGame, DirectX",
    "C#, C++, Python, PHP, R, Swift",
    "Git, GitHub, Git LFS",
    "Trello, ClickUp, Miro"
  ];

  const skillsImgUrl = "/assets/icons/experience.png";
  //#endregion


  const terramentalTools = "Unity (2D) | C# | GitHub"
  const terramentalDesc = "A 2D platformer where the player must harness the power of the elements to progress through levels. 5 person group project being worked on alongside university course with the aim of a publication deal and Steam release in 2023."
  const terramentalImgUrl = "/assets/pictures/terramental/terramental1.png"
  return (
    <div className="body">
      <nav id="desktop-nav">
      <div class="logo">John Doe</div>
      <div>
        <ul class="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
    <nav id="hamburger-nav">
      <div class="logo">John Doe</div>
      <div class="hamburger-menu">
        <div class="hamburger-icon" onclick="toggleMenu()">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="menu-links">
          <li><a href="#about" onclick="toggleMenu()">About</a></li>
          <li><a href="#experience" onclick="toggleMenu()">Experience</a></li>
          <li><a href="#projects" onclick="toggleMenu()">Projects</a></li>
          <li><a href="#contact" onclick="toggleMenu()">Contact</a></li>
        </div>
      </div>
    </nav>
    <div class="profile-container">
      <div class="section__text">
        <p class="section__text__p1">Hello, I'm</p>
        <h1 class="title">Lewis Vaillant-Jones</h1>
        <p class="section__text__p2">Game Developer</p>
        <div class="btn-container">
          <button
            class="btn btn-color-2"
            onclick="window.open('./assets/resume-example.pdf')"
          >
            Download CV
          </button>
          <button class="btn btn-color-1" onclick="location.href='./#contact'">
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img
            src="/assets/logos/linkedin.png"
            alt="My LinkedIn profile"
            class="icon"
            onclick="location.href='https://linkedin.com/'"
          />
          <img
            src="/assets/logos/github.png"
            alt="My Github profile"
            class="icon"
            onclick="location.href='https://github.com/'"
          />
        </div>
      </div>
      <div className="about-container">
        <About title={educationTitle} header={educationHeader} desc={educationDescs} imgUrl={educationImgUrl} />
        <About title = {skillsTitle} header={skillsHeaders} desc={skillsDescs} imgUrl={skillsImgUrl} />
      </div>
    </div>
    <div className="card-container">
      <Card tools={terramentalTools} desc={terramentalDesc} imgurl={terramentalImgUrl}/>
      <Card desc={terramentalDesc}/>
      <Card desc={terramentalDesc}/>
    </div>
    </div>
  );
}

export default App;
