import propTypes from 'prop-types';
import SignupStepTemplate from './SignupStepTemplate';
import SignupStepPassword from './SignupStepPassword';

const SignupStep = ({ index }) => {
  if (index == 2) {
    return <SignupStepPassword/>;
  } else {
    return <SignupStepTemplate index={index}/>;
  }
};

SignupStep.propTypes = {
  index: propTypes.number,
};

export default SignupStep;
