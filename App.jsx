import  React from 'react';
import SideBar from './Sidebar.jsx';
import Counter from './Counter.jsx';

class App extends React.Component {
  render(){
    return (
      <div>



        {/*
        <SideBar/>
        <SideBar/>*/
        }



      {
      <div className="ui two column grid container">
        <div className="ui column">
          <div className="ui segment">
            <div className="ui button">test</div>

            <SideBar/>
          </div>
        </div>
        <div className="ui column">
          <div className="ui segment">
            <div className="ui button">test</div>

            <SideBar/>

          </div>
        </div>
      </div>
      }



      </div>
      )

  }
}



export default App
