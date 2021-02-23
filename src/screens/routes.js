import React from 'react';
import { BrowserRouter,Route, Switch } from 'react-router-dom'
import ScreenStart from './helpcenter/Start'
import ScreenSubCategory from './helpcenter/SubCategory'
import ScreenHelpCenterDetails from './helpcenter/Details'

const SreensRoutes = () =>(
    <BrowserRouter>
    <Switch>
      <Route path="/help-center/category"  component={ScreenStart} />
      <Route path="/help-center/sub-category/:categoryName/:categoryId" component={ScreenSubCategory} />
      <Route path="/help-center/details/:subCategoryId" component={ScreenHelpCenterDetails} />        
    </Switch>
  </BrowserRouter>
);

export default SreensRoutes