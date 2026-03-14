import { useDispatch } from 'react-redux'
import {createAnecdote} from '../reducers/anecdoteReducer'
import { notificationChange } from '../reducers/notificationReducer'

const AnecdoteForm = () =>{
    const dispatch = useDispatch()
    const addNote = (event) =>{
      event.preventDefault()
      const content = event.target.note.value
      event.target.note.value = ''
      dispatch(createAnecdote(content))
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

