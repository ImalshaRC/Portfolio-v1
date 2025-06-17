import styled from "styled-components";
export const Container = styled.section`
  margin-top: 15rem;

  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
    color: var(--green);
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    padding: 1rem;
    overflow: hidden;

    .project {
      padding: 2rem 1.8rem;
      min-width: 300px;
      background-color: #2b2b2b;
      border-radius: 1.2rem;
      transition: 0.25s;
      display: flex;
      flex-direction: column;
      height: 100%;
      color: #fff;

      &:hover {
        transform: translateY(-5px);
        background-color: var(--pink);
      }

      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--blue);
        margin-bottom: 3.6rem;

        .project-links {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        a > img {
          width: 5rem;
        }
      }

      h3 {
        margin-bottom: 0.5rem;
      }

      .Project-title {
        font-size: 2.5rem;
        color: var(--green);
        width: 100%;
      }

      .Project-category {
        width: 100%;
        font-size: 2rem;
        color: var(--blue);
        margin-bottom: 2rem;
      }

      p {
        letter-spacing: 0.12rem;
        margin-bottom: 2rem;
        margin-top: 1.5rem;

        a {
          color: #fff;
          border-bottom: 1px solid var(--green);
          transition: color 0.25s;

          &:hover {
            color: var(--green);
          }
        }
      }

      footer {
        margin-top: auto;

        .tech-list {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 2rem;
          font-size: 1.4rem;
          opacity: 0.6;
          overflow-x: auto;
        }
      }
    }
  }

  @media (max-width: 960px) {
    .projects {
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
      padding: 0.5rem;
    }
  }

  @media (max-width: 740px) {
    .projects {
      grid-template-columns: 1fr;
      gap: 1rem;
    }

    .project {
      padding: 1.5rem 1.2rem;
      
      .Project-title {
        font-size: 2rem;
      }

      .Project-category {
        font-size: 1.6rem;
      }

      p {
        font-size: 1.4rem;
      }

      footer {
        .tech-list {
          font-size: 1.2rem;
        }
      }
    }
  }

  .image-container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      max-width: 300px;
      height: auto;
      border-radius: 0.5rem;
      object-fit: cover;
    }

    .image-controls {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-top: 0.5rem;

      button {
        background-color: #4caf50;
        color: white;
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 0.5rem;
        cursor: pointer;
        transition: background-color 0.25s;

        &:hover {
          background-color: #45a049;
        }
      }
    }

    .view-button {
      margin-top: 1rem;
      background-color: #4caf50;
      color: white;
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;
      transition: background-color 0.25s;

      &:hover {
        background-color: #45a049;
      }
    }
  }

  /* Full-screen modal */
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;

    .modal-content {
      position: relative;
      background-color: rgba(0, 0, 0, 0.8);
      border-radius: 0.5rem;
      max-width: 60%;
      text-align: center;

      img {
        max-width: 100%;
        height: auto;
      }

      .close-button {
        color: #4caf50;
        position: absolute;
        top: 1rem;
        right: 1rem;
        font-size: 4rem;
        cursor: pointer;
      }

      .image-controls {
        display: flex;
        justify-content: space-between;
        margin-top: 1rem;

        .view-button {
          background-color: #4caf50;
          color: white;
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: background-color 0.25s;
        }
      }
    }
  }
    .show-all-container {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.show-all-container button {
  background-color: #4caf50;
  color: white;
  padding: 0.75rem 5.5rem;
  font-size: 1.2rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.show-all-container button:hover {
  background-color: #45a049;
}

`;
