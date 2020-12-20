import React, { Component } from 'react'
import './Spinner.scss'

export default class Spinner extends Component {
  constructor (props) {
    super (props)
    this.state = {
      choice: 0
    }

    this.clickable = true

    this.choices = [
      {
        color: 'purple',
      },
      {
        color: 'light-purple',
      },
      {
        color: 'pink',
      },
      {
        color: 'blue',
      },
      {
        title: 'choose',
        text: '(all or nothing)'
      },
      {
        title: 'choose',
        text: '(all or nothing)'
      },
      {
        title: 'choose'
      },
      {
        title: 'choose'
      },
      {
        title: 'give',
        text: 'one of your VIP cards to any player and spin again'
      },
      {
        title: 'steal',
        text: 'one VIP card from any player and spin again'
      }
    ]
  }

  handleClick = () => {
    if (this.clickable) this.animateClick()
  }

  setChoice = () => {
    this.setState({
      choice: this.choices[Math.floor(Math.random() * this.choices.length)]
    })
  }

  animateClick = () => {
    this.clickable = false
    let i = 0
    let intTime = 100
    const int = setInterval (() => {
      this.setChoice ()
      if (i > 5) intTime = 250
      if (i > 8) intTime = 500
      if (i >= 10) {
        clearInterval (int)
        this.setChoice ()
        this.clickable = true
      }
      i++
    }, intTime)
  }

  componentDidMount () {
    this.setChoice ()
  }

  render () {
    const {
      color,
      title,
      text
    } = this.state.choice

    let classname = 'LQS_Choice'
    if (color) classname += ` ${color}`
    if (title) classname += ` ${title}`
    if (text === '(all or nothing)') classname += ' aon'

    return (
      <>
        <div className="LQS_Wrap" onClick={this.handleClick}>
          <div className={classname}>
            {title && (
              <h1 className="LQS_ChoiceTitle">
                {title}
              </h1>
            )}

            {text && (
              <p className="LQS_ChoiceText">
                {text}
              </p>
            )}
          </div>

        </div>
      </>
    )
  }
}
