import styled from "styled-components";

const StyledDiv = styled.div`
  margin-left: 1.125rem;
  /* width: 129px; */
  width: fit-content;
  font-size: 0.875rem;
  align-self: center;
  display: grid;
  align-items: center;
  grid-template-areas: "select";
  & > select {
    appearance: none;
    background-color: transparent;
    border: none;
    outline: none;
    padding: 0 1.2rem;
    margin: 0;
    /* width: 100%; */
    width: inherit;
    font-family: inherit;
    font-size: inherit;
    cursor: pointer;
    line-height: inherit;
  }
  & > select::-ms-expand {
    display: none;
  }
  &::after {
    content: "";
    width: 0.8em;
    height: 0.5em;
    margin-top: 0.25em;
    background-color: var(--select-arrow);
    clip-path: polygon(50% 65%, 90% 0, 100% 10%, 50% 90%, 0 10%, 10% 0);
    justify-self: end;
  }
  & > select,
  ::after,
  i {
    grid-area: select;
  }
  & > i {
    margin-top: 0.25em;
    color: var(--dark-accent);
  }
`;

const Location = () => {
  return (
    <StyledDiv>
      <i className={"fa-solid fa-location-dot"}></i>
      <select name="location" id="location">
        <option value="newyorkcity">New York City</option>
        <option value="kolding">Kolding</option>
        <option value="groenfeld">Grønfeld</option>
      </select>
    </StyledDiv>
  );
};

export default Location;
