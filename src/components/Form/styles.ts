import styled from "styled-components";

export const Container = styled.section`
  margin-top: 1rem;
  display: grid;
  place-items: center;

  h2{
    text-align: center;
    margin-bottom: 2rem;
  }

  form{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    max-width: 60rem;

    input, textarea{
      width: 100%;
      height: 3rem;
      background: none;
      border: 1px solid var(--primary);
      padding: 1.7rem 1.5rem;
      color: var(--text-dark);
      border-radius: 0.5rem;
      font-size: 1.2rem;

      &::placeholder{
        color: var(--text-dark);
        opacity: 0.7;
      }      
    }

    textarea{
      height: 20rem;
      resize: none;
      overflow-y: auto;
    }

    button{
      padding: 1rem 6rem;
      text-transform: uppercase;
      
      &:disabled{
        opacity: 0.5;
        cursor: not-allowed;
      }
    }
  }

  @media(max-width: 740px){
    form{
      width: 100%;
      padding: 0 2rem;
    }
  }
`

export const ContainerSucces = styled.section`
  margin-top: 2rem;
  text-align: center;
  max-width: 60rem;
  margin: 2rem auto;

  h3{
    font-size: 2rem;
    color: var(--primary);
    margin-bottom: 1rem;
  }

  p {
    color: var(--text-dark);
    font-size: 1.6rem;
    margin-bottom: 2rem;
  }

  .button-container {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-top: 2rem;

    button {
      padding: 1rem 2rem;
      text-transform: uppercase;
      border-radius: 0.5rem;
      transition: all 0.3s ease;
      font-size: 1.4rem;
      
      &.send-another {
        background-color: var(--primary);
        color: var(--text-dark);

        &:hover {
          background-color: var(--secondary);
          transform: translateY(-2px);
        }
      }

      &.back-to-top {
        background-color: var(--card-dark);
        color: var(--text-dark);
        border: 1px solid var(--primary);

        &:hover {
          background-color: var(--primary);
          transform: translateY(-2px);
        }
      }

      &:active {
        transform: translateY(0);
      }
    }
  }

  @media(max-width: 740px){
    padding: 0 2rem;
    
    .button-container {
      flex-direction: column;
      align-items: center;
      gap: 1rem;

      button {
        width: 100%;
        max-width: 300px;
      }
    }
  }
`