import React from 'react';
import DisplayStuffs from './DisplayStuffs'
import Page from './Page'


const Search = ({stuffs, actions, page}) => {
    return(
        <React.Fragment>
            <Page page={page} actions={actions}/>
            <DisplayStuffs stuffs={stuffs} actions={actions} page={page}/>
            <Page page={page} actions={actions}/>
        </React.Fragment>
    )
}

export default Search