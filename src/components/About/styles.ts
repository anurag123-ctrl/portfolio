import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  .hard-skills {
    margin-top: 1.6rem;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: flex-start;
  }

  .hability {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    background: #f8f8f8;
    border-radius: 12px;
    padding: 1rem;
    transition: all 0.2s ease;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
    text-align: center;
    cursor: default;

    &:hover {
      transform: translateY(-5px);
      background-color: #eafff1;
      box-shadow: 0 6px 14px rgba(0, 0, 0, 0.12);
    }

    img {
      width: 40px;
      height: 40px;
      object-fit: contain;
      margin-bottom: 0.4rem;
    }

    span {
      font-size: 1.1rem;
      font-weight: 700;
      color: #333;
      text-align: center;
    }
  }

  h2 {
    display: inline-block;
    margin-bottom: 2rem;
    font-size: 3rem;
    margin-top: 0rem;
    color: var(--green);
  }

  h3 {
    margin-top: 2rem;
    color: var(--green);
  }

  p {
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
  }

  .about-image {
    text-align: center;

    img {
      margin-top: 2rem;
      width: 75%;
      filter: grayscale(0);
      transition: filter 0.5s;

      &:hover {
        filter: grayscale(0);
      }
    }
  }

  @media (max-width: 960px) {
    display: block;
    text-align: center;

    .hard-skills {
      justify-content: center;
    }

    .about-image {
      display: flex;
      max-width: 100%;

      img {
        margin-top: 2rem;
        width: 100%;
        filter: grayscale(0);
        transition: filter 0.5s;

        &:hover {
          filter: grayscale(0);
        }
      }
    }
  }

  @media (max-width: 480px) {
    .hability {
      width: 80px;
      height: 80px;
      padding: 0.8rem;

      img {
        width: 32px;
        height: 32px;
      }

      span {
        font-size: 1.0rem;
      }
    }

    .about-image {
      max-width: 100%;
      margin-top: 4rem;

      img {
        margin-top: 2rem;
        width: 100%;
        filter: grayscale(0);
        transition: filter 0.5s;

        &:hover {
          filter: grayscale(0);
        }
      }
    }
  }
`;
