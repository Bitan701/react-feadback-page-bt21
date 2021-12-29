import { FaTimes, FaEdit } from 'react-icons/fa'
import Card from './shared/Card'
import { useContext } from 'react'
import FeedbackContext from './context/FeedbackContext'

function FeedbackItem({ item, editItem }) {
  const { deleteItemFun, editFeedback } = useContext(FeedbackContext)

  return (
    <Card reverse={false}>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteItemFun(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <button onClick={() => editFeedback(item)} className="edit">
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  )
}

export default FeedbackItem
