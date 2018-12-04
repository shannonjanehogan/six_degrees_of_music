import React, { Component } from 'react'
import { Search, SearchProps } from 'semantic-ui-react'
import _ from 'lodash'

export default class SearchBar extends Component {

  componentWillMount() {
    this.resetComponent();
  }

  resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

  handleResultSelect = (e, { result }) => this.setState({ value: result.title })

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value }, () => {
      if (this.state.value.length < 1) return this.resetComponent()

      let url = new URL(`http://104.248.220.9/artists/search/${this.state.value}`)
      return fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        }
      })
        .then(response => response.json())
        .then((responseJson) => {
          let newResults = _.map(responseJson, (cur) => {
            return {title: cur.name}
          })

          this.setState({ isLoading: false, results: newResults});
        }).catch((error) => {
          console.log(error)
        })
    })
  }

  render() {
    const { isLoading, results, value } = this.state
    return (
      <div className="Search-wrapper">
        <Search
          loading={isLoading}
          onResultSelect={this.handleResultSelect}
          onSearchChange={this.handleSearchChange}
          results={results}
          value={value}
        />
      </div>
    );
  }
}