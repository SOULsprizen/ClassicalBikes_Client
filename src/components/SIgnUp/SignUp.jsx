import { GiFullMotorcycleHelmet } from 'react-icons/gi';
import { SiYamahamotorcorporation } from 'react-icons/si';
import { FcGoogle } from 'react-icons/fc';
import axios from 'axios';
import { useFormik } from 'formik';
import { validationSignUpSchema } from './Validation';
import {showSuccessToast,showErrorToast} from '../tostNotification/Notification'
import {useNavigate} from 'react-router-dom'
import {APIURL} from '../../GlobalAPIURL'

export default function SignUp() {

  const navigate = useNavigate()

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } = useFormik({
    initialValues: { name: '', email: '', password: '', },
    validationSchema: validationSignUpSchema,

    
    onSubmit: async (values, { resetForm }) => {
      try {
        
        const response = await axios.post(`${APIURL}CreateUser`, values);
        const id = response.data.data._id
        const email = response.data.data.email
        
        if(response.status === 200 || response.status === 201){
          showSuccessToast(response.data.msg);
          sessionStorage.setItem('Useremail', email)
          navigate(`/otp-verification/user_otp/${id}`)
          resetForm();
        }
      } catch (err) {
        if(err.response?.data?.msg=='Account already verified, please login') {
          showSuccessToast(err.response?.data?.msg);
          navigate('/log-in')
        }
        else showErrorToast(err.response?.data?.msg || 'An error occurred');
      }
    },
  });

  const SignData = [
    { name: 'name', placeholder: 'Enter your name', type: 'text' },
    { name: 'email', placeholder: 'Enter your email', type: 'email' },
    { name: 'password', placeholder: 'Enter your password', type: 'password' },
  ];

  return (
    <div className="flex flex-col lg:flex-row h-screen font-sans">

      <div className="lg:w-1/2 w-full text-white bg-gradient-to-r from-blue-600 to-purple-600 flex flex-col justify-center items-center p-10 gap-10">
        <div className="flex items-center gap-4 text-6xl font-bold">
          <GiFullMotorcycleHelmet className="text-white" />
          <span>SuperBike</span>
        </div>

        <div className="text-8xl">
          <SiYamahamotorcorporation />
        </div>

        <div className="text-3xl font-semibold text-center">
          <span className="font-extrabold text-white">RIDING</span> is everything.
        </div>

        <ul className="text-xl space-y-4 text-center max-w-md">
          <li>Four wheels move the body; two wheels move the soul.</li>
          <li>Life is short, buy the motorcycle, have a ride, live your dreams.</li>
        </ul>
      </div>


      <div className="lg:w-1/2 w-full bg-gradient-to-r from-purple-600 to-blue-600 flex flex-col justify-center items-center px-8 py-12 text-white gap-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold mb-2">VROOOOM!</h2>
          <p className="text-xl">Sign Up To Get News 'bout The Latest Biker Events</p>
        </div>

        <button className="flex items-center gap-3 bg-white text-black px-6 py-2 rounded-full shadow-md hover:scale-105 transition-transform duration-300">
          <FcGoogle className="text-2xl" />
          <span className="text-md font-medium">Sign Up with Google</span>
        </button>

        <div className="w-full max-w-md border-b border-white/30"></div>

        <form className="flex flex-col gap-5 w-full max-w-md" onSubmit={handleSubmit}>

          {SignData.map(({ name, placeholder, type }, index) => (
            <div key={index}>
              <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={values[name]}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`p-3 rounded-md bg-white/10 border w-full border-white/20 focus:outline-none focus:ring-2 ${touched[name] && errors[name] ? 'ring-red-500' : 'ring-white'
                  }`}
              />
              {touched[name] && errors[name] && (
                <p className="text-sm text-red-300 mt-1">{errors[name]}</p>
              )}
            </div>
          ))}

          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" className="accent-white" />
            Save Password
          </label>

          <button type="submit" className="bg-white text-blue-600 font-semibold py-3 rounded-md hover:bg-gray-200 transition-colors">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
