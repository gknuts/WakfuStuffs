import React, { Component } from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import {connect} from 'react-redux';

class Page extends Component{
    constructor(props) {
        super(props);
        this.state = {"pages": [], "max": 230, "left": -1, "right": -1}
    }
    componentDidMount() {
        this.getNumPages(this.props.page, this.state.max)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
     if(prevProps.page !== this.props.page) {
       this.getNumPages(this.props.page, this.state.max)
     }
   }

    changePage = (value) => {
        this.props.actions.changePage(value)
        this.props.actions.fetchStuffsLimits(value)
        this.getNumPages(value, this.state.max)
    }



    getNumPages = (num, max) => {
        let table = []
        let min
        if(num >= 6) {
            min = num - 3
            if(min > 2){
                table.push(1)
                table.push(min-1)
                this.setState({"left": min-1})
            }
            let i
            for (i = min; i < num+4; i++){
                if(i < max) table.push(i)
            }
            if(i < max){
                table.push(i)
                this.setState({"right": i})
            }else{
                this.setState({"right": -1})
            }
            table.push(max)
        }else{
            this.setState({"left": -1})
            min=1
            let i
            for (i = min; i < num+4; i++){
                table.push(i)
            }
            table.push(i)
            this.setState({"right": i})
            table.push(max)
        }
        this.setState({"pages": table})
    }

    getPaginationItem = (value) => {
        const isPage = (value === this.props.page)

        const content = (
          <PaginationLink onClick={() =>{this.changePage(value)}} >
              {this.state.left === value || this.state.right === value ? "..." : value}
          </PaginationLink>
        )
        return (
            <React.Fragment key={value}>
                {isPage ? (
                    <PaginationItem active>
                        {content}
                    </PaginationItem>
                ):(
                    <PaginationItem>
                        {content}
                    </PaginationItem>
                )}
            </React.Fragment>
        )
    }

    buildPagination = (table) => {
        return(
            <Pagination size="sm">
            {table.map((elm) =>{
                return this.getPaginationItem(elm)
            })}
            </Pagination>
        )
    }

    render(){
        return (
            <div>
                {this.buildPagination(this.state.pages)}
            </div>
        )
    }
}


export default connect()(Page);