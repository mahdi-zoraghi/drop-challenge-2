import { Link } from "react-router-dom"
import { List, ListItem, ListItemText, ListItemIcon } from "@material-ui/core"

import GroupIcon from "@material-ui/icons/Group"
import DescriptionIcon from "@material-ui/icons/Description"

import { Wrapper, useStyles } from "./Sidebar.styles"

const Sidebar = () => {
  const classes = useStyles()
  return (
    <Wrapper>
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem>
          <ListItemText primary="User" />
          <ListItemIcon>
            <GroupIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem
          component={Link}
          to="/users"
          button
          className={classes.nested}
        >
          <ListItemText primary="List" />
        </ListItem>
        <ListItem
          component={Link}
          to="/create-user"
          button
          className={classes.nested}
        >
          <ListItemText primary="Create New User" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Resource" />
          <ListItemIcon>
            <DescriptionIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem
          component={Link}
          to="/resources"
          button
          className={classes.nested}
        >
          <ListItemText primary="List" />
        </ListItem>
      </List>
    </Wrapper>
  )
}

export default Sidebar
