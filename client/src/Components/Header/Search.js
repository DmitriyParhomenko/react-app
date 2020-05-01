import React, {Component} from 'react';
import {Button, Form} from "bootstrap-4-react";

class Search extends Component {
    render() {
        return (
            <Form inline my="2 lg-0">
                <Form.Input type="search" placeholder="Search" mr="sm-2" />
                <Button outline dark my="2 sm-0">Search</Button>
            </Form>
        );
    }
}

export default Search;