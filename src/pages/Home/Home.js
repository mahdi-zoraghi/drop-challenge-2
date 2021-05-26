import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import { Button } from "../../components"

import { Wrapper, CardsWrapper, Card } from "./Home.styles"

import { fetchUsers, fetchResources } from "../../store/actions"

import { logOut } from "../../store/reducer/authSlice/authSlice"

const Home = ({ history }) => {
  const usersTotal = useSelector(state => state.users.total)
  const resourcesTotal = useSelector(state => state.resources.total)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers(1))
    dispatch(fetchResources(1))
  }, [dispatch])

  const handleLogOut = () => {
    dispatch(logOut())
    history.push("/login")
  }

  return (
    <Wrapper>
      <h1>You Are Logged in</h1>
      <CardsWrapper>
        <Card back="rgba(0,0,255,.7)">
          <h3>Total user: </h3>
          <h2> {usersTotal}</h2>
        </Card>
        <Card back="rgba(255,0,255,.7)">
          <h3>Total resources: </h3>
          <h2> {resourcesTotal}</h2>
        </Card>
      </CardsWrapper>
      <br />
      <br />
      <Button color="secondary" variant="contained" onClick={handleLogOut}>
        Log Out
      </Button>
    </Wrapper>
  )
}

export default Home
