import React, { Component } from 'react'

class App extends Component {
      constructor(props) {
      super(props);
      this.state = {list: ["Angel's item 1", "Angel's item 2"]}
      this.handleSubmit = this.handleSubmit.bind(this);
  }
      handleSubmit(event) {
      event.preventDefault();
      var form = document.getElementById("form")
      var newList = this.state.list.concat([form.value])
      this.setState({list: newList})
      form.value = ""
    }
  render () {
    return <div>
      <h1>One List</h1>
      <List list={this.state.list}/>
      <form onSubmit={this.handleSubmit}>
        <input type="text" id="form"/>
        <input type="submit" value="Submit" />
      </form>
    </div>
  }
}

class List extends Component {
  render () {
        var handleClick = (i) => {
        var item = document.getElementById(i)
        if(!item.hasAttribute("style")){
          item.style.textDecoration = "line-through"
          console.log("if hit")
        }
        else if(item.style = "textDecoration: line-through"){
          item.removeAttribute("style")
        }
      }
        var items = this.props.list.map((item, i) => {
        var listItem = <span key={i} onClick={() => handleClick(i)}>
          <ListItem onClick={() => this.handleClick(i)} name={item} id={i} />
          </span>
        return listItem
      })
    return <ul id="myList">
      {items}
      </ul>
  }
}

class ListItem extends Component {
  render() {
    return <li id={this.props.id}>{this.props.name}</li>
  }
}

export default App
