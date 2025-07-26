import { GiFullMotorcycleHelmet } from 'react-icons/gi';
import { SiYamahamotorcorporation } from 'react-icons/si';
import { FcGoogle } from 'react-icons/fc';
import axios from 'axios';
import { useFormik } from 'formik';
import { validationLogInSchema } from './Validation';
import { showSuccessToast, showErrorToast } from '../tostNotification/Notification';
import { useNavigate } from 'react-router-dom';
import { APIURL } from '../../GlobalAPIURL';
import { Link } from 'react-router-dom';
import { use, useState } from 'react';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants, buttonVariants } from './Motion'
import {useAuth} from '../../context/AuthContext'


export default function LogIn() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const {setIsLog} = useAuth();
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
    isValid,
    dirty
  } = useFormik({
    initialValues: { email: '', password: '', confirmPassword: '' },
    validationSchema: validationLogInSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        setLoading(true);
        const response = await axios.post(`${APIURL}LogInUser`, values);
        const id = response.data.data.id;
        const token = response.data.data.token;

        if (response.status === 200 || response.status === 201) {
          showSuccessToast(response.data.msg);
          sessionStorage.setItem('UsereId', id);
          sessionStorage.setItem('UsereToken', token);
          setIsLog(true)
          navigate(`/`);
          resetForm();
        }
      } catch (err) {
        if (err.response?.data?.msg === 'Account already verified, please login') {
          showSuccessToast(err.response?.data?.msg);
          navigate('/log-in');
        } else {
          showErrorToast(err.response?.data?.msg || 'An error occurred');
        }
      } finally {
        setLoading(false);
      }
    },
  });

  const SignData = [
    { name: 'email', placeholder: 'Enter your email', type: 'email' },
    { name: 'password', placeholder: 'Enter your password', type: 'password' },
    { name: 'confirmPassword', placeholder: 'Enter your Confirm Password', type: 'password' },
  ];

  const isButtonDisabled = loading || !isValid || !dirty;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col lg:flex-row h-screen font-sans"
    >
      {/* Left Section */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="lg:w-1/2 w-full text-white bg-gradient-to-r from-blue-600 to-purple-600 flex flex-col justify-center items-center p-10 gap-10"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-4 text-6xl font-bold"
        >
          <GiFullMotorcycleHelmet className="text-white" />
          <span>SuperBike</span>
        </motion.div>

        <motion.div
          initial={{ rotate: -30, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-8xl"
        >
          <SiYamahamotorcorporation />
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-3xl font-semibold text-center"
        >
          <span className="font-extrabold text-white">RIDING</span> is everything.
        </motion.div>

        <motion.ul
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-xl space-y-4 text-center max-w-md"
        >
          <motion.li variants={itemVariants}>
            Four wheels move the body; two wheels move the soul.
          </motion.li>
          <motion.li variants={itemVariants}>
            Life is short, buy the motorcycle, have a ride, live your dreams.
          </motion.li>
        </motion.ul>
      </motion.div>

      {/* Right Section */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="lg:w-1/2 w-full bg-gradient-to-r from-purple-600 to-blue-600 flex flex-col justify-center items-center px-8 py-12 text-white gap-8"
      >
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <h2 className="text-4xl font-extrabold mb-2">VROOOOM!</h2>
          <p className="text-xl">Sign Up To Get News 'bout The Latest Biker Events</p>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-3 bg-white text-black px-6 py-2 rounded-full shadow-md"
        >
          <FcGoogle className="text-2xl" />
          <span className="text-md font-medium">Sign Up with Google</span>
        </motion.button>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ delay: 0.4 }}
          className="w-full max-w-md border-b border-white/30"
        />

        <motion.form
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-5 w-full max-w-md"
          onSubmit={handleSubmit}
        >
          {SignData.map(({ name, placeholder, type }, index) => (
            <motion.div key={index} variants={itemVariants}>
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
                <motion.p
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  className="text-sm text-red-300 mt-1"
                >
                  {errors[name]}
                </motion.p>
              )}
            </motion.div>
          ))}

          <motion.div variants={itemVariants} className="flex justify-between items-center">
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" className="accent-white" />
              Remember Me
            </label>
            <Link to="/forgot-password" className="text-sm text-white hover:underline">
              Forgot Password?
            </Link>
          </motion.div>

          <motion.button
            variants={buttonVariants}
            type="submit"
            disabled={isButtonDisabled}
            whileHover={!isButtonDisabled ? { scale: 1.02 } : {}}
            whileTap={!isButtonDisabled ? { scale: 0.98 } : {}}
            className={`bg-white text-blue-600 font-semibold py-3 rounded-md ${isButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''
              }`}
          >
            {loading ? (
              <motion.div
                className="flex items-center justify-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.svg
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                  className="h-5 w-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </motion.svg>
                Processing...
              </motion.div>
            ) : 'Log In'}
          </motion.button>

          <motion.div variants={itemVariants} className="text-center text-sm">
            Don't have an account?{' '}
            <Link to="/sign-up" className="font-semibold hover:underline">
              Create Account
            </Link>
          </motion.div>
        </motion.form>
      </motion.div>
    </motion.div>
  );
}