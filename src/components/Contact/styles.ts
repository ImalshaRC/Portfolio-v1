import styled from "styled-components";

export const Container = styled.section`
  margin-top: 10rem;

  header {
    text-align: center;
    
    h2 {
      text-align: center;
      font-size: 4rem;
      margin-bottom: 1rem;
      color: var(--primary);
    }

    p {
      font-weight: 500;
      font-size: 1.6rem;
      margin-top: 0.5rem;
      color: var(--primary);
    }
  }

  /* Contact section styles */
  .contacts {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin-top: 1.5rem;
    
    div {
      display: flex;
      align-items: center;
      justify-content: flex-start; /* Align text and image at the start */
      width: 100%;
      max-width: 30rem;
      gap: 2rem;
      background-color: var(--primary);
      border-radius: 1.4rem;
      padding: 1.6rem 2.8rem;
      transition: all 0.3s ease;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Add a subtle shadow for depth */

      img {
        width: 4rem;
        filter: brightness(0) invert(1);
        transition: transform 0.3s ease; /* Add hover transform to image */
      }

      a {
        color: var(--text-dark);
        font-weight: 500;
        font-size: 1.4rem;
        text-decoration: none; /* Remove default underline */
        transition: all 0.3s ease;
      }

      &:hover {
        background-color: var(--secondary);
        transform: translateY(-5px);
        box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);

        img {
          transform: scale(1.1) rotate(5deg);
        }

        a {
          color: var(--text-dark);
          font-size: 1.5rem;
          letter-spacing: 0.5px;
        }
      }
    }
  }

  @media (max-width: 960px) {
    .contacts {
      flex-direction: column;
      gap: 1rem;

      div {
        width: 100%;
        max-width: 100%;
        padding: 1.2rem 2.4rem; /* Adjust padding for smaller screens */
        justify-content: center; /* Center the content on smaller screens */
      }
    }
  }

  @media (max-width: 480px) {
    header {
      h2 {
        font-size: 3rem; /* Adjust font size for smaller screens */
      }

      p {
        font-size: 1.4rem; /* Adjust paragraph font size */
      }
    }

    .contacts div {
      padding: 1rem 2rem; /* Further reduce padding for small screens */
      
      img {
        width: 3rem; /* Reduce image size for small screens */
      }

      a {
        font-size: 1.2rem; /* Adjust link font size */
      }

      &:hover a {
        font-size: 1.3rem;
      }
    }
  }
`;
