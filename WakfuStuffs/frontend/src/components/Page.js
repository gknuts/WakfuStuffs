import React, { Component } from 'react';
import { Pagination, PaginationItem, PaginationLink, Button } from 'reactstrap';
import {connect} from 'react-redux';

class Page extends Component{
    constructor(props) {
        super(props);
        this.state = {"pages": [1, 2, 3], "page": 7, "max": 191, "left": -1, "right": -1}
    }
    componentDidMount() {
        this.getNumPages(this.state.page, 191)
    }

    changePage = (value) => {
        this.setState({"page": value})
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
                table.push(i)
            }
            table.push(i)
            this.setState({"right": i})
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
        return (
            <PaginationItem key={value}>
              <PaginationLink onClick={() =>{this.changePage(value)}} >
                  {this.state.left === value || this.state.right === value ? "..." : value}
              </PaginationLink>
            </PaginationItem>
        )
    }

    buildPagination = (table) => {
        console.log("PAGE")
        console.log(this.state.page)
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

    render2() {
        return (
        <div align="center">
            <Button onClick={() => {this.getNumPages(6, 191)}}>Test</Button><br/>
            {this.state.pages.map((page) =>  "[" + page + "]")}
          <Pagination size="sm">
            <PaginationItem>
              <PaginationLink previous onClick={() =>{}} />
            </PaginationItem>
            <PaginationItem active>
              <PaginationLink onClick={() =>{this.changePage(1)}} >
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink onClick={() =>{this.changePage(2)}} >
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink onClick={() =>{this.changePage(3)}} >
                3
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink onClick={() =>{this.changePage(4)}} >
                4
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink>
                ...
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink onClick={() =>{this.changePage(230)}} >
                230
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink next onClick={() =>{}} />
            </PaginationItem>
          </Pagination>
        </div>
        );
      }
}


export default connect()(Page);