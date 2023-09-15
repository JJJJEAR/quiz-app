import { useContext, useEffect, useState } from "react";
import QuestionData from "../data/QuestionData";
import { DataContext } from "../App";

const Quiz = () => {
    //console.log(QuestionData);
    const [current, setCurrent] = useState(0)
    const [selectChoice,setSelectChoice] = useState("")
    const {score,setScore,setAppState} = useContext(DataContext)

    useEffect(()=>{
        checkAnswer()
    },[selectChoice])

    const checkAnswer=()=>{
        if(selectChoice!==""){
            if(selectChoice===QuestionData[current].answer){
                setScore(score+1)
                nextQuestion()
            }else{
                console.log("ตอบผิดไม่ได้คะแนน T_T")
                nextQuestion()
            }
        }
    }

    const nextQuestion=()=>{
        setSelectChoice("")
        if(current===QuestionData.length-1){
            setAppState("score")
        }else{
            setCurrent(current+1)
        }       
    }

    return(
        <div className="quiz">
            <h1>{QuestionData[current].question}</h1>
            <div className="choices">
                <button onClick={()=>setSelectChoice("A")}>{QuestionData[current].A}</button>
                <button onClick={()=>setSelectChoice("B")}>{QuestionData[current].B}</button>
                <button onClick={()=>setSelectChoice("C")}>{QuestionData[current].C}</button>
                <button onClick={()=>setSelectChoice("D")}>{QuestionData[current].D}</button>
            </div>
            <p>{`${current+1} / ${QuestionData.length}`}</p>
        </div>
    )
}

export default Quiz;