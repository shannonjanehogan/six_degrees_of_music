import React, { Component } from 'react'
import { Search, SearchProps } from 'semantic-ui-react'
import _ from 'lodash'
import async from 'async'

export default class SearchBar extends Component {
  constructor(props) {
    super()
    this.state = {
      isLoading: false,
      results: [], 
      value: '',
      valueMap: {},
    }

    this.searchQueue = async.queue(this.getSearchResults,  1)
  }

  componentWillMount() {
    this.resetComponent();
  }

  getSearchResults = (value, callback) => {
    console.log(value);
    let url = new URL(`http://104.248.220.9/artists/search/${this.state.value}`)
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      }
    })
      .then(response => response.json())
      .then((responseJson) => {
        let newResults = _.map(responseJson, (cur) => {
          return { title: cur.name }
        })

        this.setState({ isLoading: false, results: newResults, valueMap: { ...this.state.valueMap, [value]: newResults } });
        callback();
      }).catch((error) => {
        console.log(error)
        callback();
      })
  }

  resetComponent = () => this.setState({ isLoading: false, results: [], value: ''})

  handleResultSelect = (e, { result }) => this.setState({ value: result.title })

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value }, () => {
      if (this.state.valueMap[value]) return this.setState({ isLoading: false, results: this.state.valueMap[value]})
      if (this.state.value.length < 1) return this.resetComponent()

      this.searchQueue.push(value);

      /*
      */
    })
  }

  render() {
    const { isLoading, results, value } = this.state
    return (
      <div className="Search-wrapper">
        <Search
          loading={isLoading}
          onResultSelect={this.handleResultSelect}
          onSearchChange={_.debounce(this.handleSearchChange, 500, {leading: true})}
          results={results}
          value={value}
        />
      </div>
    );
  }
}