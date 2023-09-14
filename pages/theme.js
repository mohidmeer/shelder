import AppLayout from '@/layouts/AppLayout'


export default function Theme() {
  return (
    <AppLayout>
      <div className='flex flex-col items-center justify-center w-full bg-[#f6f6f6]'>
        <p className='font-bold text-3xl'>Typography</p>
        <div className='mt-10'>
            <h1>A Quick Brown Fox Jumps Over Lazy Dog</h1>
            <h2>A Quick Brown Fox Jumps Over Lazy Dog</h2>
            <h3>A Quick Brown Fox Jumps Over Lazy Dog</h3>
            <h4>A Quick Brown Fox Jumps Over Lazy Dog</h4>
            <h5>A Quick Brown Fox Jumps Over Lazy Dog</h5>
            <h6>A Quick Brown Fox Jumps Over Lazy Dog</h6>
        </div>
        <div className='mt-10 max-w-6xl mx-auto'>
            <p className='font-bold text-2xl text-center'>Textlight</p>
            <p className='text-light'>
            Shelder Roofing & Retro-Fit group is a family-owned & operated business serving the greater San Fransisco. In 1991 we expanded our outstanding service lists, offering a variety of energy saving solutions that we had perfected over the coarse of the last 10 years.
            </p>
        </div>
        <div className='mt-10 max-w-6xl mx-auto'>
            <p className='font-bold text-2xl text-center'>Inputs</p>
            <div className='flex justify-center gap-4'>
                <input placeholder='Name'/>
                <input placeholder='Email'/>
            </div>
        </div>
        <div className='mt-10 max-w-6xl mx-auto'>
            <p className='font-bold text-2xl text-center'>Buttons</p>
            <div className='flex justify-center gap-4 w-full '>
                <button className='w-full'>
                    Buttons
                </button>
              
                
            </div>
        </div>
        <div className='mt-10 max-w-6xl mx-auto'>
            <p className='font-bold text-2xl text-center'>Colors</p>
             <div className='flex gap-4'>
                <div className='p-4 bg-primary text-white font-bold'>
                    PRIMARY
                </div>
                <div className='p-4 bg-secondary-light text-white font-bold'>
                    Secondary Light
                </div>
                <div className='p-4 bg-secondary-dark bg-opacity-100  text-white font-bold'>
                    Secondary Dark
                </div>
             </div>
        </div>
        <div className='mt-10 max-w-6xl mx-auto'>
            <p className='font-bold text-2xl text-center'>Gradients</p>
             <div className='flex gap-4'>
                <div className='p-4  bg-gradient-to-tr from-red-500 to-orange-400 text-white font-bold'>
                    PRIMARY Gradient
                </div>
                <div className='p-4 bg-gradient-to-r  from-blue-900 to-gray-700 text-white font-bold'>
                     Secondary Gradient
                </div>
                <div className='p-4 bg-gradient-to-r  from-green-900 to-gray-700  text-white font-bold'>
                    PRIMARY Gradient
                </div>
             </div>
        </div>
        <div className='mt-10 max-w-6xl mx-auto'>
            <p className='font-bold text-2xl text-center'>Fonts</p>
             <div className='flex gap-4'>
                <div className='p-4 bg-primary text-white font-bold'>
                    PRIMARY
                </div>
                <div className='p-4 bg-secondary-light text-white font-bold'>
                    Secondary Light
                </div>
                <div className='p-4 bg-secondary-dark bg-opacity-100  text-white font-bold'>
                    Secondary Dark
                </div>
             </div>
        </div>
        <div className='mt-10 max-w-6xl mx-auto'>
            <p className='font-bold text-2xl text-center'>Colors</p>
             <div className='flex gap-4'>
                <div className='p-4 bg-primary text-white font-bold'>
                    PRIMARY
                </div>
                <div className='p-4 bg-secondary-light text-white font-bold'>
                    Secondary Light
                </div>
                <div className='p-4 bg-secondary-dark bg-opacity-100  text-white font-bold'>
                    Secondary Dark
                </div>
             </div>
        </div>
        <div className='mt-10 max-w-6xl mx-auto'>
            <p className='font-bold text-2xl text-center'>Colors</p>
             <div className='flex gap-4'>
                <div className='p-4 bg-primary text-white font-bold'>
                    PRIMARY
                </div>
                <div className='p-4 bg-secondary-light text-white font-bold'>
                    Secondary Light
                </div>
                <div className='p-4 bg-secondary-dark bg-opacity-100  text-white font-bold'>
                    Secondary Dark
                </div>
             </div>
        </div>


      </div>

     

    </AppLayout>
  )
}
