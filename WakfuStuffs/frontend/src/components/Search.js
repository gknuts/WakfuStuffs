import React from 'react';
import DisplayStuffs from './DisplayStuffs'
import Page from './Page'
import SearchForm from "./SearchForm";


const Search = ({stuffs, actions, page, total, size_page}) => {
    return(
        <div className="wrap">
            <div className="fleft">
                <Page page={page} size_page={size_page} actions={actions} total={total}/>
                <DisplayStuffs stuffs={stuffs} actions={actions} page={page} size_page={size_page} total={total}/>
                <Page page={page} size_page={size_page} actions={actions} total={total}/>
            </div>

            <div className="fright">
                <SearchForm actions={actions}/>
            </div>
        </div>
    )
}

export default Search