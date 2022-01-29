import Card from '../Card/Card.component'
import './Card-List.styles.css'

/*const CardList = props  => {
    const{users} = props
    users.map(element => {
        return (
            <div className='card-list'>
                <Card user = {element} />
            </div>
    )
    })
    
}

export default CardList*/

const CardList = (props)  => {
    
    const {monsters} = props
   return(
       <div className='card-list'>
            {
                monsters.map(
                    (monster,index) => (
                        <Card key={index} monster={monster} />
                    )
                )
            }
       </div>
   )
}

export default CardList