import React from 'react';
import Stuffs from './Stuffs'
import Page from './Page'

const MainSection = ({stuffs, actions, cpt, page}) =>(
      <div>
        <h2 align="center">Welcome to Wakfu Stuffs!</h2>
        <hr />
        <Page page={page} actions={actions}/>
        <Stuffs stuffs={stuffs} actions={actions} page={page}/>
      </div>
)
export default MainSection