import React, { Component } from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import {connect} from 'react-redux';

class Page extends Component{

    changePage = (value) => {
        this.props.actions.changePage(value)
        this.props.actions.fetchStuffsLimits(value)
    }

    render() {
        return (
        <div align="center">
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