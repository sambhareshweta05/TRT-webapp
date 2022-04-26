import  React ,{ Component } from "react";
import {dataFunctions} from "../Utilities/data";
import Search from "./Search";

class Train extends Component {
     state = {
             trains:null,
             currentPage:0,
             totalCount:0,
             pageLimit:4,
             totalPages:0,
             number:0,
             Train:"Raptisagar",
             // previouspage:0,
            // search:"",
            // filteredtrains:[]
             };
    
   async componentDidMount() {
     const res = await dataFunctions.gettraindata()
     const trains = res.data
     console.log(trains)
     this.setState({trains:trains,totalCount:trains.length,totalPages:Math.ceil(trains.length/this.state.pageLimit)});
     };  
      
    
    serachTrain=async(tra)=>{
      const trains = await dataFunctions.gettraindatadetails(tra)
     this.setState({trains:trains})
  }
 
    handleOnChange=(e)=>{
     this.setState({Train:e.target.value})
   }
      
     
  pagination=()=>{
    
    this.setState({currentPage:this.state.currentPage+1})
  }
  paginationPrevious=()=>{
    this.setState({currentPage:this.state.currentPage-1})
  }

render () {
// console.log(this.state.trains);
console.log(this.state);
// console.log(this.state.totalCount,this.state.totalPages);
//if(this.state.trains!==null){
  if(this.state.trains!==null && this.state.trains.length>0){
  return (
    <>
     <Search handleOnChange={this.handleOnChange} searchLocation={this.searchTrain} Train={this.state.tra}/> 
    {
   this.state.trains.map((item,index) =>
   index >=(this.state.currentPage > 0 ? this.state.pageLimit * this.state.currentPage
 : 0) &&
     index<=((this.state.currentPage+1)*(this.state.pageLimit))-1&&
  
    <div className="Traindata">
      <center><h1>Train Details</h1>
      </center>
     <div className="container">
    {/* <img src="https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/jjk6cnsbmu8yvbce_1591791559.jpeg" width="200" height="150"></img>  */}
          <table className="table">
          <thead>
                <tr>
                    <th>Train Number</th>
                    <th>Train Name</th>
                    <th>From</th>
                    <th>To</th>
                    <th>ID</th>
                    <th>Friday</th>
                    <th>Monday</th>
                    <th>Saturday</th>
                    <th>Sunday</th>
                    <th>Thursday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>To_ID</th>
                    <th>From_ID</th>
                    <th>Arrive Time</th>
                    <th>Depart Time</th>
                </tr>
            </thead>
            
            <tbody>
 
              <tr>
            <td>{item.train_num}</td>
                        <td>{item.name}</td>
                        <td>{item.train_from}</td>
                        <td>{item.train_to}</td>
                        <td>{item.data.id}</td>
                        <td>{item.data.days.Fri}</td>
                        <td>{item.data.days.Mon}</td>
                        <td>{item.data.days.Sat}</td>
                        <td>{item.data.days.Sun}</td>
                        <td>{item.data.days.Thu}</td>
                        <td>{item.data.days.Tue}</td>
                        <td>{item.data.days.Wed}</td>
                        <td>{item.data.to_id}</td>
                        <td>{item.data.from_id}</td>
                        <td>{item.data.arriveTime}</td>
                        <td>{item.data.departTime}</td>
                </tr>    
            
                   
                       
                      
                
            </tbody> 
            </table>
     </div>
  </div>
  
  
 )
    }
   
    <div className="container d-flex justify-content-between">
      <button disabled={this.state.currentPage<=0} type="button" className="btn btn-dark" onClick={()=>this.paginationPrevious()} >Previous</button>
      <button disabled={this.state.currentPage===this.state.totalPages-1}type="button" className="btn btn-dark" onClick={()=>this.pagination()}>Next</button>
     
      </div>
</>

 )
 
}
    
 else {
       return <div><h1>Loading....</h1>
      </div> }   
     
  };
  
};
export default Train;