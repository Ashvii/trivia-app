import React from 'react'

function Home() {
  return (
    <>
      <div className="heading flex justify-center items-center text-center mt-10">
        <h1 className=" text-[180px] font-bold">TRIVIA GAME</h1>
        <img src="Dice.png" alt="Dice" className="w-[500px] h-[400px] ml-4" />
      </div>
      <div className="btn">
        <button className='text-[50px] font-bold bg-white rounded-[50px] p-5 w-[700px] ml-30'>Start Game</button>
      </div>
    </>
  )
}

export default Home
