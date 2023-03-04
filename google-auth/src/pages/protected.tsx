import { signIn, useSession } from "next-auth/react"
import { useEffect, useState } from "react"

export default function ProtectedPage() {
  const { data: session } = useSession()
  const [content, setContent] = useState()

  // Fetch content from protected route
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/examples/protected")
      const json = await res.json()
      if (json.content) {
        setContent(json.content)
      }
    }
    fetchData()
  }, [session])
 

  // If no session exists, display access denied message
  if (!session) {
    return (
      <h1>Access denied <button type="button" onClick={(e)=>signIn()}>Sign In</button></h1>
    )
  }

  // If session exists, display content
  return (
    <>
      <h1>Protected Page</h1>
      <p>
        <strong>{content ?? "\u00a0"}</strong>
      </p>
      
    </>
  )
}