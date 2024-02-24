import { useState } from 'react'
const Button = ({ text, onclick }) =>
  <button onClick={onclick}>{text}</button>

  const Display = ({ text }) => <h1>{text}</h1>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  const [selected, setSelected] = useState(Math.floor(Math.random() * anecdotes.length))
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const [largest, setLargest] = useState(0) 
  console.log(votes, largest)
  const handleNext = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }
  const handleVote = () => {
    const update = [...votes]
    update[selected] += 1
    findLargest(update)
    setVotes(update)
    
    
  }
  const findLargest = (update) => {
    for (let i = 0; i < votes.length; i++){
      console.log('checking', i)
      
      if (update[i] > update[largest]){
        setLargest(i);
      }
    }
    
  }
  
  return (
    <div>
      
      
      <Display text={'anecdote of the day'} />
      <p>{anecdotes[selected]}</p>
      <Button onclick={handleNext} text={'next anecdote'} />
      <Button onclick={handleVote} text={'vote for this'} />

      <Display text={'anecdote with the largest amount of votes'} />
      <p>{anecdotes[largest] + 'has ' + votes[largest] + ' votes' }</p>
    </div>
  )
}

export default App