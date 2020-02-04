/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from 'react'
import { BrowserRouter as Router, Link, Redirect } from 'react-router-dom'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/styles'
import {
  AppBar,
  Badge,
  Button,
  IconButton,
  Toolbar,
  Hidden,
  Input,
  colors,
  Popper,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ClickAwayListener
} from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import { Home, Book, AccountBox } from '@material-ui/icons'
import LockIcon from '@material-ui/icons/LockOutlined'
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined'
import InputIcon from '@material-ui/icons/Input'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import {Navbar, Nav, Form, FormControl} from "reactstrap";

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1
  }
}))

const TopBar = ({ history, loginMode }) => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const classes = useStyles()

  const goToHome = () => {
    history.push('/')
    handleClose()
  }

  const goToIntroduction = () => {
    history.push('/introduction')
    handleClose()
  }
  const goToAdvisor = () => {
    history.push('/advisor')
    handleClose()
  }
  const goToContact = () => {
    history.push('/contact')
    handleClose()
  }
  const goToBoard = () => {
    history.push('/board')
    handleClose()
  }
  const goToData = () => {
    history.push('/data')
    handleClose()
  }
  const goToAdmin = () => {
    history.push('/admin')
    handleClose()
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const caseTopBar = () => {
    switch (loginMode) {
      case 0:
        return (
          <>
          </>
            );
      case 1:
        return (
          <>
          <ListItemText inset>
              <Typography color='inherit' variant='title'>
                <Button onClick={goToBoard} color='inherit'>
                Board
                </Button>
              </Typography>
            </ListItemText>

            <ListItemText inset>
              <Typography color='inherit' variant='title'>
                <Button onClick={goToData} color='inherit'>
                  Data
                </Button>
              </Typography>
            </ListItemText>
            </>
        );
      case 2:
        return (
          <>
            <ListItemText inset>
              <Typography color='inherit' variant='title'>
                <Button onClick={goToBoard} color='inherit'>
                  Board
                </Button>
              </Typography>
            </ListItemText>
            <ListItemText inset>
              <Typography color='inherit' variant='title'>
                <Button onClick={goToData} color='inherit'>
                  Data
                </Button>
              </Typography>
            </ListItemText>
            <ListItemText inset>
              <Typography color='inherit' variant='title'>
                <Button onClick={goToAdmin} color='inherit'>
                  Admin
                </Button>
              </Typography>
            </ListItemText>
            </>
        );
    }
  }

  return (
    <Router>
      <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>
  </Navbar>
    </Router>
  )
}

export default TopBar