import { useState } from 'react'


const StatisticLine = (props) =>
{
    return (
      <tr><td>{props.text}</td><td>{props.value}</td></tr>   
    )
}

const Statistics = (props) => {

  const all = props.good + props.neutral + props.bad
  const average = ((props.good - props.bad)/(props.good + props.neutral + props.bad)).toFixed(2)
  const positive = (props.good/(props.good + props.neutral + props.bad)*100).toFixed(2)+'%'


  return(
    <div>
      <table>
        <tbody>
           <StatisticLine text="good" value={props.good} />
           <StatisticLine text="neutral" value={props.neutral} />
           <StatisticLine text="bad" value={props.bad} />
           <StatisticLine text="all" value={all} />
           <StatisticLine text="average" value={average} />
           <StatisticLine text="positive" value={positive} />
        </tbody>
       </table>
    </div>    
  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  

  return (
    <>
      <h2> Give  feedback</h2>
      <div>
          <button onClick={() => setGood(good+1)}>Good</button>
          <button onClick={() => setNeutral(neutral+1)}>Neutral</button>
          <button onClick={() => setBad(bad+1)}>Bad</button>
      </div>
      <h2>Statistics</h2>
      {good>0||neutral>0||bad>0 ? <Statistics good={good}
                  neutral={neutral}
                  bad={bad}   /> : <p>No feedback given</p>}
      
    </>
  )
}

export default App