import './Card.css'

const Card = (props) => {
  return (
    <div className='col-sm-6'>
      <div className='text-primary mb-3'>{props.icon}</div>
      <h5 className='mb-3'>{props.title}</h5>
      <p className='mb-5'>{props.text}</p>
    </div>
  )
}

export default Card