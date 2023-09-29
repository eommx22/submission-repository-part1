import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 })
  const [max, setMax]= useState(0)

  

  function Generate(){
    const randomNum= Math.floor(Math.random()* anecdotes.length)
    setSelected(randomNum)
  
  }

  function Vote(){
    const copy = {...votes}
    copy[selected] += 1
   
    setVotes(copy)
    setMax(findIndexOfMax(copy))
   
  }

  function findIndexOfMax(arr1){
   let maxIndex=0;
   let arr =  Object.entries(arr1)
  for (let i=0; i<arr.length; i++){
    maxIndex = arr[i][1] > arr[maxIndex][1] ? i : maxIndex
  }
  
   return maxIndex
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected] } </p>
      <h6> has {votes[selected]} votes</h6>
      <div>
         <button onClick={()=>Vote()}>vote</button>
         <button onClick={()=>Generate()}>new anecdote</button>
      </div>
      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[max] } </p>
      <h6> has {votes[max]} votes</h6>
    
    </div>
  )
}

export default App