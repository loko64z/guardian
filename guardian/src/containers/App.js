import React, { Component } from 'react';
import '../../public/css/App.css';
import Sidebar from 'react-sidebar';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import events from '../utils/events';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: false
        };
        BigCalendar.momentLocalizer(moment); // or globalizeLocalizer
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
        this.openSidebar = this.openSidebar.bind(this);
        console.log(events);
    }

    onSetSidebarOpen(open) {
        this.setState({sidebarOpen: open});
    }

    openSidebar(){
        console.log("HOLAAAAA");
        var status = !this.state.sidebarOpen;
        this.onSetSidebarOpen(status);
    }

    render() {
        var sidebarContent = <div>Guardian Menú<ul><li>Incio</li><li>Opciones</li></ul></div>;
    return (
      <div className="App">
          <Sidebar sidebar={sidebarContent}
                   open={this.state.sidebarOpen}
                   onSetOpen={this.onSetSidebarOpen}>
              <h1>Guardian</h1>   <button onClick={this.openSidebar}>Menú</button>
              <div className="main_div">
                  <BigCalendar
                      selectable
                      events={events}
                      startAccessor='start'
                      endAccessor='end'
                      culture='es'
                      onSelectEvent={event => alert(event.title)}
                      onSelectSlot={(slotInfo) => alert(
                          `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
                          `\nend: ${slotInfo.end.toLocaleString()}`
                      )}
                  />
              </div>

          </Sidebar>

      </div>
    );
  }
}

export default App;
