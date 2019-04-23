import React, {Component} from 'react';
class Edititems extends Component {
    constructor(props){
        super(props);
      
    }
    
    render() {
        return (
            <div className="box box-primary">
                <div className="box-header with-border">
                    <h3 className="box-title">Edit  Item</h3>
                </div>

                <div>
                    <div className="box-body">
                        <div className="form-group">
                            <label>Name</label>
                            <input value={this.state.name} type="text" className="form-control" id="name" placeholder="Name" onChange={(e)=>{this.setState({name:e.target.value})}}/>
                        </div>
                        <div className="form-group">
                            <label >Brand</label>
                            <input value={this.state.brand}  type="text" className="form-control" id="brand" placeholder="Brand" onChange={(e)=>{this.setState({brand:e.target.value})}}/>
                        </div>
                        <div className="form-group">
                            <label>Categories</label>
                            <select value={this.state.categories}  className="form-control" id={'color'} onChange={(e)=>{this.setState({categories:e.target.value})}} >
                                <option>cloth</option>
                                <option>phone</option>
                                <option>computer</option>
                                <option>appliance</option>
                                <option>food</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label >Cost</label>
                            <input value={this.state.cost}  type="text" className="form-control" id="Cost" placeholder="Cost" />
                        </div>
                        <div className="form-group">
                            <label >Detail</label>
                            <textarea value={this.state.detail}  className="form-control" id="detail" placeholder="Detail"/>
                        </div>
                        <div className="form-group">
                            <label>Color</label>
                            <select value={this.state.color}  className="form-control" id={'color'} > 
                                <option>Red</option>
                                <option>Green</option>
                                <option>Yellow</option>
                                <option>Blue</option>
                                <option>Orange</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label >File input</label>
                            <input type="file" id="exampleInputFile" />
                        </div>

                    </div>
                    <div className="box-footer">
                        <button  className="btn btn-primary "  >Submit</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Edititems;