import React, { useEffect, useMemo, useState } from 'react'
import Trivia from './Trivia'
import Timer from './Timer'

function Game() {

    const [questionNumber, setQuestionNumber] = useState(1)
    const [stop, setStop] = useState(false)
    const [earned, setEarned] = useState("level 1")


    const [usedFiftyFifty, setUsedFiftyFifty] = useState(false);
    const [usedSkip, setUsedSkip] = useState(false);
    const [fiftyFiftyAnswers, setFiftyFiftyAnswers] = useState([]);



    const data = [
        {
            id: 1,
            question: "What is the capital of France?",
            answers: [
                {
                    text: "Berlin",
                    correct: false,
                },
                {
                    text: "Paris",
                    correct: true,
                },
                {
                    text: "London",
                    correct: false,
                },
                {
                    text: "Rome",
                    correct: false,
                },
            ],
        },
        {
            id: 2,
            question: "Which planet is known as the 'Red Planet'?",
            answers: [
                {
                    text: "Earth",
                    correct: false,
                },
                {
                    text: "Mars",
                    correct: true,
                },
                {
                    text: "Jupiter",
                    correct: false,
                },
                {
                    text: "Saturn",
                    correct: false,
                },
            ],
        },
        {
            id: 3,
            question: "Who wrote 'To Kill a Mockingbird'?",
            answers: [
                {
                    text: "F. Scott Fitzgerald",
                    correct: false,
                },
                {
                    text: "Harper Lee",
                    correct: true,
                },
                {
                    text: "Jane Austen",
                    correct: false,
                },
                {
                    text: "J.K. Rowling",
                    correct: false,
                },
            ],
        },
        {
            id: 4,
            question: "What is the largest mammal on Earth?",
            answers: [
                {
                    text: "Elephant",
                    correct: false,
                },
                {
                    text: "Lion",
                    correct: false,
                },
                {
                    text: "Blue whale",
                    correct: true,
                },
                {
                    text: "Hippopotamus",
                    correct: false,
                },
            ],
        },
        {
            id: 5,
            question: "Who was the first President of the United States?",
            answers: [
                {
                    text: "Thomas Jefferson",
                    correct: false,
                },
                {
                    text: "George Washington",
                    correct: true,
                },
                {
                    text: "Abraham Lincoln",
                    correct: false,
                },
                {
                    text: "Franklin D. Roosevelt",
                    correct: false,
                },
            ],
        },
        {
            id: 6,
            question: "What is the chemical symbol for gold?",
            answers: [
                {
                    text: "Ag",
                    correct: false,
                },
                {
                    text: "Au",
                    correct: true,
                },
                {
                    text: "Hg",
                    correct: false,
                },
                {
                    text: "Pb",
                    correct: false,
                },
            ],
        },
        {
            id: 7,
            question: "Which Indian state is known as the 'Land of Five Rivers'?",
            answers: [
                {
                    text: "Uttar Pradesh",
                    correct: false,
                },
                {
                    text: "Bihar",
                    correct: false,
                },
                {
                    text: "Punjab",
                    correct: true,
                },
                {
                    text: "Haryana",
                    correct: false,
                },
            ],
        },
        {
            id: 8,
            question: "Who painted the famous artwork 'The Starry Night'?",
            answers: [
                {
                    text: "Leonardo da Vinci",
                    correct: false,
                },
                {
                    text: "Vincent van Gogh",
                    correct: true,
                },
                {
                    text: "Pablo Picasso",
                    correct: false,
                },
                {
                    text: "Claude Monet",
                    correct: false,
                },
            ],
        },
        {
            id: 9,
            question: "What is the world's largest waterfall, by volume of water?",
            answers: [
                {
                    text: "Victoria Falls",
                    correct: false,
                },
                {
                    text: "Iguazu Falls",
                    correct: false,
                },
                {
                    text: "Niagara Falls",
                    correct: false,
                },
                {
                    text: "Inga Falls (Congo River)",
                    correct: true,
                },
            ],
        },

    ];

    const LevelPyramid = useMemo(() =>
        [
            { id: 1, level: "level 1" },
            { id: 2, level: "level 2" },
            { id: 3, level: "level 3" },
            { id: 4, level: "level 4" },
            { id: 5, level: "level 5" },
            { id: 6, level: "level 6" },
            { id: 7, level: "level 7" },
            { id: 8, level: "level 8" },
            { id: 9, level: "level 9" },
        ].reverse(), []);

    useEffect(() => {
        questionNumber > 1 &&
            setEarned(LevelPyramid.find((m) => m.id === questionNumber - 1).level);
    }, [questionNumber, LevelPyramid]);

    useEffect(() => {
        if (questionNumber > 9) {
            setStop(true);  // End the game
        }
    }, [questionNumber]);


    const shuffledData = useMemo(() => {
        return [...data].sort(() => Math.random() - 0.5);
    }, []);

    const handleRestart = () => {
        setQuestionNumber(1);
        setStop(false);
        setEarned("level 1");
    };

    return (
        <div className='app flex' style={{ height: '100vh' }}>


            <div className="main flex flex-col">
                {
                    stop ? (<div className="endTextContainer">
                        <h1 className="endText">You reached: {earned}</h1>
                        <button className="restartButton" onClick={handleRestart}>
                            Restart
                        </button>
                    </div>) :
                        (
                            <>
                                <div className="top h-[42%] relative">
                                    <div className="timer absolute w-[100px] h-[100px] rounded-full border-4 border-white flex items-center justify-center text-[40px] font-bold">
                                        <Timer setStop={setStop} questionNumber={questionNumber} />
                                    </div>
                                </div>

                                <div className="lifelines flex gap-4 p-4 justify-center">
                                    <button
                                        onClick={() => {
                                            if (!usedFiftyFifty && !stop) {
                                                const currentQ = shuffledData[questionNumber - 1];
                                                const incorrect = currentQ.answers.filter(a => !a.correct);
                                                const remaining = incorrect.sort(() => 0.5 - Math.random()).slice(0, 2);
                                                setFiftyFiftyAnswers([...remaining.map(a => a.text)]);
                                                setUsedFiftyFifty(true);
                                            }
                                        }}
                                        disabled={usedFiftyFifty || stop}
                                        className="btn btn-blue border rounded-xl p-3 shadow bg-black text-white"
                                    >
                                        50:50
                                    </button>

                                    <button
                                        onClick={() => {
                                            if (!usedSkip && !stop) {
                                                setUsedSkip(true);
                                                setQuestionNumber(prev => prev + 1);
                                            }
                                        }}
                                        disabled={usedSkip || stop}
                                        className="btn btn-green  border rounded-xl p-3 shadow bg-black text-white"
                                    >
                                        Skip
                                    </button>
                                </div>


                                <div className="bottom"><Trivia data={shuffledData} setStop={setStop} questionNumber={questionNumber} setQuestionNumber={setQuestionNumber} fiftyFiftyAnswers={fiftyFiftyAnswers}
                                /></div>
                            </>
                        )
                }

            </div>



            <div className="pyramid ">
                <ul className='levellist  pr-3 pl-3'>
                    {LevelPyramid.map((m) => (

                        <li key={m.id} className={questionNumber == m.id ? "levellistitem text-white text-[20px] d-flex items-center justify-center p-5  mb-2 mt-1"
                            : "levellistitem text-white  text-[20px] d-flex items-center justify-center p-5 mb-2 mt-1 active"}>
                            <span className='m-5'>{m.id}.</span>
                            <span className='m-3'>{m.level}</span>
                        </li>

                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Game
