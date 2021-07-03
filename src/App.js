import React from "react";
import axios from "axios";

import Card from "./components/Card"
import Load from "./components/Load"
import Search from "./components/Search"

import { Global, ProdSection } from './styles'

export default class App extends React.Component {
state = {
  search: [],
  load: false,
  error: false,
  keySearch: '',
  get: (key, ord='asc', page='0', sortBy='price', from='', pages='5') => {
    let err = 0;
    this.setState({load: true})
    this.setState({ keySearch: key });
    try {
      axios.get(`https://server-webscrap-shopee.herokuapp.com/api/search/${key}&order=${ord}&sortBy=${sortBy}&locations=${from}/${pages}`).then((response) => {
        this.setState({ search: response.data });  
      this.setState({load: false})
    });
    } catch (e) {
      if (err < 3){
        console.error(e)
        err++
        this.state.get(key);
      }
      this.setState({error: true})
    }
  }
};

render() {
  const { search, load } = this.state;
  if(load){
    return(
      <>
        <Search keySearch={this.state.keySearch} />
        <Load />
      </>
    )
  }
  return (
    <Global>
      <Search keySearch={this.state.keySearch} newSearch={this.state.get}/>
      <ProdSection>
        {search.map((search) => (
          <Card produto={search} />
        ))}
      </ProdSection>
    </Global>

  );
}
}
