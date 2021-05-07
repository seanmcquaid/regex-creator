import propTypes from 'prop-types';
import styled from 'styled-components';
import { Textarea } from '../components';

const RegexResult = ({ regex, exampleString, flags }) => {
  const newRegex = new RegExp(regex, flags);
  console.log(newRegex);
  return (
    <RegexResultContainer>
      <Regex>{regex}</Regex>
      <Textarea
        value={exampleString}
        name="exampleStringRegexResult"
        readOnly={true}
        label="Example String Regex Result"
      />
    </RegexResultContainer>
  );
};

const RegexResultContainer = styled.div``;

const Regex = styled.span``;

RegexResult.propTypes = {
  regex: propTypes.string.isRequired,
  exampleString: propTypes.string.isRequired,
  flags: propTypes.string.isRequired,
};

export default RegexResult;
