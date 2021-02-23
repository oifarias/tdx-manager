import React, { Component } from 'react'
import {
    Cached,
    History,
    Beenhere,
    AccountCircle,
    Person,
    PeopleAlt,
    Home,
    PersonAddDisabled,
    AccountTree,
    Input,
    Assistant,
    Receipt,
    QuestionAnswer,
    CallSplit,
    Update,
    BugReport,
    ListAlt,
    ReportProblem,
    KeyboardTab
} from '@material-ui/icons'

export default class CategoriesIcons extends Component {
    render() {
        const Icons = () => {
            switch (this.props.type) {
                case 'Input':
                    return <Input />
                case 'ic-login':
                    return <KeyboardTab />
                case 'ReportProblem':
                        return <ReportProblem />
                case 'ListAlt':
                    return <ListAlt />
                case 'BugReport':
                    return <BugReport />
                case 'Update':
                    return <Update />
                case 'CallSplit':
                    return <CallSplit />
                case 'QuestionAnswer':
                    return <QuestionAnswer />
                case 'Assistant':
                    return <Assistant />
                case 'Receipt':
                        return <Receipt />
                case 'ic-loop-outline':
                    return <Cached />
                case 'PersonAddDisabled':
                    return <PersonAddDisabled />
                case 'AccountTree':
                    return <AccountTree />
                case 'ic-historico':
                    return <History />
                case'ic-seguro':
                    return <Beenhere />
                case 'AccountCircle':
                    return <AccountCircle />
                case 'ic-my-profile':
                    return <Person />
                case 'ic-personal-user':
                    return <PeopleAlt />
                case 'ic-home':
                    return <Home />
                default:
                    break;
            }
        }

        return(
            <Icons />
        )
    }
}

