import styled from "styled-components";
import ecologica5 from "../../Assets/ecologica5.jpg";

export const StyledContactScreen = styled.div`
  margin: auto;
  width: 100%;
  height: 100%;
  filter: drop-shadow(0 2mm 2mm black);

  @media only screen and (max-width: 600px) {
    width: 90%;
    .ContactContainer {
      .HeaderContact {
        font-size: 24pt;
        background: url(${ecologica5});
        object-fit: cover;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px 10px 10px 10px;
        font-weight: 700;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
      }

      .BodyContact {
        display: flex;
        flex-direction: column;
        justify-content: center;
        justify-items: center;
        align-items: center;
        align-content: center;
        font-size: 14pt;
        background: white;
        row-gap: 15px;
        padding-left: 50px;
        padding-right: 50px;

        .ItemText {
          display: flex;
          flex-direction: row;
          column-gap: 10px;
        }
      }

      .BottomContact {
        font-size: 18pt;
        background: url(${ecologica5});
        object-fit: cover;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px 10px 10px 10px;
        font-weight: 500;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
      }
    }
  }

  @media only screen and (min-width: 600px) {
    width: 90%;
    .ContactContainer {
      .HeaderContact {
        font-size: 24pt;
        background: url(${ecologica5});
        object-fit: cover;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px 10px 10px 10px;
        font-weight: 700;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
      }

      .BodyContact {
        padding-left: 50px;
        padding-right: 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        justify-items: center;
        align-items: center;
        align-content: center;
        font-size: 16pt;
        background: white;
        row-gap: 15px;

        .ItemText {
          display: flex;
          flex-direction: row;
          column-gap: 10px;
        }
      }

      .BottomContact {
        font-size: 18pt;
        background: url(${ecologica5});
        object-fit: cover;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px 10px 10px 10px;
        font-weight: 500;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    width: 70%;
    .ContactContainer {
      .HeaderContact {
        font-size: 24pt;
        background: url(${ecologica5});
        object-fit: cover;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px 10px 10px 10px;
        font-weight: 700;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
      }

      .BodyContact {
        padding-left: 50px;
        padding-right: 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        justify-items: center;
        align-items: center;
        align-content: center;
        font-size: 16pt;
        background: white;
        row-gap: 15px;

        .ItemText {
          display: flex;
          flex-direction: row;
          column-gap: 10px;
        }
      }

      .BottomContact {
        font-size: 18pt;
        background: url(${ecologica5});
        object-fit: cover;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px 10px 10px 10px;
        font-weight: 500;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
      }
    }
  }

  @media only screen and (min-width: 992px) {
    width: 80%;
    .ContactContainer {
      .HeaderContact {
        font-size: 24pt;
        background: url(${ecologica5});
        object-fit: cover;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px 10px 10px 10px;
        font-weight: 700;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
      }

      .BodyContact {
        display: flex;
        flex-direction: column;
        justify-content: center;
        justify-items: center;
        align-items: center;
        align-content: center;
        font-size: 16pt;
        background: white;
        row-gap: 15px;

        .ItemText {
          display: flex;
          flex-direction: row;
          column-gap: 10px;
        }
      }

      .BottomContact {
        font-size: 18pt;
        background: url(${ecologica5});
        object-fit: cover;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px 10px 10px 10px;
        font-weight: 500;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
      }
    }
  }

  @media only screen and (min-width: 1200px) {
    width: 60%;
    .ContactContainer {
      .HeaderContact {
        font-size: 24pt;
        background: url(${ecologica5});
        object-fit: cover;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px 10px 10px 10px;
        font-weight: 700;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
      }

      .BodyContact {
        display: flex;
        flex-direction: column;
        justify-content: center;
        justify-items: center;
        align-items: center;
        align-content: center;
        font-size: 16pt;
        background: white;
        row-gap: 10px;

        .ItemText {
          display: flex;
          flex-direction: row;
          column-gap: 5px;
        }
      }

      .BottomContact {
        font-size: 18pt;
        background: url(${ecologica5});
        object-fit: cover;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px 10px 10px 10px;
        font-weight: 500;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
      }
    }
  }
`;
