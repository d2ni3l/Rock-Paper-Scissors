import React from 'react'

function Header() {
  return (
    <div className='mt-10 mx-5 border-[3px] border-[#5d6e88]  rounded-lg '>
       <div className="flex justify-between items-center mx-4 py-3">
        <div className="flex flex-col uppercase text-white -space-y-3 font-medium text-2xl tracking-wider">
            <h1>Rock</h1>
            <h1>Paper</h1>
            <h1>Scissors</h1>
        </div>

        <div className='flex flex-col items-center justify-center uppercase bg-[#f9f9f9] rounded-lg p-3 px-7'>
           <h2 className='text-xs text-[#2a46c0] font-bold tracking-widest'>score</h2>
           <span className='text-5xl text-[#57536a] font-bold'>12</span>
        </div>
       </div>
    </div>
  )
}

export default Header