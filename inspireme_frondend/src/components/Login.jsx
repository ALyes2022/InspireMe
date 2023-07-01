import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import backgroundVid from '../assets/backgroundVid.mp4';
import logoInspireMe from '../assets/logoInspireMe.png';
import jwt_decode from 'jwt-decode';
import { client } from '../client';



const Login = () => {

  const navigate = useNavigate();

  const responseGoogledecoded = (response) => {
    const responseDecoded = jwt_decode(response.credential);
    localStorage.setItem('user', JSON.stringify(responseDecoded));
    const { name, sub, picture } = responseDecoded;
    // console.log(response);
    // console.log(response.credential);

    const doc = {
      _id: sub,
      _type: 'user',
      userName: name,
      image: picture,
    }

    client.createIfNotExists(doc) //https://www.sanity.io/docs/http-mutations
      .then(() => {
        navigate('/', { replace: true })
        //https://reach.tech/router/api/navigate

      })


    console.log(name, sub, picture);

  }



  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <video
          src={backgroundVid}
          type="video/mp4"
          loop
          controls={false}
          autoPlay
          muted
          className="w-full h-full object-cover"

        />

        <div className="absolute flex flex-col justify-center items-center top-0 right-0 bottom-0 left-0 bg-blackOverlay">
          <div className='p-5'>
            <img src={logoInspireMe} width="300px" alt="logo" />
          </div>
          <GoogleOAuthProvider clientId="696042889856-qc8njqfkn7nnms9247korq31erlq1fbg.apps.googleusercontent.com">

            <div className="shadow-2xl">
              <GoogleLogin
                //https://www.npmjs.com/package/@react-oauth/google
                //https://www.npmjs.com/package/react-google-login
                render={(renderProps) => (
                  <button
                    type="button"
                    className='bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none'
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}

                  >
                    <FcGoogle className='mr-4' />Sign In with Google
                  </button>
                )}

                onSuccess={responseGoogledecoded}
                onError={response => console.log(response)}
                cookiePolicy="same-origin"


              />
            </div>
          </GoogleOAuthProvider>
        </div>
      </div>
    </div>
  )
}

export default Login