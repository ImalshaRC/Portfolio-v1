import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;

  h2 {
    text-align: center;
    font-size: 4rem;
    color: var(--primary);
    margin-bottom: 3rem;
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 2rem;
    padding: 1rem;
    overflow: hidden;

    .project {
      padding: 2rem 1.8rem;
      background-color: var(--card-dark);
      border-radius: 1.2rem;
      transition: all 0.4s ease;
      border: 1px solid transparent;
      position: relative;
      overflow: hidden;
      
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          45deg,
          rgba(199, 220, 223, 0.05),
          rgba(117, 123, 122, 0.05)
        );
        opacity: 0;
        transition: opacity 0.4s ease;
      }
      
      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--text-dark);
        margin-bottom: 3.6rem;
        position: relative;
        z-index: 1;
        
        .project-links {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        a > img {
          width: 2.6rem;
          transition: transform 0.3s ease;
          
          &:hover {
            transform: scale(1.1) rotate(5deg);
          }
        }
      }

      h3.Project-title {
        color: var(--title-color);
        margin-bottom: 0.8rem;
        font-size: 2rem;
        font-weight: 600;
        letter-spacing: 0.5px;
        transition: all 0.3s ease;
        position: relative;
        z-index: 1;

        &:hover {
          filter: brightness(1.2);
        }
      }

      p {
        color: var(--text-dark);
        font-size: 1.4rem;
        line-height: 1.6;
        margin-bottom: 2rem;
        transition: color 0.3s ease;
      }

      footer {
        .tech-list {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
          margin-top: 1.5rem;

          li {
            color: var(--text-dark);
            border: 1px solid var(--primary);
            padding: 0.4rem 1rem;
            border-radius: 0.8rem;
            transition: all 0.3s ease;
            font-size: 1.4rem;

            &:hover {
              background-color: var(--primary);
              color: var(--text-dark);
            }
          }
        }
      }

      &:hover {
        transform: translateY(-8px);
        border: 1px solid rgba(199, 220, 223, 0.2);
        box-shadow: 
          0 10px 20px rgba(0, 0, 0, 0.2),
          0 0 20px rgba(199, 220, 223, 0.1),
          0 0 40px rgba(199, 220, 223, 0.05);

        &::before {
          opacity: 1;
        }

        h3.Project-title {
          color: var(--primary);
        }

        p.Project-category {
          color: var(--text-dark);
        }

        p {
          color: var(--text-dark);
        }

        img {
          filter: brightness(1.1);
        }
      }
    }
  }

  @media (max-width: 960px) {
    .projects {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 740px) {
    .projects {
      grid-template-columns: 1fr;
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
        background-color: var(--primary);
        color: var(--text-dark);
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 0.5rem;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
          background-color: var(--secondary);
          transform: translateY(-2px);
        }

        &:active {
          transform: translateY(0);
        }
      }
    }

    .view-button {
      margin-top: 1rem;
      background-color: var(--primary);
      color: var(--text-dark);
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background-color: var(--secondary);
        transform: translateY(-2px);
      }

      &:active {
        transform: translateY(0);
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
        color: var(--primary);
        position: absolute;
        top: 1rem;
        right: 1rem;
        font-size: 4rem;
        cursor: pointer;
        transition: color 0.3s ease;

        &:hover {
          color: var(--secondary);
        }
      }

      .image-controls {
        display: flex;
        justify-content: space-between;
        margin-top: 1rem;

        button {
          background-color: var(--primary);
          color: var(--text-dark);
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: all 0.3s ease;

          &:hover {
            background-color: var(--secondary);
            transform: translateY(-2px);
          }

          &:active {
            transform: translateY(0);
          }
        }
      }
    }
  }

  /* View All Projects button container */
  .show-all-container {
    display: flex;
    justify-content: center;
    margin-top: 4rem;

    button {
      background-color: var(--primary);
      color: var(--text-dark);
      padding: 1.2rem 3rem;
      border: none;
      border-radius: 0.8rem;
      font-size: 1.6rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

      &:hover {
        background-color: var(--secondary);
        transform: translateY(-2px);
        box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
      }

      &:active {
        transform: translateY(0);
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
      }
    }
  }
`;
