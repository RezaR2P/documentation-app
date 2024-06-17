import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to HTML Documentation</h1>
      <div className="cards-container">
        <div className="card">
          <h2>Pengenalan</h2>
          <p>
            An introduction to HTML, covering the basics and essential concepts.
          </p>
        </div>
        <div className="card">
          <h2>Referensi HTML</h2>
          <p>
            Detailed reference material on HTML elements, attributes, and more.
          </p>
        </div>
        <div className="card">
          <h2>HTML FORM</h2>
          <p>
            Learn about HTML forms, including form elements, attributes, and
            validation.
          </p>
        </div>
        <div className="card">
          <h2>Element Tag HTML</h2>
          <p>
            Information on various HTML tags and their usage in web development.
          </p>
        </div>
        <div className="card">
          <h2>HTML Media</h2>
          <p>
            Explore how to embed and manage media such as images, audio, and
            video in HTML.
          </p>
        </div>
        <div className="card">
          <h2>HTML API</h2>
          <p>
            An overview of HTML APIs, including examples and practical
            applications.
          </p>
        </div>
        <div className="card">
          <h2>Grafik HTML</h2>
          <p>Learn about creating and manipulating graphics using HTML.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
