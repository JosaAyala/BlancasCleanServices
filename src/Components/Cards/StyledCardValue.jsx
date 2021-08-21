import styled from "styled-components";
import ecologica5 from "../../Assets/ecologica5.jpg";

export const StyledCardValue = styled.div`
  .CardContainer {
    filter: drop-shadow(0 2mm 2mm black);

    .CardHeader {
      font-size: 16pt;
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

    .CardBody {
      padding: 10px 10px 10px 10px;
      font-size: 11pt;
      background: white;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      max-height: 60px;
      min-height: 60px;
    }
  }
`;
