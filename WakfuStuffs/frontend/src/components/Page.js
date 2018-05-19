import React, { Component } from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import {connect} from 'react-redux';

class Page extends Component{
    constructor(props) {
        super(props);
        this.state = {"pages": [], "left": -1, "right": -1, "max": 10}
    }
    componentDidMount() {
        this.getNumPages(this.props.page, this.state.max)
        window.scrollTo(0, 0)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
     if(prevProps.page !== this.props.page) {
       this.getNumPages(this.props.page, this.state.max)
     }
     if(prevProps.total !== this.props.total) {
       this.getNumPages(this.props.page, this.state.max)
     }
     if(prevProps.size_page !== this.props.size_page) {
       this.getNumPages(this.props.page, this.state.max)
     }
   }

    changePage = (value) => {
        window.scrollTo(0, 0)
        this.props.actions.changePage(value)
        this.getNumPages(value)
    }



    getNumPages = (num) => {
        let max = Math.ceil(this.props.total / this.props.size_page)
        if(max <= 10){
            this.setState({"left": -1})
            this.setState({"right": -1})
            let table = []
            for (let i = 1; i <= max; i++){
                table.push(i)
            }
            this.setState({"pages": table})
            return
        }
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
            <Pagination>
            {table.map((elm) =>{
                return this.getPaginationItem(elm)
            })}
            </Pagination>
        )
    }

    render(){
        return (
            <div className="PageBar">
                {this.buildPagination(this.state.pages)}
            </div>
        )
    }
}


export default connect()(Page);