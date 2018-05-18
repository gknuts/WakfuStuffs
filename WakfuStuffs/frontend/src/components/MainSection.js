import React from 'react';
import Search from './Search'

const MainSection = ({stuffs, actions, page}) =>(
      <div>
        <h2 align="center">Welcome to Wakfu Stuffs!</h2>
        <hr />

        <Search stuffs={stuffs} page={page} actions={actions}/>
      </div>
)
export default MainSection