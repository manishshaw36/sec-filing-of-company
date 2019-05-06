import React, { Component } from 'react'
import { withRouter } from 'react-router'
import axios from 'axios'
import { Table } from 'semantic-ui-react'

class CompanyInfo extends Component{
    state = {}

    componentWillMount() {
        let { history ,match: { params: { tickerKey } } } = this.props
        let path = 'http://localhost:4001/getInfo/?ticker_key=' + tickerKey
        axios.get(path)
            .then(res => {
                this.setState({ companyInfo: res.data.info })
            })
            .catch(er => {
                history.push('/error')
            });
    };

    getTable = (tableEle) => {
        return (
            <Table celled className="mt-1">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Filed</Table.HeaderCell>
                        <Table.HeaderCell>Forms</Table.HeaderCell>
                        <Table.HeaderCell>Description</Table.HeaderCell>
                        <Table.HeaderCell>Details</Table.HeaderCell>
                    </Table.Row>
                    {tableEle.map((ele) => {
                        return (
                            <Table.Row>
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
    
    render() {
        const { companyInfo=[] } = this.state;
        return (
            <div>
                {companyInfo.length > 0 ? 
                    this.getTable(companyInfo) : 
                    <h2>Sorry currrently no SEC and Quarterly Reports available.</h2>}
            </div>
        )
    }
}
export default withRouter(CompanyInfo);