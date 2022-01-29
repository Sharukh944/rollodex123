import React from 'react'
import CardList from '../../components/Card-List/Card-List.component';
import Search from '../../components/Search/Search.component';
import './Home.styles.css'

/*
class Home extends React.Component{
    constructor(){
        super();
        this.state = {
            monsters: []
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ monsters: users }));
    }
   
    render(){
        const {monsters} = this.state
        return(
            <>
            <div className='App'>
                <h1>Monsters Rolodex</h1>
                <Search  />
                <CardList users={monsters} />
            </div>
            </>
        )
    }
}

export default Home*/

class Home extends React.Component{
    constructor(){
        super();
        this.state = {
            monsters: [],
            searchField: ''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ monsters: users }));
    }
  
        handleSearch = (event)=>{
        this.setState({searchField: event.target.value})
    }
   
    render(){
      
        const {monsters,searchField } = this.state   //object destructuring
        const filteredMonsters = monsters.filter((monster) => monster.name.toLowerCase().includes(searchField.toLowerCase()))
        return(
            <>
            <div className='App'>
                <h1>Monster's Rolodex</h1> 
              <Search handleSearch={this.handleSearch} />
                <CardList monsters={filteredMonsters} />
            </div>
            </>
        )
    }
  }
  
  export default Home