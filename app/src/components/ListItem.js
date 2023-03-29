
export default function ListItem (props) {
  return (
    <li className='user-item' id={props.id}>{props.name}</li>
  )
}