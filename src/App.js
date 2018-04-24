// @flow
import * as React from 'react'
import styled from 'styled-components'

import {deck} from './data/deck'
import Title from './components/title'
import Card from './components/card'

type Props = {
  className: string
}

type State = {
  deck: typeof deck
}

class App extends React.Component<Props, State> {

  state = {
    deck
  }

  render() {
    return (
      <div className={this.props.className}>
        <Title>Hearthstone!</Title>
        {
          this.state.deck.map(card => (
            <Card card={card} />
          ))
        }
      </div>
    )
  }
}

export default styled(App)`
  display: flex;
  flex-wrap: wrap;
`
