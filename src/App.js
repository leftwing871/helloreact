import React, { Component, Fragment } from 'react';

class App extends Component {
  render() {

    const name ='react';
    const value = 3;

    return (
      <div>
        {
          1 + 11 === 2
          ? 'exact' : 'wrong'
        }

        {
          name === 'react' && <div>react다!!</div>
        }

        {
          (() => {
            if(value === 1) return <div>is 1</div>
            if (value === 2) return <div>is 2</div>
            if (value === 3) return <div>is 3</div>
            return <div>없다</div>
          })()
        }

      </div>
    );
  }
}

export default App;
