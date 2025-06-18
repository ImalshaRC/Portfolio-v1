import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 3rem;
    color: var(--primary);
    margin-bottom: 3rem;
    text-align: center;
  }

  .timeline-container {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
  }

  .custom-date {
    font-size: 1.6rem !important;
    color: var(--text-dark);

    .light & {
      color: var(--text-light);
    }
  }

  .vertical-timeline-element-title {
    font-size: 1.8rem;
    font-weight: bold;
    color: var(--text-dark);
  }

  .vertical-timeline-element-subtitle {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text-dark);
  }

  ul {
    list-style-type: disc;
    margin-left: 2rem;
    margin-top: 1rem;
    padding-left: 2rem;

    li {
      font-size: 1.4rem;
      margin-bottom: 0.5rem;
      color: var(--text-dark);
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

  .vertical-timeline-element {
    margin-bottom: 2rem;
  }

  @media (max-width: 768px) {
    .timeline-container {
      max-width: 100%;
      padding: 0 1rem;
    }

    ul {
      margin-left: 1rem;
    }

    .vertical-timeline-element {
      margin-bottom: 3rem;
    }
  }
`;
