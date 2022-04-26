import React from "react";
import {dataFunctions} from "../Utilities/data";

class LiveScore extends React.Component {
  state = {
    liveScore: null,
    currentPage: 0,
    totalCount: 0,
    pageLimit: 2,
    totalPages: 0,
  };

  async componentDidMount() {
    const liveScore = await dataFunctions.getlivescoredetails();
    // this.setstate({liveScore:liveScore})
    this.setState({
      liveScore: liveScore,
      totalCount: liveScore.series.live.length,
      totalPages: Math.ceil(
        liveScore.series.live.length / this.state.pageLimit
      ),
    });
  }

  pagination = () => {
    this.setState({ currentPage: this.state.currentPage + 1 });
  };
  paginationPrevious = () => {
    this.setState({ currentPage: this.state.currentPage - 1 });
  };

  render() {
    console.log(this.state);
    if (this.state.liveScore !== null) {
      return (
        <div>
          {this.state.liveScore.series.live.map(
            (item, index) =>
              index >=
                (this.state.currentPage > 0
                  ? this.state.pageLimit * this.state.currentPage
                  : 0) &&
              index <=
                (this.state.currentPage + 1) * this.state.pageLimit - 1 && (
                <div className="container-home">
                  <React.Fragment>
                    <h1>{item.series_name}</h1>
                  </React.Fragment>
                </div>
              )
          )}
          {this.state.currentPage > 0 && (
            <button
              type="button"
              className="previouspage"
              onClick={() => this.paginationPrevious()}
            >
              Previous
            </button>
          )}
          {this.state.currentPage + 1 < this.state.totalPages && (
            <button
              type="button"
              className="nextpage"
              onClick={() => this.pagination()}
            >
              Next
            </button>
          )}
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}
export default LiveScore;
