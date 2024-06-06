import "./Home.css";
import "./App.css";

function Home() {
  return (
    <div className="Home">
      <main className="home" id="home">
          <h1>We<span className="space"> </span>are</h1>
          <h2>Pu<span>technology</span></h2>
          <p>Experts in <span className="responsive-hide">polyurethane</span><span className="responsive-show">polyurethanes</span> <span className="responsive-hide">insulation materials</span></p>
      </main>
    </div>
  );
}

export default Home;