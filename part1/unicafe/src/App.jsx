import { useState } from 'react'

const Display = ({ text }) => <h1>{text}</h1>

const Button = ({ text, onclick }) =>
  <button onClick={onclick}>{text}</button>

const Statistics = ({good, bad, neutral, total}) => {
    if (total === 0){
      return (
        <Display text={'No feedback yet'} />
      )
    }
    const average = (good + bad*-1)/total;
    const percent = good/total
      return (
        <div>
        <Display text={`good = ${good}`}/>
        <Display text={`bad = ${bad}`}/>
        <Display text={`neutral = ${neutral}`}/>
        <Display text={`average = ${average}`}/>
        <Display text={`percent = ${percent}`} />
        </div>
      )
    
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const handleGood = () => {
    setGood(good + 1)
    setTotal(total + 1)
    console.log('good')
  }
  const handleBad = () => {
    setBad(bad + 1)
    setTotal(total + 1)
    console.log('bad')
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
    console.log('neutral')
  }
  return (
    <>
      <Display text='give feedback' />
      <Button onclick={handleGood} text={'good'}/>
      <Button onclick={handleBad} text={'bad'}/>
      <Button onclick={handleNeutral} text={'neutral'}/>
      <Statistics good={good} bad={bad} neutral={neutral} total={total} />
    </>
  )
}

export default App