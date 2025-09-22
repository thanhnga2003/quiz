import { useState } from 'react';
import './App.css';

function App() {
  const [ currentQuestion, setCurrentQuestion] = useState(0)

  const [next, setNext ] = useState(false);

  const [ answers, setAnswers] = useState([]);

  const[ score, setScore ] = useState(0);

  const[ feedback, setFeedback ] = useState(null);


const[showScore, setshowScore] = useState(false);

  const handleAnswer = (answer) =>{

    const newAnswer = {

      quistion: quizData[currentQuestion].question,

      answer:answer,

      correct: answer === quizData[currentQuestion].correct,
    };

    if (newAnswer.correct){

      setScore((prevScore) => prevScore + 1);
      setFeedback('〇');

    } else {
      setFeedback('×');

    }
    setAnswers([...answers, newAnswer]);
    console.log(answers);

    setNext(true);
  }

  const goToNextQuestion = () =>{
    const NextQuestion = currentQuestion + 1

    if (NextQuestion  <quizData.length){
      setCurrentQuestion(NextQuestion);
    }else{

      setshowScore(true);
    }
    setNext(false)
  }
  return (
    <div className='quiz-container'>
      {showScore ? (
        <div className='score-section'>
          <h1>スコア</h1>
        <h2>{score}/{quizData.length}</h2>
         <table className='answer-table'>
          <thead>
            <tr>
              <td>質問</td> <td>あなたの解答</td> <td>合否</td>
            </tr>
          </thead>
          <tbody>
            {answers.map((item)=>(
              <tr className={item.correct ? 'correct' : 'wrong'}>
                <td>{item.question}</td>
                <td>{item.answer}</td>
                <td>{item.correct ? '〇' : '×'}</td>
              </tr>
            ))}
          </tbody>

        </table>
        </div>
      ) : (
              <div className='question-section'>
        <h1>問題{currentQuestion + 1}/{quizData.length}</h1>
        <h2>{quizData[currentQuestion].question}</h2>
      
        {next ? (
          <div className='feedback-section'>
          <h2 className='large-feedback'>{feedback}</h2>
          <p>正解は</p>
          <p>{quizData[currentQuestion].correct}</p>
          <button onClick={goToNextQuestion}>次の問題へ</button>
          </div>
        ) : (
           <div className='answer-section'>
          {quizData[currentQuestion].options.map((item, index)=>(
            <button key={index} onClick={() => handleAnswer(item)} className={`quiz-option-button option-${index}`}>{item}</button>
          ))}
        </div>
          ) }


       
      </div>

      ) }



      
    </div>
  );
}

export default App;

const quizData = [
  {
    question: "太陽系で最も大きい惑星はどれですか？",
    options: ["地球", "火星", "金星", "木星"],
    correct: "木星",
  },
  {
    question: "次のうち、哺乳類ではない動物はどれですか？",
    options: ["カンガルー", "ゴリラ", "ペンギン", "カバ"],
    correct: "ペンギン",
  },
  {
    question: "モナ・リザを描いた画家は誰ですか？",
    options: ["レオナルド・ダ・ヴィンチ", "ミケランジェロ", "フィンセント・ヴァン・ゴッホ", "クロード・モネ"],
    correct: "レオナルド・ダ・ヴィンチ",
  },
  {
    question: "以下の食材の中で、一般的にはうだものとして認識されていないものはどれですか？",
    options: ["トマト", "りんご", "ぶどう", "ブロッコリー", "バナナ"],
    correct: "ブロッコリー",
  },
];


