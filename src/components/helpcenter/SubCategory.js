import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import Title from '../UI/Title/Title'
import { Link } from 'react-router-dom'
import CategoriesIcons from '../../components/UI/CategoriesIcons'
import axios from 'axios'
import { ParamSpaceToText } from '../../service/ParamSpaceToText'
import './Style.css'

export default class SubCategory extends Component {
    constructor() {
        super()
        this.state = {
            title: 'Central de Ajuda',
            categories: [],
            subCategory: []
        }
    }

    componentDidMount() {
        document.title = ParamSpaceToText(this.props.categoryName, '-')
        axios.get('/mock/content.json')
            .then(resp => {
                PubSub.publish('loading', false)
                let categoriesManager = resp.data.categories
                this.setState({
                    categories:categoriesManager
                })

                for (let n in this.state.categories) {
                    if (this.props.categoryId === this.state.categories[n].id) {
                        this.setState({
                            subCategory: this.state.categories[n].sub
                        })
                    }
                }
            })
    }

    render() {
        const spaceTitle = ParamSpaceToText(this.props.categoryName, '-')
        return (
            <>
                <Title onClick={`/help-center/category`} text={spaceTitle} />
                <div className="container">
                    <div className="container-grid mm">
                        {this.state.subCategory.map(cat => {
                            return(
                                <Link to={`/help-center/details/${cat.id}`} key={cat.id} className="item a"> 
                                    <CategoriesIcons type={cat.icon} /> 
                                    <div className="item-description">{cat.title}</div>
                                </Link>
                            )
                        })}
              
                    </div>   
                </div>
            </>
        )
    }
}
