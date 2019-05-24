import React, { Component } from 'react';

class Form extends Component {
    constructor (props) {
        super(props);
        this.state = {
            title:'',
            globalTitle:'This is a Title',
        };
    }

    componentDidMount() {
        console.log('Rendered Form');
    }
  
    componentDidUpdate() {
        console.log('Title changed');
        }
 

    handleSubmit = (e) => {
        e.preventDefault();
        const { title } = this.state;
        this.setState({ 
            globalTitle: `My form - ${title}`,
            title: '',
        });
    }

    handleChange = (e) => {
        this.setState({ title: e.target.value });
    }

    render() {
        const { title, globalTitle } = this.state;
  return (
    <div>
        <h1>{globalTitle}</h1>

      <form onSubmit={this.handleSubmit}>
        <label>
            <input type="text" name="" value={title} onChange={this.handleChange} />
        </label>
            <input type="submit" value="Submit" name="" />
        </form>
    </div>
  );
  }
  }
  
  export default Form;
  