import { auth } from "@/firebase"
import { onAuthStateChanged, User } from "firebase/auth"
import {
  createContext,
  ReactNode,
  use,
  useContext,
  useEffect,
  useState
} from "react"

type AuthContextType = { user: User | null; loading: boolean }
const AUthContext = createContext<AuthContextType>({
  user: null,
  loading: true
})

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (user) => {
      setUser(user ?? null)
      setLoading(false)
    })
    return unsubcribe
  }, [])

  return (
    <AUthContext.Provider value={{ user, loading }}>
      {children}
    </AUthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AUthContext)
}
