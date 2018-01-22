import React, { Component } from 'react';
import Reboot from 'material-ui/Reboot';
import 'typeface-roboto'

import ButtonAppBar from './Component/ButtonAppBar'

class App extends Component {
  render() {
    return (
      <div>
        <Reboot />
        <ButtonAppBar />
      </div>
    );
  }
}

export default App;
