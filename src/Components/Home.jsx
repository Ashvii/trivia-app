import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <div className="heading flex flex-col md:flex-row justify-center items-center text-center mt-10 px-4">
        <h1 className="text-[60px] md:text-[100px] font-bold font-grace">TRIVIA GAME</h1>
        <img
          src="Dice.png"
          alt="Dice"
          className="w-[200px] h-[220px] md:w-[350px] md:h-[400px] mt-4 md:ml-4"
        />
      </div>
      <div className="btn flex justify-center mt-8 px-4 max-w-screen-sm mx-auto">

        <Link to="/game">
          <button className=" flex items-center justify-center text-white text-[24px]  md:text-[50px] font-bold bg-black rounded-[40px] p-3 md:p-5 w-full md:w-[400px] h-full md:h-[90px]">
            Start Game
          </button>
        </Link>
      </div>
    </>
  );
}

export default Home;
