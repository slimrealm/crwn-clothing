import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils';

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </div>
  );
};

export default SignIn;

/*
There should be a Learn More link in the popup, clicking that should take you to the Google
APIs
console that has three tabs under the header named Credentials, OAuth Consent Screen, and
Domain Verification. Go to the OAuth Consent Screen tab and update the Application Name to
"crwn-clothing" or any other name you're comfortable with (i.e. the name of your project).
Click on save at the bottom, then try logging into your verified Google account thereafter.
*/
