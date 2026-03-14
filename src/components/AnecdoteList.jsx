import { useSelector, useDispatch } from 'react-redux'
import { voteForAnecdote } from '../reducers/anecdoteReducer'
import { notificationChange, notificationClear  } from '../reducers/notificationReducer'

const AnecdoteList = () =>{
    const anecdotes = useSelector(state => 
  [...state.anecdotes]
  .filter(a => a.content.toLowerCase().includes(state.filter.toLowerCase()))
  .sort((a, b) => b.votes - a.votes)
)
  const dispatch = useDispatch()

  const vote = (id,content) => {
    dispatch(voteForAnecdote(id))
    dispatch(notificationChange(`You voted for '${content}'`))
    setTimeout(() => {
      dispatch(notificationClear())
      }, 5000)
  }

    return (
      <div>
        {anecdotes.map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote.id,anecdote.content)}>vote</button>
            </div>
          </div>
        )}

      </div>
    )
}

export default AnecdoteList