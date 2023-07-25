import { Typography } from "Styles";
import styled from "styled-components";

export const StyledPost = styled.div`
  min-height: 300px;
  width: 300px;
  background-color: white;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const StyledImage = styled.div<{ image: string }>`
  height: 150px;
  width: 300px;
  object-fit: cover;
  background: url(${(props) => props.image});
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.3);

  background-position: center;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  padding: 8px;

  display: flex;
  justify-content: space-between;
  align-items: start;
`;

export const Creator = styled.h3`
  color: white;
`;

export const TimeAgo = styled.h5`
  ${Typography.BodyM}
  color: white;
`;

export const EditButton = styled.button`
  width: max-content;
  ${Typography.HeadingS}
  color: #D9D9D9;
  background-color: transparent;
`;

export const SubContainer = styled.div`
  padding: 8px;
  min-height: 100px;

  display: flex;
  flex-direction: column;
  align-items: space-between;
  gap: 4px;
`;

export const Title = styled.h2`
  ${Typography.HeadingM}
  font-size: 26px;
`;

export const Tags = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Tag = styled.p`
  ${Typography.BodyS}
`;

export const Message = styled.p`
  ${Typography.BodyM}
`;

export const BottomSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;

  svg {
    cursor: pointer;
    transform: scale(1.5);

    path {
      fill: grey;
    }
  }
`;

export const Like = styled.button`
  ${Typography.BodyM}
  color: grey;
  background-color: transparent;
  font-weight: 700;
`;

export const Container = styled.div`
  height: 250px;
  width: 100%;
  padding: 8px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 4px;
`;
