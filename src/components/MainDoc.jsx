import { useEffect } from "react";
import PropTypes from "prop-types";
import "./MainDoc.css";

const MainSection = ({ id, title, content }) => (
  <section className="main-section" id={id}>
    <h1 className="header">{title}</h1>
    {content.map((paragraph, index) => (
      <p key={`${id}-${index}`}>{paragraph}</p>
    ))}
  </section>
);

MainSection.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const MainDoc = ({ toggleNavAndSidebar }) => {
  useEffect(() => {
    if (typeof toggleNavAndSidebar === "function") {
      toggleNavAndSidebar();
      return () => {
        toggleNavAndSidebar();
      };
    }
  }, [toggleNavAndSidebar]);

  const sections = [
    {
      id: "pengenalan",
      title: "Pengenalan",
      content: [
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, porro ab ea velit ipsam distinctio corrupti eum fuga facilis iure, dignissimos delectus soluta, temporibus in tenetur. Voluptates, natus ullam aspernatur nemo perspiciatis iusto nostrum. Animi harum, aspernatur similique quas doloremque architecto enim aliquid. Iure labore corporis cupiditate delectus. Debitis, veniam!",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nihil porro ducimus mollitia reprehenderit facere in consequatur voluptatem quisquam esse sit explicabo neque, incidunt totam ratione ut fuga nisi est autem! Rerum nobis perferendis repudiandae, quibusdam sunt asperiores consequuntur dolorum doloremque fugiat aperiam quis modi possimus quidem porro ut alias.",
      ],
    },
    {
      id: "referensi-html",
      title: "Referensi HTML",
      content: [
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit quia earum a reiciendis adipisci quibusdam dignissimos quaerat deserunt repellat. Similique architecto reprehenderit nihil iste quis! Ipsum consequuntur illum ducimus minus.",
      ],
    },
    // Tambahkan section-section lainnya sesuai kebutuhan
  ];

  return (
    <main id="main-doc" className="container">
      {sections.map((section) => (
        <MainSection
          key={section.id}
          id={section.id}
          title={section.title}
          content={section.content}
        />
      ))}
      <section className="main-section" id="referensi-konten">
        <h1>Referensi Konten</h1>
        <ul>
          <li>
            All the documentation in this page is taken from
            <a href="https://www.w3schools.com/html/default.asp">
              <span> W3Schools</span>
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
};

MainDoc.propTypes = {
  toggleNavAndSidebar: PropTypes.func,
};

export default MainDoc;
