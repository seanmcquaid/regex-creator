import propTypes from 'prop-types';
import styled from 'styled-components';

const TextInput = ({ onChange, value, name, label }) => (
  <StyledLabel htmlFor={name}>
    {label}
    <StyledTextInput
      value={value}
      type="text"
      name={name}
      onChange={onChange}
      data-testid={`${name}TextInput`}
    />
  </StyledLabel>
);

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledTextInput = styled.input`
  padding: 0.5rem;
  margin: 0.5rem;
`;

TextInput.propTypes = {
  onChange: propTypes.func.isRequired,
  value: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
};

export default TextInput;
