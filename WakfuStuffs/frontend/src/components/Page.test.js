import React from "react";
import { mount } from "enzyme";
import ConnectedPage, {Page} from "./Page";
import Adapter from 'enzyme-adapter-react-16'
import { configure, shallow } from 'enzyme';
import configureStore from 'redux-mock-store'
configure({ adapter: new Adapter() });
import { MemoryRouter } from 'react-router-dom'
import { Provider } from "react-redux";
import {changePage} from "../actions/wakfu";
import * as types from "../constants/ActionTypes";
import wakfuApp from "../reducers";
import {createStore} from 'redux'

describe('>>>H O M E --- REACT-REDUX (Mount + wrapping in <Provider>)', () => {
    const initialState = {
        stuffs: [],
        cpt: 0,
        page: 1,
        size_page: 50,
        total: 0,
        myFilter: '&',
    };
    const mockStore = configureStore()
    let store, wrapper;

    beforeEach(() => {
        store = mockStore(initialState)
        wrapper = mount(<Provider store={store}><ConnectedPage page={1} size_page='50' actions={undefined} total={0} /></Provider>)
    });

  // All tests will go here
    it('+++ render the connected(SMART) component', () => {
       expect(wrapper.find(ConnectedPage).length).toEqual(1)
    });

    it('+++ check Prop matches with initialState', () => {
        expect(wrapper.find(Page).prop('output')).toEqual(initialState.output)
    });

    it('+++ check action on dispatching ', () => {
        let action
        store.dispatch(changePage(3))
        action = store.getActions()
        expect(action[0].type).toBe(types.CHANGE_PAGE)
    });

});

describe('>>>H O M E --- REACT-REDUX (actual Store + reducers) more of Integration Testing',()=>{
    let store,wrapper, actions
    const initialState = {
        stuffs: [],
        cpt: 0,
        page: 1,
        size_page: 50,
        total: 0,
        myFilter: '&',
    };

    beforeEach(()=>{
        store = createStore(wakfuApp)
        wrapper = mount(<Provider store={store}><ConnectedPage page={1} size_page='50' actions={undefined} total={0} /></Provider>)
    })

    it('+++ check state matches with action changePage called', () => {
        store.subscribe(() => {
            expect(store.getState().wakfu.page).toEqual(50);
        });
        store.dispatch(changePage(50))
    });

});