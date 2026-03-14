import { useDispatch } from 'react-redux'
import {createAnecdote} from '../reducers/anecdoteReducer'
import { notificationChange } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = () =>{
    const dispatch = useDispatch()
    const addNote = async (event) =>{
      event.preventDefault()
      const content = event.target.note.value
      event.target.note.value = ''
      const newAnecdote = await anecdoteService.createNew(content)
      dispatch(createAnecdote(newAnecdote))
      dispatch(notificationChange(`You added '${content}'`))
    }
    return (
    <div>
    <form onSubmit={addNote}>
        <input name="note" /> 
        <button type="submit">add</button>
      </form>
    </div>
)
}

export default AnecdoteForm

