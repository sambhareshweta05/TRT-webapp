import React,{Component} from "react";
import {dataFunctions} from "../Utilities/data";

class Home extends Component{
     state={
      results:null,
      currentPage:0,
      totalCount:0,
      pageLimit:5,
      totalPages:0,
      // startIndex:0,
      // endIndex:3

    }
      async componentDidMount(){
         const res = await dataFunctions.getStockMarketDetails();
         console.log(res.data.results);
         this.setState({results:res.data.results,
                      totalCount:res.data.results.length,
                      totalPages:Math.ceil(res.data.results.length/this.state.pageLimit),
                      })
     }
     pagination=()=>{  
      this.setState({currentPage:this.state.currentPage+1})
    }
    paginationPrevious=()=>{
      this.setState({currentPage:this.state.currentPage-1})
    } 
    // pageNumber=()=>{
    //   this.setState({startIndex : this.state.currentPage * this.state.pageLimit - this.state.pageLimit, endIndex : this.state.startIndex + this.state.pageLimit}) 
    //   return data.slice(startIndex, endIndex);
    //    this.setState({currentPage:this.state.currentPage>1&&((this.state.currentPage+1)-1,this.state.currentPage+1,this.state.currentPage+2,this.state.currentPage+3)})
    // }
        render(){
           console.log(this.state.results);
           console.log(this.state.totalCount,this.state.totalPages);
           //console.log(this.state.pageNumber)
           console.log(this.state.currentPage>1&&(this.state.currentPage+1)-1,this.state.currentPage+1,this.state.currentPage+2,this.state.currentPage+3)
          if(this.state.results !== null)
          {return(
            <div className="container py-4">
                <div className="row">
                {this.state.results.map((item,index) => (
                  index>=(this.state.currentPage > 0 ? this.state.pageLimit * this.state.currentPage: 0) &&
                  index<=((this.state.currentPage+1)*(this.state.pageLimit))-1&&               
                  
                    <React.Fragment key={index}>
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">Value</th>
                            <th scope="col">ValueW</th>
                            <th scope="col">Open</th>
                            <th scope="col">Close</th>
                            <th scope="col">High</th>
                            <th scope="col">Low</th>
                            <th scope="col">Total</th>
                            <th scope="col">N</th>                            
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{item.v}</td>
                            <td>{item.vw}</td>
                            <td>{item.o}</td>
                            <td>{item.c}</td>
                            <td>{item.h}</td>
                            <td>{item.l}</td>
                            <td>{item.t}</td>
                            <td>{item.n}</td>
                          </tr>
                        </tbody> 
                      </table>     
                    </React.Fragment>
                ))}
                </div>
                <nav aria-label="Page navigation example">
                <ul className="pagination">
                      <div className="container d-flex justify-content-between">
                      <li className="secondary"><button disabled={this.state.currentPage<=0} type="button" className="btn btn-dark " onClick={()=>this.paginationPrevious()} >Previous</button></li>
                      <li className="secondary"><a className="page-link" href="#" onClick={()=>this.state.pageNumber()}>1</a></li>
                      <li className="secondary"><a className="page-link" href="#" onClick={()=>this.state.pageNumber()}>2</a></li>
                      <li className="secondary"><a className="page-link" href="#" onClick={()=>this.state.pageNumber()}>3</a></li>
                      <li className="secondary"><button disabled={this.state.currentPage===this.state.totalPages-1}type="button" className="btn btn-dark" onClick={()=>this.pagination()}>Next</button></li>
                      </div>
                </ul>
                </nav>
                 
            </div>
           
        )}else {
            return <div>Loading......</div>
        }
    }
}
export default Home