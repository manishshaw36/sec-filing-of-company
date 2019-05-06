import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';

class DropdownCompanyList extends Component {
    state = {
        
    }

    handleChange = (e, { value }) => {
        const { companyOption } = this.props;
        this.setState({ value });
        const companySelctedList = companyOption.filter(ele => ele.value === value);
        this.setState({ selected: companySelctedList[0] })
        this.props.getSelectedData(companySelctedList[0]);
    }

    render() {
        const { value } = this.state;
        const { dataPlaceHolder, companyOption } = this.props;
        return (
            <Dropdown
                placeholder={ dataPlaceHolder }
                fluid
                search
                selection
                options={ companyOption }
                onChange={ this.handleChange }
                value = { value }
            />
        )
    }
}

export default DropdownCompanyList;