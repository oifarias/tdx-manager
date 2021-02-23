import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PubSub from 'pubsub-js'
import Title from '../UI/Title/Title'
import axios from 'axios'
import Accordion from '../UI/Accordion/Accordion'
import './Style.css'
import CategoriesIcons from '../../components/UI/CategoriesIcons'
import Button from '../UI/Button/Button'

export default class Details extends Component {
    constructor() {
        super()
        this.state = {
            subCatContent: '',
            subCatTittle: '',
            catTitle: '',
            catId: '',
            categories: [],
            subCatQuestions: [],
            subCatToggleQuestions: '',
            clearValueNotUsed: '',
            goback:'',
            moreabout:''
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)

        axios.get('/mock/content.json')
            .then(resp => {
                PubSub.publish('loading', false)
                let categoriesManager = resp.data.categories
                this.setState({
                    categories:categoriesManager
                })

                for (let n in this.state.categories) {

                    for (let s in this.state.categories[n].sub) {
                        const idCategory = this.state.categories[n].sub[s].id

                        if(idCategory === this.props.subCategoryId) {
                            this.setState({
                                subCatContent: this.state.categories[n].sub[s].content,
                                subCatTittle: this.state.categories[n].sub[s].title,
                                catTitle: this.state.categories[n].title,
                                catId: this.state.categories[n].id
                            })
                        }

                        for (let q in this.state.categories[n].sub[s].content.questions) {
                            if(idCategory === this.props.subCategoryId) {
                                this.setState({
                                    subCatQuestions: this.state.categories[n].sub[s].content.questions,
                                    clearValueNotUsed: this.state.categories[n].sub[s].content.questions[q],
                                    moreabout: this.state.categories[n].sub[s].content.confluence
                                })
                            }
                            
                        }             
                    }
                    console.log(this.state.moreabout)
                    const toggleQuestions = index => {
                        this.setState(this.state.subCatQuestions.map((question, i) => {
                            if (i === index) {
                                question.open = !question.open
                            } else {
                                question.open = false;
                            }
                    
                            return question;
                        })) 
                    }
                    this.setState({
                        subCatToggleQuestions: toggleQuestions
                    })
                }
                document.title = this.state.catTitle + ' - ' + this.state.subCatTittle
            })
    }
      
    
    render() {
        return (
            <>
                <Title onClick={`/help-center/sub-category/${this.state.catTitle}/${this.state.catId}`} text={this.state.subCatTittle} />
                <div className="container">
                    <div className="content-detail mm">
                        <div className="questions">
                            { 
                                this.state.subCatQuestions.map((cat, i) => (
                                    <Accordion accordion={cat} index={i} key={i} toggleQuestions={this.state.subCatToggleQuestions} />  
                                ))
                            } 
                        </div>    
                    </div>   
                    <div className="container-grid btnhome" >
                            <Link to={`/help-center/category`} className="item a">
                                <CategoriesIcons type={"ic-home"}/>
                                <div className="item-description"> {"Menu Principal"} </div>
                            </Link>
                            <div className="item a">
                                <a href={'https://webmotors.atlassian.net/jira/your-work'}> 
                                <CategoriesIcons type={"ic-login"} onPress={this.loadInBrowser}/>
                                <div className="item-description"> {"Abrir um Card"} </div>
                                </a>
                            </div>

                    </div> 
                    <a href ={this.state.moreabout}>
                            <Button className="btn-fed" text="Mais sobre"/>
                            </a>
                </div>
            </>
        )
    }
}