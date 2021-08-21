import styled from "styled-components";

export const StyledServicesScreen = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&family=Quicksand:wght@400;500;600;700&display=swap");
  margin-left: 30px;
  margin-right: 30px;

  p {
    font-family: "Quicksand";
  }

  h1,
  h2,
  h3,
  h4 {
    font-family: "Quicksand";
  }

  @media only screen and (max-width: 600px) {
    .ContainerServices {
      .ContainerHeader {
        display: flex;
        flex-direction: column;
        row-gap: 20px;

        .ContainerTextServices {
          .ItemsServices {
            margin-left: 20px;
            font-size: 14pt;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
          }
        }

        .ContainerVideo {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          video {
            width: 90%;
            height: 320px;
          }
        }
      }

      .ItemTitle {
        text-align: center;
      }

      .ContainerImgenes {
        max-height: 500px;
        overflow: scroll;

        .ImgItem {
          padding: 10px 10px 10px 10px;
          height: 350px;
          border-radius: 12px;
          object-fit: cover;
        }
      }
    }
  }

  @media only screen and (min-width: 600px) {
    .ContainerServices {
      .ContainerHeader {
        display: flex;
        flex-direction: column;
        row-gap: 20px;

        .ContainerTextServices {
          .ItemsServices {
            margin-left: 20px;
            font-size: 14pt;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
          }
        }

        .ContainerVideo {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          video {
            width: 90%;
            height: 320px;
          }
        }
      }

      .ItemTitle {
        text-align: center;
      }

      .ContainerImgenes {
        display: grid;
        grid-template-columns: auto auto;
        column-gap: 15px;
        row-gap: 15px;
        justify-content: center;
        align-content: center;

        .ImgItem {
          height: 300px;
          border-radius: 12px;
          object-fit: cover;
        }
      }
    }
  }

  @media only screen and (min-width: 768px) {
    .ContainerServices {
      .ContainerHeader {
        display: flex;
        flex-direction: column;
        row-gap: 20px;

        .ContainerTextServices {
          .ItemsServices {
            margin-left: 20px;
            font-size: 14pt;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
          }
        }

        .ContainerVideo {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          video {
            width: 90%;
            height: 320px;
          }
        }
      }

      .ItemTitle {
        text-align: center;
      }

      .ContainerImgenes {
        display: grid;
        grid-template-columns: auto auto;
        column-gap: 15px;
        row-gap: 15px;
        justify-content: center;
        align-content: center;

        .ImgItem {
          height: 300px;
          border-radius: 12px;
          object-fit: cover;
        }
      }
    }
  }

  @media only screen and (min-width: 992px) {
    .ContainerServices {
      .ContainerHeader {
        display: grid;
        grid-template-columns: 50% 50%;
        column-gap: 10px;

        .ContainerTextServices {
          .ItemsServices {
            margin-left: 20px;
            font-size: 14pt;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
          }
        }

        .ContainerVideo {
          video {
            width: 90%;
            height: 320px;
          }
        }
      }

      .ItemTitle {
        text-align: center;
      }

      .ContainerImgenes {
        display: grid;
        grid-template-columns: auto auto auto;
        column-gap: 15px;
        row-gap: 15px;
        justify-content: center;
        align-content: center;

        .ImgItem {
          height: 300px;
          border-radius: 12px;
          object-fit: cover;
        }
      }
    }
  }

  @media only screen and (min-width: 1200px) {
    .ContainerServices {
      .ContainerHeader {
        display: grid;
        grid-template-columns: 50% 50%;
        column-gap: 10px;

        .ContainerTextServices {
          .ItemsServices {
            margin-left: 20px;
            font-size: 14pt;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
          }
        }

        .ContainerVideo {
          video {
            width: 90%;
            height: 320px;
          }
        }
      }

      .ItemTitle {
        text-align: center;
      }

      .ContainerImgenes {
        display: grid;
        grid-template-columns: auto auto auto auto;
        column-gap: 15px;
        row-gap: 15px;
        justify-content: center;
        align-content: center;

        .ImgItem {
          height: 300px;
          border-radius: 12px;
          object-fit: cover;
        }
      }
    }
  }
`;
