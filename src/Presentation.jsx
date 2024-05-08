import './Presentation.css'
import {useEffect, useState} from 'react'

function Presentation(){

    const[text,setText]=useState(''); 
    const rotate = ['Rafael Manganiello','Desenvolvedor Front-End']; 
    const [loop, setLoop]=useState(0); 
    const [toDelete,setToDelete]= useState(false);
    const period = 100; 
    const [delta,setDelta]=useState(100) 


    useEffect(()=>{
        let ticker = setInterval (()=>{
            toType()
        }, delta)
        return()=> {clearInterval(ticker)}
    },[text])

    const toType = () =>{

        let i = loop % rotate.length;
        let fullText = rotate[i]
        let updatedText = toDelete ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1)

        setText(updatedText);

        if(!toDelete && updatedText === fullText){
        setToDelete(true);
        setDelta(period);
        }else if (toDelete && updatedText === ''){
        setToDelete(false);
        setDelta(period);
        setLoop(loop+1);
        }
    }

    return(
        <div className="present">
            <h1>Olá, eu sou {text}</h1><br/>
            <p>Desenvolvedor Full-stack pela Escola DNC.<br/> 
            HTML5, CSS3, JavaScript, TypeScript, React.js, Vite, Node.Js 
            </p>
            <a target='_blanc' href='https://static.quizur.com/i/b/57eda13e1e40f5.7564302057eda13e0f3664.86326842.jpg?o=capa'><button>Download resumo</button></a>
        </div>
    )
}

export default Presentation