import { useState, useEffect } from "react"
import User from "./User"

export default function Details (props) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    if (!props.info.id) {
      return
    }

    if (user) {
      setUser(null)
    }

    props.loading(true);

    async function fetchUser() {
      const propsId = props.info.id
  
      try {
        const result = await fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${propsId}.json`)

        if (!result.ok) {
          throw new Error(result.statusText)
        }
    
        const user = await result.json()
        props.loading(false);
        setUser(user)
      } catch (e) {
        console.error(e)
      }
    }

    setTimeout(fetchUser, 300);
  }, [props.info.id])

 if (!user) {
  return null
 }

  return (
    <User {...user} />
  )
}