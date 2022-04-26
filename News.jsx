import React, { Component } from "react";

import axios from "axios";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles:[],
      currentPage: 0,   
      totalCount: 0,
      pageLimit: 5,
      totalPages: 0,
      };
   }

  async componentDidMount() {
    const options = {
      method: "GET",
      url: "https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=b128e04acb194d45b2df8ae49c290445",
    };

    let ret;
    await axios
      .request(options)
      .then((response) => {
        console.log(response.data);
        this.setState({
          articles: response.data.articles,
          totalCount: response.data.articles.length,
          totalPages: Math.ceil(
            response.data.articles.length / this.state.pageLimit
          ),
        });
      })
    
      .catch(function (error) {
        console.error(error);
      });
    return ret;
  }

  pagination = () => {
    this.setState({ currentPage: this.state.currentPage + 1 });
  };
  paginationPrevious = () => {
    this.setState({ currentPage: this.state.currentPage - 1 });
  };

  render() {
    console.log(this.state);
    // if (this.state.articles !== null) {
        if (this.state.articles !== null  && this.state.articles.length > 0) 
    {
      return (
        <div className="all-news">
        {
          this.state.articles.map((item, index) =>
          // index<=5&&d
           index >=
           (this.state.currentPage > 0? this.state.pageLimit * this.state.currentPage : 0) &&
            index <= ((this.state.currentPage + 1) *(this.state.pageLimit )) - 1 && 
            // <div className="cont">
              <div className="news-items">
                <div className="title">
                  <h2>{item.title}</h2>
                </div>
                <img className="news-img" src={item.urlToImage} />
                <h5 className="content">{item.content}</h5>
                <p>{item.publishedAt}</p>
                <a href={item.url} target="_blank">
                  <button>READ MORE</button>
                </a>
               </div>
              // </div>
                 )
            }
    <div> 
    <div>
      </div>
      {/* <button disabled={this.state.currentPage<=0} onClick={() => this.paginationPrevious()}> previous Page </button>
     <button disabled={this.state.currentPage==this.state.pageLimit} onClick={() => this.pagination()}>Next Page </button>  */}

     <button disabled={this.state.currentPage<=0} onClick={() => this.paginationPrevious()}> previous Page </button>
     <button disabled={this.state.currentPage==this.state.totalPages-1} onClick={() => this.pagination()}>Next Page </button> 
     {/* <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav> */}
 
    </div>
    </div>
    )
    }
       else {
      return (
        <div>Loading......</div>
      );
    }
  }
}
export default News;
