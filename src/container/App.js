import React, {Component} from "react";
import CardList from '../components/CardList';
import {robots} from '../robots'
import SearchBox from "../components/searchbox";
import Scroll from '../components/scroll'

class App extends Component {
    constructor() {
        super()
        this.state={
            robots: robots,
            searchfield: ''
    }
}
componentDidMount() {
    fetch ('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        return response.json();
    })
    .then(users=> { 
        this.setState({ robots: users}
            )}
            )
}

onsearchchange = (event) => {
    this.setState({searchfield:event.target.value})
   
    }

   render() {
    
    const filteredrobots =
     this.state.robots.filter( robots =>
        {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        });
        
        return !robots.length? //this is a tenary operation
        <h1>loading </h1>:
        (
            <div className="tc">
                <h1>Robofriends</h1>
                <SearchBox searchChange={this.onsearchchange}/>
                <Scroll>
                <CardList robots={filteredrobots}/>
                </Scroll>           
            </div>
        )
        }
        }
export default App