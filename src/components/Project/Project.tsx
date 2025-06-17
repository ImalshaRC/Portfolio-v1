import { SetStateAction, useState } from "react";
import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import { projects } from "../../constants/index";

export function Project() {
  // Initialize a state to track the current image index for each project
  const [currentImageIndex, setCurrentImageIndex] = useState(
    projects.map(() => 0) // Create an array of 0s, one for each project
  );

  // State to handle full-screen image modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [modalProjectIndex, setModalProjectIndex] = useState(0);

  // State to track whether to show all projects or only 8
  const [showAll, setShowAll] = useState(false);

  // Function to handle showing all projects
  const handleToggleShowAll = () => {
    setShowAll((prevShowAll) => !prevShowAll);
  };

  // Function to handle next image for project cards
  const handleNextImage = (index: number) => {
    setCurrentImageIndex((prev) =>
      prev.map((imgIndex, i) =>
        i === index ? (imgIndex + 1) % projects[index].images.length : imgIndex
      )
    );
  };

  // Function to handle previous image for project cards
  const handlePrevImage = (index: number) => {
    setCurrentImageIndex((prev) =>
      prev.map((imgIndex, i) =>
        i === index
          ? (imgIndex - 1 + projects[index].images.length) %
            projects[index].images.length
          : imgIndex
      )
    );
  };

  // Function to open modal
  const handleOpenModal = (
    image: SetStateAction<string>,
    index: SetStateAction<number>
  ) => {
    setModalImage(image);
    setModalProjectIndex(index);
    setIsModalOpen(true);
  };

  // Function to close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalImage("");
  };

  // Function to handle next image in modal
  const handleNextImageModal = () => {
    const nextIndex =
      (currentImageIndex[modalProjectIndex] + 1) %
      projects[modalProjectIndex].images.length;
    setCurrentImageIndex((prev) =>
      prev.map((imgIndex, i) =>
        i === modalProjectIndex ? nextIndex : imgIndex
      )
    );
    setModalImage(projects[modalProjectIndex].images[nextIndex]);
  };

  // Function to handle previous image in modal
  const handlePrevImageModal = () => {
    const prevIndex =
      (currentImageIndex[modalProjectIndex] -
        1 +
        projects[modalProjectIndex].images.length) %
      projects[modalProjectIndex].images.length;
    setCurrentImageIndex((prev) =>
      prev.map((imgIndex, i) =>
        i === modalProjectIndex ? prevIndex : imgIndex
      )
    );
    setModalImage(projects[modalProjectIndex].images[prevIndex]);
  };

  // Limit the projects displayed based on `showAll` state
  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        {displayedProjects.map((project, index) => (
          <ScrollAnimation
            animateIn="fadeInUp"
            animateOnce={true}
            key={index}
            className="project"
          >
            <header>
              <div style={{ display: "-ms-grid" }}>
                <h3 className="Project-title">{project.title}</h3>
                <p className="Project-category">{project.Category}</p>
              </div>
            </header>

            <div className="image-container">
              <img
                src={project.images[currentImageIndex[index]]}
                alt={project.title}
              />
              <div className="image-controls">
                <button onClick={() => handlePrevImage(index)}>Prev</button>
                <button
                  className="view-button"
                  onClick={() =>
                    handleOpenModal(
                      project.images[currentImageIndex[index]],
                      index
                    )
                  }
                >
                  View
                </button>
                <button onClick={() => handleNextImage(index)}>Next</button>
              </div>
            </div>

            <p>{project.description}</p>

            <footer>
              <ul className="tech-list">
                {project.tags?.map((tag, i) => (
                  <li key={i}>{tag}</li>
                ))}
              </ul>
            </footer>
          </ScrollAnimation>
        ))}
      </div>

      {/* Show "View All" or "Show Less" button */}
      <div className="show-all-container">
        <button onClick={handleToggleShowAll}>
          {showAll ? "Show Less" : "View All Projects"}
        </button>
      </div>

      {/* Full-screen modal for viewing images */}
      {isModalOpen && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={handleCloseModal}>
              &times;
            </span>
            <img src={modalImage} alt="Full view" />
            <div className="image-controls">
              <button className="view-button" onClick={handlePrevImageModal}>
                Prev
              </button>
              <button className="view-button" onClick={handleNextImageModal}>
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
}
