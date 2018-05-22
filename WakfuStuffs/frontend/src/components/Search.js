import React from 'react';
import DisplayStuffs from './DisplayStuffs'
import Page from './Page'
import SearchForm from "./SearchForm";


const Search = ({stuffs, actions, page, total, size_page, myFilter, mobile}) => {
    if(mobile){
        return (
            <div align="center">
                <SearchForm actions={actions} myFilter={myFilter} page={page} size_page={size_page}/>
                <Page page={page} size_page={size_page} actions={actions} total={total}/>
                <DisplayStuffs stuffs={stuffs} actions={actions} page={page} size_page={size_page} total={total}
                                   myFilter={myFilter}/>
                <Page page={page} size_page={size_page} actions={actions} total={total}/>
            </div>
        )
    }else {
        return (
            <div className="wrap">
                <div className="fleft">
                    <Page page={page} size_page={size_page} actions={actions} total={total}/>
                    <DisplayStuffs stuffs={stuffs} actions={actions} page={page} size_page={size_page} total={total}
                                   myFilter={myFilter}/>
                    <Page page={page} size_page={size_page} actions={actions} total={total}/>
                </div>

                <div className="fright">
                    <SearchForm actions={actions} myFilter={myFilter} page={page} size_page={size_page}/>
                </div>
            </div>
        )
    }
}

export default Search