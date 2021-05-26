import { useSelector } from "react-redux"
import styled from "styled-components"
import { LinearProgress } from "@material-ui/core"

import { Sidebar } from "../components"

export const Wrapper = styled.div`
  display: flex;
`

export const ProgressWrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
`

const DashboardLayout = ({ children }) => {
  const loading = useSelector(state => state.main.loading)

  return (
    <>
      {loading && (
        <ProgressWrapper>
          <LinearProgress />
        </ProgressWrapper>
      )}
      <Wrapper>
        <Sidebar />
        {children}
      </Wrapper>
    </>
  )
}

export default DashboardLayout
