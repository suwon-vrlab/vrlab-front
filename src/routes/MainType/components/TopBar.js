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
      <AppBar color={'primary'} position='static'>
        <Toolbar>
          <Typography variant='h6'>
          <Button onClick={goToHome} color='inherit'>
                  VR Lab
              </Button>
          </Typography>

          <ListItem component='div'>
            <ListItemText inset>
              <Typography color='inherit' variant='title'>
                <Button onClick={goToIntroduction} color='inherit'>
                  Introduction
                </Button>
              </Typography>
            </ListItemText>

            <ListItemText inset>
              <Typography color='inherit' variant='title'>
                <Button onClick={goToAdvisor} color='inherit'>
                  Advisor
                </Button>
              </Typography>
            </ListItemText>

            <ListItemText inset>
              <Typography color='inherit' variant='title'>
                <Button onClick={goToContact} color='inherit'>
                  Contact
                </Button>
              </Typography>
            </ListItemText>
            {caseTopBar()}
          </ListItem>
        </Toolbar>
      </AppBar>
    </Router>
  )
}

export default TopBar