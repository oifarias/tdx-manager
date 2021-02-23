import React from 'react'
import Details from '../../components/helpcenter/Details'

const ScreenHelpCenterDetails = ({ match }) => (
    <Details subCategoryId={match.params.subCategoryId}/>
);
export default ScreenHelpCenterDetails