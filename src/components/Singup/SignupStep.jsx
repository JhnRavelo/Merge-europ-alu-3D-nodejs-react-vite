import propTypes from 'prop-types'
import SignupStepOne from './SignupStepOne';
import SignupStepTwo from './SignupStepTwo';

const SignupStep = ({index}) => {
  if (index == 0) {
    return <SignupStepOne />;
  }else if(index==1){
    return <SignupStepTwo/>
  }
}

SignupStep.propTypes = {
  index: propTypes.number
}

export default SignupStep