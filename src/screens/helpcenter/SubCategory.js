import React from 'react'
import SubCategory from '../../components/helpcenter/SubCategory'

const ScreenSubCategory = ({match}) => (
    <SubCategory categoryName={match.params.categoryName} categoryId={match.params.categoryId}/>
);
export default ScreenSubCategory;