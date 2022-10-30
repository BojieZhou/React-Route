import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Django extends Component {
  state = {
    djangos: [
      { id: 1, title: "thrift" },
      { id: 2, title: "python" },
      { id: 3, title: "nginx" },
      { id: 4, title: "docker" },
      { id: 5, title: "Rest Framework" },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <h1>Django</h1>
        <hr />
        <div>
          {this.state.djangos.map((django) => (
            <div key={django.id}>
              <Link to={`/django/content?chapter=${django.id}`}>
                {django.id + "." + django.title}
              </Link>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
 
export default Django;