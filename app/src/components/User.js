
export default function User(props) {
  return (
    <article className="user-block">
      <img className="user-avatar" src={props.avatar + `?img=${props.id}`}></img>
      <h5 className="user-text user-name">{props.name}</h5>
      <p className="user-text user-city">{props.details.city}</p>
      <p className="user-text user-company">{props.details.company}</p>
      <p className="user-text user-position">{props.details.position}</p>
    </article>
  )
}