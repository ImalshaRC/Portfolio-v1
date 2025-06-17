import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 3rem;
    color: var(--green);
    margin-bottom: 3rem;
    text-align: center;
  }

  .timeline-container {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
  }

  .custom-date {
    color: var(--green);
    font-size: 1.6rem !important;
  }

  .vertical-timeline-element-title {
    font-size: 1.8rem;
    font-weight: bold;
  }

  .vertical-timeline-element-subtitle {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--lightGray);
  }

  ul {
    list-style-type: disc; /* Ensure bullet points */
    margin-left: 2rem;
    margin-top: 1rem;
    padding-left: 2rem; /* Added padding for better spacing */
    color: var(--green);

    li {
      color: var(--green);
      font-size: 1.4rem;
      margin-bottom: 0.5rem;
      color: #fff;
    }
  }

  .timeline-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .timeline-image {
    width: 60%;
    height: 60%;
    object-fit: contain;
  }

  /* Adjust the vertical timeline element for small screens */
  .vertical-timeline-element {
    margin-bottom: 2rem; /* Add spacing between timeline elements */
  }

  @media (max-width: 768px) {
    .timeline-container {
      max-width: 100%;
      padding: 0 1rem;
    }

    ul {
      margin-left: 1rem;
    }
  }
`;
