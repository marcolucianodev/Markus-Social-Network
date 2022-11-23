import styled from "styled-components";

export const SliderContainer = styled.section`
	margin: 0 auto;
  width: 80rem;
	width: 100%;
  height: 25rem;
  overflow: hidden;
	position: relative;
	border-radius: 0.5rem;
`;

export const Slides = styled.div`
	width: 400%;
  height: 25rem;
  display: flex;

	input {
		display: none;
	}

	#radio1:checked ~ .first {
		margin-left: 0;
	}

	#radio2:checked ~ .first {
		margin-left: -25%;
	}

	#radio3:checked ~ .first {
		margin-left: -50%;
	}

	#radio4:checked ~ .first {
		margin-left: -75%;
	}

	#radio1:checked ~ .first {
		background-color: var(--white-background);
	}
`;

export const SlideItems = styled.div`
	width: 25%;
  position: relative;
  transition: 1s;
`;

export const SlideImage = styled.img`
  object-fit: cover;
  object-position: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;

export const AutoNavigation = styled.div`
	display: flex;
  justify-content: center;
  width: 80rem;
  width: 100%;
	position: absolute;
  margin-top: 36rem;
`;

export const AutoButton = styled.div`
  border: 2px solid red;
  padding: .5rem;
  border-radius: 1rem;

  :not(:last-child) {
    margin-right: 3rem;
  }

  :checked {
    background-color: var(--white-background);
  }
`;

export const ManualNavigation = styled.div`
	position: absolute;
  display: flex;
  justify-content: center;
  margin-top: -4rem;
	left: 50%;
	right: 50%;
`

export const Label = styled.label`
  border: 2px solid var(--border-light-white);
  padding: .5rem;
  border-radius: 1rem;
  cursor: pointer;

  :not(:last-child){
    margin-right: 3rem;
  }

  :hover {
    background-color: rgba(255, 255, 255, 0.6);
  }
`;
