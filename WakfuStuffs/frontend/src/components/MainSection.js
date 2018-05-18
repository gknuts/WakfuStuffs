import React from 'react';
import DisplayStuffs from './DisplayStuffs'
import Page from './Page'
import Search from './Search'

const MainSection = ({stuffs, actions, cpt, page}) =>(
      <div>
        <h2 align="center">Welcome to Wakfu Stuffs!</h2>
        <hr />
      <Search/>
        <Page page={page} actions={actions}/>
        <DisplayStuffs stuffs={stuffs} actions={actions} page={page}/>
      </div>
)
export default MainSection