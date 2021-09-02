import React, {useEffect, useMemo, useState} from "react";
import "./App.css";
import Quiz from "./components/Quiz";
import Timer from "./components/Timer";
import Start from "./components/Start";

function App() {

    const [username, setUsername] = useState(null);
    const [questionNumber, setQuestionNumber] = useState(1);
    const [stop, setStop] = useState(false);
    const [earned, setEarned] = useState("$ 0");

    const data = [
        {
            id: 1,
            question: "Who develop React.JS?",
            answers: [
                {
                    text: "Apple",
                    correct: false
                },
                {
                    text: "Google",
                    correct: false
                },
                {
                    text: "Twitter",
                    correct: false
                },
                {
                    text: "Facebook",
                    correct: true
                },
            ]
        },
        {
            id: 2,
            question: "What is React.JS?",
            answers: [
                {
                    text: "Server-side Framework",
                    correct: false
                },
                {
                    text: "User-interface framework",
                    correct: false
                },
                {
                    text: "A Library for building interaction interfaces",
                    correct: true
                },
                {
                    text: "None of the above",
                    correct: false
                },
            ]
        },
        {
            id: 3,
            question: "What is used in React.JS to increase performance?",
            answers: [
                {
                    text: "Virtual DOM",
                    correct: true
                },
                {
                    text: "Original DOM",
                    correct: false
                },
                {
                    text: "Both",
                    correct: false
                },
                {
                    text: "None of the above",
                    correct: false
                },
            ]
        },
        {
            id: 4,
            question: " React.JS in MVC is?",
            answers: [
                {
                    text: "Model",
                    correct: false
                },
                {
                    text: "Middleware",
                    correct: false
                },
                {
                    text: "Method",
                    correct: false
                },
                {
                    text: "Controller",
                    correct: true
                },
            ]
        },
        {
            id: 5,
            question: "Everything in React is ?",
            answers: [
                {
                    text: "Component",
                    correct: true
                },
                {
                    text: "Model",
                    correct: false
                },
                {
                    text: "Method",
                    correct: false
                },
                {
                    text: "Package",
                    correct: false
                },
            ]
        },
        {
            id: 6,
            question: "React component can return how many components ?",
            answers: [
                {
                    text: "one",
                    correct: false
                },
                {
                    text: "multiple",
                    correct: true
                },
                {
                    text: "two",
                    correct: false
                },
                {
                    text: "three",
                    correct: false
                },
            ]
        },
        {
            id: 7,
            question: "Name the function used to change the state of react component ?",
            answers: [
                {
                    text: "this.setState",
                    correct: true
                },
                {
                    text: "this.setChangeState",
                    correct: false
                },
                {
                    text: "this.State{}",
                    correct: false
                },
                {
                    text: "Both A and B",
                    correct: false
                },
            ]
        },
        {
            id: 8,
            question: "What are props into other components ?",
            answers: [
                {
                    text: "Injected",
                    correct: false
                },
                {
                    text: "Both A and D",
                    correct: false
                },
                {
                    text: "None of the above",
                    correct: false
                },
                {
                    text: "Method",
                    correct: true
                },
            ]
        },
        {
            id: 9,
            question: "What is state in React?",
            answers: [
                {
                    text: " A permanent storage",
                    correct: false
                },
                {
                    text: "Internal storage of the component",
                    correct: true
                },
                {
                    text: "Both A and B",
                    correct: false
                },
                {
                    text: " None of the above",
                    correct: false
                },
            ]
        },
        {
            id: 10,
            question: "What will happen if you render an input element with disabled = {false}?",
            answers: [
                {
                    text: " It will be rendered as disabled",
                    correct: false
                },
                {
                    text: " It will be rendered as enabled",
                    correct: true
                },
                {
                    text: "It will not be rendered at all",
                    correct: false
                },
                {
                    text: "Nothing will be happened",
                    correct: false
                },
            ]
        },
        {
            id: 11,
            question: "Default port where webpack-server will run ?",
            answers: [
                {
                    text: "8080",
                    correct: true
                },
                {
                    text: "3333",
                    correct: false
                },
                {
                    text: "3030",
                    correct: false
                },
                {
                    text: "6020",
                    correct: false
                },
            ]
        },
        {
            id: 12,
            question: "Which of the following below act as the input of a class-based component?",
            answers: [
                {
                    text: "props",
                    correct: true
                },
                {
                    text: " class",
                    correct: false
                },
                {
                    text: "factory",
                    correct: false
                },
                {
                    text: "render",
                    correct: false
                },
            ]
        },
        {
            id: 13,
            question: "What is the declarative way to render a dynamic list of components based on values in an array?",
            answers: [
                {
                    text: "Using the reduce array method",
                    correct: false
                },
                {
                    text: "Using the <Each /> component",
                    correct: false
                },
                {
                    text: "With a for/while loop",
                    correct: false
                },
                {
                    text: "Using the Array.map() method",
                    correct: true
                },
            ]
        },
        {
            id: 14,
            question: " React.JS in MVC is?",
            answers: [
                {
                    text: "Model",
                    correct: false
                },
                {
                    text: "Middleware",
                    correct: false
                },
                {
                    text: "Method",
                    correct: false
                },
                {
                    text: "Controller",
                    correct: true
                },
            ]
        },
        {
            id: 15,
            question: "At the highest level, React components have lifecycle events that fall into?",
            answers: [
                {
                    text: "Destruction",
                    correct: false
                },
                {
                    text: "State/Property Updates",
                    correct: false
                },
                {
                    text: "Initialization",
                    correct: false
                },
                {
                    text: "All of the above",
                    correct: true
                },
            ]
        },
    ];

    const moneyPyramid = useMemo(() =>
            [
                {id: 1, amount: "$ 100"},
                {id: 2, amount: "$ 200"},
                {id: 3, amount: "$ 300"},
                {id: 4, amount: "$ 500"},
                {id: 5, amount: "$ 1000"},
                {id: 6, amount: "$ 2000"},
                {id: 7, amount: "$ 4000"},
                {id: 8, amount: "$ 8000"},
                {id: 9, amount: "$ 16000"},
                {id: 10, amount: "$ 32000"},
                {id: 11, amount: "$ 64000"},
                {id: 12, amount: "$ 125000"},
                {id: 13, amount: "$ 250000"},
                {id: 14, amount: "$ 500000"},
                {id: 15, amount: "$ 1000000"},
            ].reverse(),
        []
    );

    useEffect(() => {
        questionNumber > 1 &&
        setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
    }, [moneyPyramid, questionNumber])

    return (
        <div className="app">
            {username ? (
                    <>
                        <div className="main">
                            {stop ? (
                                <h1 className="endText">You earned: {earned} </h1>
                            ) : (
                                <>
                                    <div className="top">
                                        <div className="timer">
                                            <Timer setStop={setStop} questionNumber={questionNumber}/>
                                        </div>
                                    </div>
                                    <div className="bottom">
                                        <Quiz data={data}
                                              setStop={setStop}
                                              setQuestionNumber={setQuestionNumber}
                                              questionNumber={questionNumber}
                                        />
                                    </div>
                                </>
                            )}
                        </div>
                        <div className="pyramid">
                            <ul className="moneyList">
                                {moneyPyramid.map(i => (
                                    <li className={questionNumber === i.id ? "moneyListItem active" : "moneyListItem"}
                                        key={i.id}>
                                        <span className="moneyListItemNumber">{i.id}</span>
                                        <span className="moneyListItemAmount">{i.amount}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </>
                ) :
                <Start setUsername={setUsername}/>
            }

        </div>
    );
}

export default App;
