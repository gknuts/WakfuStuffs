import React from 'react';
import Stuffs from './Stuffs'

const MainSection = ({stuffs, actions, cpt}) =>(
      <div>
        <h2 align="center">Welcome to Wakfu Stuffs!</h2>
        <hr />
        <Stuffs stuffs={stuffs} actions={actions}/>
      </div>
)
export default MainSection