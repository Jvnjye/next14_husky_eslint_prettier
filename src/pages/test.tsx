import styled from 'styled-components';

const StyledDiv = styled.div`
  background: gray;
  width: 700px;
  height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(to right, red 1px, transparent 1px),
    linear-gradient(to bottom, red 1px, transparent 1px),
    linear-gradient(to left, red 1px, transparent 1px),
    linear-gradient(to top, red 1px, transparent 1px);
  background-size: contain;
  background-repeat: repeat;
`;

const StyledInnerBox = styled.div`
  --total-width: 17px; /* 1px (dash) + 16px (gap) */
  width: 600px;
  height: 600px;
  background: orange;
  position: relative;
  border: 10px solid;
  border-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20 20"><rect width="100%" height="100%" fill="none" stroke="red" stroke-width="2" stroke-dasharray="5,3" rx="8" ry="8"/></svg>')
    10 round;
  padding: 15px;
`;
const Test = () => {
  return (
    <StyledDiv>
      <StyledInnerBox></StyledInnerBox>

      <StyledBox>
        <StyledItem>1</StyledItem>
        <StyledItem>2</StyledItem>
        <StyledItem>3</StyledItem>
        <StyledItem>4</StyledItem>
        <StyledItem>4</StyledItem>
      </StyledBox>
    </StyledDiv>
  );
};

const StyledBox = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-content: flex-start; /* 关键属性 */
  justify-content: flex-start;
`;
const StyledItem = styled.div`
  flex-basis: calc(50% - 0.5rem);
  aspect-ratio: 1/1;
  position: relative;
  background-color: aliceblue;
`;
export default Test;
