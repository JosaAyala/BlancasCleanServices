import styled from "styled-components";

export const StyledMainScreen = styled.div`
  @media only screen and (max-width: 600px) {
    width: 90%;
    margin: auto;
    .ContainerDefault {
      display: flex;
      flex-direction: column;
      .ContainerHeader {
        display: flex;
        flex-direction: column;
        margin-bottom: 25px;

        .DivImg {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-self: center;

          .ImgHome {
            width: 290px;
          }
        }

        .ServicesContainer {
          display: flex;
          flex-direction: column;
          column-gap: 5px;
          justify-content: center;
          align-content: center;
          align-items: center;

          .TextAvatar {
            font-size: 16pt;
            color: #323130;
            padding: 15px;
            font-weight: 700;
            display: flex;
            justify-content: center;
            align-items: center;
            place-self: center;
          }

          .ItemAvatar {
            background: white;
            border-radius: 50%;
            height: 200px;
            width: 200px;
            filter: drop-shadow(3px 5px 5px black);
            border: solid #29bf12 5px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            align-content: center;

            img {
              object-fit: cover;
              width: 180px;
              height: 180px;
              border-radius: 50%;
            }
          }
        }
      }

      .ValuesContainer {
        display: grid;
        grid-template-columns: 1fr;
        column-gap: 15px;
        row-gap: 20px;
      }
    }

    .WelcomeTitle {
      font-size: 36pt;
      font-weight: 700;
      color: #323130;
    }
    .Subtitle {
      font-size: 24pt;
      color: #323130;
    }
  }

  @media only screen and (min-width: 600px) {
    width: 90%;
    margin: auto;
    .ContainerDefault {
      display: flex;
      flex-direction: column;
      .ContainerHeader {
        display: flex;
        flex-direction: column;
        margin-bottom: 25px;

        .DivImg {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-self: center;

          .ImgHome {
            width: 290px;
          }
        }

        .ServicesContainer {
          display: grid;
          grid-template-columns: 1fr 1fr;
          column-gap: 5px;
          justify-items: center;
          align-content: center;
          align-items: center;

          .TextAvatar {
            font-size: 16pt;
            color: #323130;
            padding: 15px;
            font-weight: 700;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .ItemAvatar {
            background: white;
            border-radius: 50%;
            height: 180px;
            width: 180px;
            filter: drop-shadow(3px 5px 5px black);
            border: solid #29bf12 5px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            align-content: center;

            img {
              object-fit: cover;
              width: 165px;
              height: 165px;
              border-radius: 50%;
            }
          }
        }
      }

      .ValuesContainer {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 15px;
        row-gap: 20px;
      }
    }

    .WelcomeTitle {
      font-size: 36pt;
      font-weight: 700;
      color: #323130;
    }
    .Subtitle {
      font-size: 24pt;
      color: #323130;
    }
  }

  @media only screen and (min-width: 768px) {
    width: 95%;
    margin: auto;
    .ContainerDefault {
      display: flex;
      flex-direction: column;
      .ContainerHeader {
        display: flex;
        flex-direction: column;
        margin-bottom: 25px;

        .DivImg {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-self: center;

          .ImgHome {
            width: 290px;
          }
        }

        .ServicesContainer {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          column-gap: 5px;
          justify-items: center;
          align-content: center;
          align-items: center;

          .TextAvatar {
            font-size: 16pt;
            color: #323130;
            padding: 15px;
            font-weight: 700;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .ItemAvatar {
            background: white;
            border-radius: 50%;
            height: 180px;
            width: 180px;
            filter: drop-shadow(3px 5px 5px black);
            border: solid #29bf12 5px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            align-content: center;

            img {
              object-fit: cover;
              width: 165px;
              height: 165px;
              border-radius: 50%;
            }
          }
        }
      }

      .ValuesContainer {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 15px;
        row-gap: 20px;
      }
    }

    .WelcomeTitle {
      font-size: 36pt;
      font-weight: 700;
      color: #323130;
    }
    .Subtitle {
      font-size: 24pt;
      color: #323130;
    }
  }

  @media only screen and (min-width: 992px) {
    width: 90%;
    margin: auto;
    .ContainerDefault {
      display: flex;
      flex-direction: column;
      .ContainerHeader {
        display: grid;
        grid-template-columns: 375px calc(100% - 385px);

        .DivImg {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-self: flex-start;

          .ImgHome {
            width: 325px;
          }
        }

        .ServicesContainer {
          display: flex;
          flex-direction: row;
          column-gap: 10px;
          justify-content: center;
          align-content: center;
          align-items: center;

          .TextAvatar {
            font-size: 12pt;
            color: #323130;
            padding: 15px;
            font-weight: 700;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .ItemAvatar {
            background: white;
            border-radius: 50%;
            height: 175px;
            width: 175px;
            filter: drop-shadow(3px 5px 5px black);
            border: solid #29bf12 5px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            align-content: center;

            img {
              object-fit: cover;
              width: 160px;
              height: 160px;
              border-radius: 50%;
            }
          }
        }
      }

      .ValuesContainer {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        column-gap: 15px;
        row-gap: 20px;
      }
    }

    .WelcomeTitle {
      font-size: 48pt;
      font-weight: 700;
      color: #323130;
    }
    .Subtitle {
      font-size: 28pt;
      color: #323130;
    }
  }

  @media only screen and (min-width: 1200px) {
    width: 90%;
    margin: auto;
    .ContainerDefault {
      display: flex;
      flex-direction: column;
      .ContainerHeader {
        display: grid;
        grid-template-columns: 500px calc(100% - 510px);

        .DivImg {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-self: flex-start;

          .ImgHome {
            width: 80%;
          }
        }

        .ServicesContainer {
          display: flex;
          flex-direction: row;
          column-gap: 25px;
          justify-content: center;
          align-content: center;
          align-items: center;

          .TextAvatar {
            font-size: 16pt;
            color: #323130;
            padding: 15px;
            font-weight: 700;
          }

          .ItemAvatar {
            background: white;
            border-radius: 50%;
            height: 200px;
            width: 200px;
            filter: drop-shadow(3px 5px 5px black);
            border: solid #29bf12 5px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            align-content: center;

            img {
              object-fit: cover;
              width: 190px;
              height: 190px;
              border-radius: 50%;
            }
          }
        }
      }

      .ValuesContainer {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        column-gap: 15px;
        row-gap: 20px;
      }
    }

    .WelcomeTitle {
      font-size: 48pt;
      font-weight: 700;
      color: #323130;
    }
    .Subtitle {
      font-size: 28pt;
      color: #323130;
    }
  }
`;
