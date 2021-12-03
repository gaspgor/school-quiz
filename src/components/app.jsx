import React, {useEffect, useState} from 'react';
import '../assets/app.scss'
import _ from "lodash";
import QUESTIONS from "../assets/questions";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl, FormControlLabel, Radio,
  RadioGroup
} from "@mui/material";
import CustomModal from "./modal";

const App = () => {
  // _.shuffle([1, 2, 3, 4]);
  // QUESTIONS
  const [questions, setQuestions] = useState(_.shuffle(Array.from(QUESTIONS)))
  const [answer, setAnswer] = useState("")

  useEffect(() => {
    console.log(questions)
  }, [questions])

  const answerFunc = () => {

  }

  return (
    <div className="main">
      {questions.map((elem, index) => {
        let currentQuestion = elem;
        currentQuestion.answers = _.shuffle(elem.answers);
        return (
          <CustomModal
            parentClass="question"
            buttonClass={`questionCard ${elem.type === "image"?`image ${elem.answered === true?"imageAnswered":""}`:elem.type === "audio"?`audio ${elem.answered === true?"audioAnswered":""}`:`other ${elem.answered === true?"otherAnswered":""}`}`}
            buttonName={index + 1}

            title={elem.question}
            content={(
              <DialogContent className="content">
                {
                  elem.type === "audio"
                    ? (
                      <audio controls onPlay={e => {
                        setTimeout(() => {
                          e.target.pause();
                        }, 30000)
                      }}>
                        <source src={elem.audio} type="audio/mpeg" />
                      </audio>
                    )
                    : elem.type === "image"
                      ? <img className="image" src={elem.image} />
                      : ""
                }
                <CustomModal parentClass="text" buttonClass="text" buttonName="Պատասխան" title="Պատասխան" buttonFunc={() => {setQuestions(questions.map(questElem => {if(questElem == elem){questElem.answered = true} return questElem}))}} content={(
                  <DialogContent>
                    <DialogContentText style={{fontSize: "30px"}}>{elem.answer}</DialogContentText>
                  </DialogContent>
                )}/>
              </DialogContent>
            )}
          />
        )
      }
    )}
    </div>
  )
}

export default App;

