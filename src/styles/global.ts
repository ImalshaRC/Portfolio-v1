import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    /* Primary Colors */
    --primary: #2563eb;     /* Rich Blue */
    --secondary: #3b82f6;   /* Light Blue */
    --accent: #0ea5e9;      /* Sky Blue */
    
    /* Project Title Colors */
    --title-color: rgb(199, 220, 223);  /* Bright Cyan */
    --category-color: rgb(117, 123, 122);  /* Deep Teal */
    
    /* Dark Mode Colors */
    --bg-dark: #0f172a;     /* Deep Navy */
    --text-dark: #f8fafc;   /* Off White */
    --card-dark: #1e293b;   /* Slate */
    
    /* Light Mode Colors */
    --bg-light: #f8fafc;    /* Off White */
    --text-light: #0f172a;  /* Deep Navy */
    --card-light: #ffffff;  /* Pure White */

    /* Additional Colors */
    --success: #0891b2;     /* Cyan */
    --warning: #0d9488;     /* Teal */
    --error: #dc2626;       /* Red */

    /* Legacy color mappings for compatibility */
    --pink: var(--secondary);
    --black: var(--bg-dark);
    --green: var(--primary);
    --blue: var(--accent);

    scroll-padding-top: 10rem;

    &.light{
      body{
        transition: 0.5s;
        background-color: var(--bg-light);
        color: var(--text-light);
      }

      .logo{
        color: var(--text-light);
      }

      header.header-fixed{
        transition: 0.5s;
        background-color: rgba(248, 250, 252, 0.85);
        backdrop-filter: blur(10px);
        a{
          transition: 0.5s;
          color: var(--text-light);
        }
        .menu,.menu:before, .menu:after{
          background-color: var(--text-light); 
        }
        .menu.active{
          background-color: transparent;
        }
      }

      footer.footer{
        transition: 0.5s;
        background-color: rgba(15, 23, 42, 0.1);
        color: var(--text-light);
      }

      form{
        input,textarea{
          transition: 0.5s;
          border: solid 1px var(--text-light);
          color: var(--text-light);
          background-color: var(--card-light);
          &::placeholder{
            transition: 0.5s;
            color: var(--text-light);
            opacity: 0.7;
          }
        }
      }

      /* Contact section text in light mode */
      .contact-text {
        color: var(--text-light);
      }
    }

    &.dark {
      body {
        transition: 0.5s;
        background-color: var(--bg-dark);
        color: var(--text-dark);
      }

      .logo {
        color: var(--text-dark);
      }

      header.header-fixed {
        transition: 0.5s;
        background-color: rgba(15, 23, 42, 0.85);
        backdrop-filter: blur(10px);
        a {
          transition: 0.5s;
          color: var(--text-dark);
        }
      }

      footer.footer {
        transition: 0.5s;
        background-color: rgba(248, 250, 252, 0.1);
        color: var(--text-dark);
      }

      /* Contact section text in dark mode */
      .contact-text {
        color: var(--text-dark);
      }
    }
  }

  ul, li {
    text-decoration: none;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body{
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    background-color: var(--bg-dark);
    color: var(--text-dark);
  }

  body, input, textarea, button{
    font-family: 'Red Hat Display', sans-serif;
    font-weight: 400;
  }

  a{
    text-decoration: none;
    color: var(--text-dark);
    transition: color 0.3s ease;
    &:hover {
      color: var(--accent);
    }
  }

  button, .button{
    border: none;
    cursor: pointer;
    background-color: var(--primary);
    color: var(--text-dark);
    border-radius: 2rem;
    font-weight: 500;
    transition: all 0.3s ease;
    padding: 1rem 2rem;
    
    &:hover{
      background-color: var(--secondary);
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(0);
    }
  }

  button:disabled, .button:disabled{
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }

  .logo{
    font-size: 3rem;
    color: var(--text-dark);
    font-weight: 700;
    transition: color 0.3s ease;
    
    &:hover {
      color: var(--accent);
    }
  }

  /* Add selection color */
  ::selection {
    background-color: var(--accent);
    color: var(--text-dark);
  }
`