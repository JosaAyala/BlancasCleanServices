import styled from "styled-components";
import ecologica5 from "../../Assets/ecologica5.jpg";

export const StyledNavBar = styled.div`
  .NavBarContainer {
    background: url(${ecologica5});
    height: 80px;
    border-top: solid 3px #a5be00;
  }

  @media only screen and (max-width: 600px) {
    .NavBarContainer {
      display: grid;
      grid-template-columns: 0% 95% 0%;

      .ContainerItems {
        display: grid;
        grid-template-columns: auto auto auto;
        align-items: center;
        justify-items: end;
        color: black;
        filter: drop-shadow(5px 5px 5px white);

        .ItemNav {
          color: black;
        }
        .ButtonNav {
          display: block;
          :hover {
            filter: drop-shadow(0 4mm 3mm black);
          }
          :active {
            filter: drop-shadow(0 4mm 3mm black);
          }
        }
      }
    }
  }

  @media only screen and (min-width: 600px) {
    .NavBarContainer {
      display: grid;
      grid-template-columns: 0% 99% 0%;

      .ContainerItems {
        display: grid;
        grid-template-columns: 33% 33% 33%;
        align-items: center;
        justify-content: center;
        color: black;
        filter: drop-shadow(5px 5px 5px white);

        .ItemNav {
          color: black;
          text-align: center;
        }
        .ButtonNav {
          display: block;
          :hover {
            filter: drop-shadow(0 4mm 3mm black);
          }
          :active {
            filter: drop-shadow(0 4mm 3mm black);
          }
        }
      }
    }
  }

  @media only screen and (min-width: 768px) {
    .NavBarContainer {
      display: grid;
      grid-template-columns: 2% 95% 2%;

      .ContainerItems {
        display: grid;
        grid-template-columns: 33% 33% 33%;
        justify-content: center;
        align-items: center;
        align-content: space-around;
        color: black;
        filter: drop-shadow(5px 5px 5px white);

        .ItemNav {
          display: flex;
          flex-direction: row;
          justify-content: center;
          font-size: 24px;
          font-weight: 700;
          color: black;
          :hover {
            font-weight: 900;
            transform: translateY(-5px);
            filter: drop-shadow(3px 2px 2px black);
            transition: all 0.5s;
          }
          .ButtonNav {
            :hover {
              filter: drop-shadow(0 4mm 3mm black);
            }
          }
        }
      }
    }
  }

  @media only screen and (min-width: 992px) {
    .NavBarContainer {
      display: grid;
      grid-template-columns: 15% 80% 0%;

      .ContainerItems {
        display: grid;
        grid-template-columns: 33% 33% 33%;
        align-items: center;
        justify-content: center;
        color: black;
        filter: drop-shadow(5px 5px 5px white);

        .ItemNav {
          display: flex;
          flex-direction: row;
          justify-content: center;
          font-size: 28px;
          font-weight: 700;
          color: black;
          :hover {
            font-weight: 900;
            transform: translateY(-5px);
            filter: drop-shadow(3px 2px 2px black);
            transition: all 0.5s;
          }
          .ButtonNav {
            :hover {
              filter: drop-shadow(0 4mm 3mm black);
            }
          }
        }
      }
    }
  }

  @media only screen and (min-width: 1200px) {
    .NavBarContainer {
      display: grid;
      grid-template-columns: 20% 70% 5%;

      .ContainerItems {
        display: grid;
        grid-template-columns: 33% 33% 33%;
        align-items: center;
        justify-content: center;
        justify-items: end;
        color: black;
        filter: drop-shadow(5px 5px 5px white);

        .ItemNav {
          display: flex;
          flex-direction: row;
          font-size: 28px;
          font-weight: 700;
          text-decoration: none;
          color: black;

          :hover {
            font-weight: 900;
            transform: translateY(-5px);
            filter: drop-shadow(3px 2px 2px black);
            transition: all 0.5s;
          }
          .ButtonNav {
            :hover {
              filter: drop-shadow(0 4mm 3mm black);
            }
          }
        }
      }
    }
  }
`;
