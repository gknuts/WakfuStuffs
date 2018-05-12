import React from 'react';
import Stuffs from './Stuffs'

const MainSection = ({fetchStuffs, stuffs}) =>(
      <div>
        <h2 align="center">Welcome to Wakfu Stuffs!</h2>
        <hr />
        <Stuffs fetchStuffs={fetchStuffs} stuffs={stuffs}/>
      </div>
)
export default MainSection