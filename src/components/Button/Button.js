import { Link } from 'react-router-dom'
import './Button.css'

export const ButtonPrimary = (props) => {
  return (
   <Link to={props.URL} className="btn btn-primary py-md-3 px-md-5 me-3">{props.title}</Link>
  )
}
export const ButtonSecondary = (props) => {
   return (
    <Link to={props.URL} className="btn btn-secondary py-3 px-5">{props.title}</Link>
   )
 }
 
