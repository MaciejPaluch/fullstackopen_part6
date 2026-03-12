import { useDispatch } from 'react-redux'
import {createAnecdote} from '../reducers/anecdoteReducer'

const AnecdoteForm = () =>{
    const dispatch = useDispatch()
    const addNote = (event) =>{
    event.preventDefault()
    const content = event.target.note.value
    event.target.note.value = ''
    dispatch(createAnecdote(content)) 
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

