import React, {Component} from 'react'
import CategoriesIcons from '../UI/CategoriesIcons'
import { Link } from 'react-router-dom'
import axios from 'axios'
import PubSub from 'pubsub-js'
import Title from '../UI/Title/Title'
import './Style.css'

export default class Start extends Component{
    constructor(){
      super()
      this.state = {
          title:'',
          categories:[],
      }
    }
    componentDidMount() {
        document.title = this.state.title
        axios.get('/mock/content.json')
            .then(resp => {
                PubSub.publish('loading', false)
                let categoriesManager = resp.data.categories
                this.setState({
                    categories: categoriesManager
                })
            })
    }

    render(){
        return(
            <>
             <Title text={this.state.title} first='first' />
                <div className="container"> 
                   <h2 className="sub-title">Falcon Heavy</h2>
                   <div className="container-grid" >
                        {this.state.categories.map(cat => {
                        const noSpaceTitle = cat.title
                        return(
                            <Link to={`/help-center/sub-category/${noSpaceTitle}/${cat.id}`} key={cat.id} className="item a">
                                <CategoriesIcons type={cat.icon}/>
                                <div className="item-description"> {cat.title} </div>
                            </Link>
                        )
                        })}
                    </div>
                </div>
            </>
        )
    }

}