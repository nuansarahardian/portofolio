import React from 'react'
import react from '../assets/react.png'
import flutter from '../assets/flutter.png'
import javascript from '../assets/javascript.png'
import tailwind from '../assets/tailwind.png'
import node from '../assets/node.png'
import laravel from '../assets/laravel.png'


const Skills = () => {
  return (
    <div className='flex flex-col justify-center mx-auto max-w-[1350px] max-h-[1200px] mb-8 md:mb-96 mt-16'>
        <div className='md:text-5xl text-4xl font-bold md:mt-16 flex justify-center items-center text-transparent bg-clip-text bg-gradient-to-br from-white'>Skills</div>
       <div className='flex justify-center md:mt-2 w-[100%] flex-wrap pl-10 pr-10 pt-4'>
       <div className='md:min-w-[120px] md:min-h-[120px] min-w-[110px] min-h-[110px] m-3 h-[110px]  rounded-2xl bg-gradient-to-b from-blue-200/20 from-10% border-[1px] border-slate-500 backdrop-filter backdrop-blur-4xl flex place-content-center hover:from-blue-500/20  hover:scale-[1.05]'><img className='md:h-[90px] h-[80px] my-auto' src={react} /></div>
       <div className='md:min-w-[120px] md:min-h-[120px] min-w-[110px] min-h-[110px] m-3 h-[110px]  rounded-2xl bg-gradient-to-b from-blue-200/20 from-10% border-[1px] border-slate-500 backdrop-filter backdrop-blur-xl flex place-content-center'><img className='md:h-[60px] h-[60px] my-auto' src={tailwind} /></div>
       <div className='md:min-w-[120px] md:min-h-[120px] min-w-[110px] min-h-[110px] m-3 h-[110px]  rounded-2xl bg-gradient-to-b from-blue-200/20 from-10% border-[1px] border-slate-500 backdrop-filter backdrop-blur-xl flex place-content-center'><img className='md:w-[110px]  w-[100px] my-auto' src={laravel} /></div>
       <div className='md:min-w-[120px] md:min-h-[120px] min-w-[110px] min-h-[110px] m-3 h-[110px]  rounded-2xl bg-gradient-to-b from-blue-200/20 from-10% border-[1px] border-slate-500 backdrop-filter backdrop-blur-xl flex place-content-center'><img className='md:h-[90px] h-[80px] my-auto' src={node} /></div>
       <div className='md:min-w-[120px] md:min-h-[120px] min-w-[110px] min-h-[110px] m-3 h-[110px]  rounded-2xl bg-gradient-to-b from-blue-200/20 from-10% border-[1px] border-slate-500 backdrop-filter backdrop-blur-xl flex place-content-center'><img className='md:h-[80px] h-[70px] my-auto' src={flutter} /></div>
       <div className='md:min-w-[120px] md:min-h-[120px] min-w-[110px] min-h-[110px] m-3 h-[110px]  rounded-2xl bg-gradient-to-b from-blue-200/20 from-10% border-[1px] border-slate-500 backdrop-filter backdrop-blur-xl flex place-content-center'><img className='md:h-[80px] h-[70px] my-auto' src={javascript} /></div>

       </div>
      
    </div>
  )
}

export default Skills