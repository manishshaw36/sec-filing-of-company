import React from 'react'
import { withRouter } from 'react-router';
import { Table } from 'semantic-ui-react'

const getTable = (tableEle) => {
    return (
        <Table celled className="mt-1">
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Filed</Table.HeaderCell>
                    <Table.HeaderCell>Forms</Table.HeaderCell>
                    <Table.HeaderCell>Description</Table.HeaderCell>
                    <Table.HeaderCell>Details</Table.HeaderCell>
                </Table.Row>
                {tableEle.map((ele, index) => {
                    return (
                        <Table.Row key={index}>
                            <Table.Cell>{ele.date}</Table.Cell>
                            <Table.Cell>{ele.form}</Table.Cell>
                            <Table.Cell>{ele.description}</Table.Cell>
                            <Table.Cell>{ele.detail}</Table.Cell>
                        </Table.Row>
                    )
                })}
            </Table.Header>
        </Table>
    )
}
const CompanyInfo = (props) => {
    const { companyInfo } = props;
    return (
        <div>
            {companyInfo.length > 0 ? 
                getTable(companyInfo) : 
                <h2>Sorry currrently no SEC and Quarterly Reports available.</h2>}
        </div>
    )
}
export default withRouter(CompanyInfo);