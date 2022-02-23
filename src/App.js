import React, { Component } from "react";
import "./App.css";
import contacts from "./contacts.json";

class App extends Component {
  state = {
    myContacts: contacts.slice(0, 5),
  };

  addRandomContact = () => {
    if (this.state.myContacts.length > 0) {
      this.setState({
        myContacts: [
          ...this.state.myContacts,
          contacts[this.state.myContacts.length],
        ],
      });
    }
  };

  sortByName = () => {
    this.setState({
      myContacts: this.state.myContacts.sort((a, b) => {
        return a.name.localeCompare(b.name);
      }),
    });
  };

  sortByPopularity = () => {
    this.setState({
      myContacts: this.state.myContacts.sort((a, b) => {
        return a.popularity - b.popularity;
      }),
    });
  };

  deleteContact = (index) => {
    this.state.myContacts.splice(index, 1);
    this.setState({
      myContacts: this.state.myContacts,
    });
  };

  render() {
    return (
      <div className="App">
        <h1 className="app-header">IronContacts</h1>

        <div>
          <button onClick={this.addRandomContact}>
            Add Random Contact
          </button>
          <button onClick={this.sortByName}>
            Sort by name
          </button>
          <button onClick={this.sortByPopularity}>
            Sort by popularity
          </button>
        </div>

        <table>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>

          {this.state.myContacts.map((currentActor, index) => {
            return (
               
               <tr key={index}>
                  <td>
                    <img
                      src={currentActor.pictureUrl}
                      alt="Actor"
                      height="200px"
                    />
                  </td>
                  <td>
                    <p>{currentActor.name}</p>
                  </td>
                  <td>
                    <p>{currentActor.popularity.toFixed(2)}</p>
                  </td>
                  <td>
                    <p>{currentActor.wonOscar ? "🏆" : ""}</p>
                  </td>
                  <td>
                    <p>{currentActor.wonEmmy ? "🏆" : ""}</p>
                  </td>
                
                  <button className="btn-delete" onClick={() => this.deleteContact(index)}> Delete</button>
                  </tr>
                
            );
          })}
        </table>
      </div>
    );
  }
}

export default App;
