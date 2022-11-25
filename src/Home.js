import {useRef, useState} from 'react';

const Home = ({history}) => {

const [isHovering, setIsHovering] = useState('')


    return (
    <div>
    <div className="wrapper">
    <div className="left-box">
    <div className="levelInfo" id="intermediate-info"
      style={{
        display: isHovering==='intermediate' ? 'block' : 'none',
    }}>
      <div className="level-info-text">
        <h3>Intermediate:</h3>
        <ul>
          <li>Vocabulary of 500-1,250 words</li>
          <br></br>
          <li>
            Understanding of past and present conjugations for regular and
            irregular verbs
          </li>
          <br></br>
          <li>
            Knowledge of feminine/masculine noun/adjective agreement, ser vs.
            estar, and past perfect vs. past imperfect.
          </li>
        </ul>
      </div>
    </div>
    </div>
    <div className="center-box">
      <h1>What's your level?</h1>
      <button className="menu-item" id="beginner-button" onMouseEnter={()=> {setIsHovering('beginner')}} onMouseLeave={()=>{setIsHovering('')}} onClick={()=> history.push(`/Beginner`)}>Beginner
      <div className="line" id="beginnerLine"
       style={{
        display: isHovering==='beginner' ? 'block' : 'none',
    }}></div>
      </button>
      <button className="menu-item" id="intermediate-button" onMouseEnter={()=> {setIsHovering('intermediate')}} onMouseLeave={()=>{setIsHovering('')}} onClick={()=> history.push(`/Intermediate`)}>Intermediate
            <div className="line" id="intermediateLine"
             style={{
                display: isHovering==='intermediate' ? 'block' : 'none',
            }}></div>
        </button>
        <button className="menu-item" id="advanced-button" onMouseEnter={()=> {setIsHovering('advanced')}} onMouseLeave={()=>{setIsHovering('')}} onClick={()=> history.push(`/Advanced`)}>Advanced
            <div className="line" id="advancedLine"
             style={{
                display: isHovering==='advanced' ? 'block' : 'none',
            }}></div>
        </button>
        <button className="menu-item" id="find-out-button">Find Out</button>
      </div>
    <div className="right-box">
    <div className="levelInfo" id="beginner-info"
    style={{
        display: isHovering==='beginner' ? 'block' : 'none',
    }}
    >
        <div className="level-info-text">
        <h3>Beginner:</h3>
        <ul>
          <li>Vocabulary of &lt; 500 words</li>
          <br></br>
          <li>Limited understanding of grammatical concepts</li>
        </ul>
        </div>
      </div>
    <div className="levelInfo" id="advanced-info"
      style={{
        display: isHovering==='advanced' ? 'block' : 'none',
    }}>
      <div className="level-info-text">
        <h3>Advanced:</h3>
        <ul>
          <li>Vocabulary of 1,250-2,000 words</li>
          <br></br>
          <li>
            Understanding of past, present, subjunctive and conditional
            conjugations for regular and irregular verbs.
          </li>
          <br></br>
          <li>Knowledge of frequently used expressions and idioms.</li>
        </ul>
      </div>
    </div>
    </div>
    </div>
    </div>
    
)
    }

export default Home;