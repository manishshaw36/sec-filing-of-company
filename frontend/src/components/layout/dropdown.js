import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const DropdownCompanyList = (props) => {
    const handleChange = (e, { value }) => {
        const { companyOption } = props;
        const companySelctedList = companyOption.filter(ele => ele.value === value);
        props.getSelectedData(companySelctedList[0]);
    }
    const { dataPlaceHolder, companyOption } = props;
    return (
        <Dropdown
            placeholder={ dataPlaceHolder }
            fluid
            search
            selection
            options={ companyOption }
            onChange={ handleChange }
        />
    )
}

export default DropdownCompanyList;