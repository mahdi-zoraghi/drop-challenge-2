import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import styled from "styled-components"

import { fetchResource } from "../../store/actions"

const Wrapper = styled.div`
  margin-left: 30px;
`

const Resource = ({ match }) => {
  const resourceId = match.params.id
  const dispatch = useDispatch()
  const resource = useSelector(state => state.resource)
  useEffect(() => {
    dispatch(fetchResource(resourceId))
  }, [dispatch, resourceId])

  return (
    <Wrapper>
      <h1>Resource page</h1>
      <h2>{resource?.data?.name}</h2>
      <br />
      <h3>Support</h3>
      <p>{resource?.support?.text}</p>
      <span>{resource?.support?.url}</span>
    </Wrapper>
  )
}

export default Resource
