import React from 'react';
import DisplayStuffs from './DisplayStuffs'
import Page from './Page'
import SearchForm from "./SearchForm";


const Search = ({stuffs, actions, page, total, size_page}) => {
    return(
        <React.Fragment>
            <SearchForm actions={actions}/>
            <Page page={page} size_page={size_page} actions={actions} total={total}/>
            <DisplayStuffs stuffs={stuffs} actions={actions} page={page} size_page={size_page}/>
            <Page page={page} size_page={size_page} actions={actions} total={total}/>
        </React.Fragment>
    )
}

export default Search