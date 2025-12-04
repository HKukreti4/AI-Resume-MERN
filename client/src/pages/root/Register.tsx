import RegisterForm from '@/components/forms/auth/RegisterForm';


const Register = () => {
  return (

<div className="min-h-screen w-full flex justify-center items-center relative">
  {/* Azure Depths */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "radial-gradient(125% 125% at 50% 100%, #000000 40%, #010133 100%)",
    }}
  />
  {/* Your Content/Components */}
 <RegisterForm/>
</div>

    // <div className='flex justify-center items-center h-screen'>
    
    // </div>
  )
}

export default Register;