import React, {Component} from 'react';
import Additem from "./Items/Additem";
import Edititems from "./Items/Edititems";


class Categories extends Component {

constructor(props){
    super(props);
    this.state={
        additems:false,
        edititems:false
    }
   
}


closeform=()=>{
    this.setState({
        additems:false,
        id:'',
        edititems:false
    })
};

    render() {
        return (
            <div>
                <div className="content-wrapper">
                    { this.state.additems ? <Additem  close={this.closeform}/> :''}
                    { this.state.edititems ? <Edititems id={this.state.id}  close={this.closeform}/> :''}
                    <section className="content-header">
                        <h1>
                            User Tables
                            <small>Advance User  tables</small>
                        </h1>

                    </section>


                    <section className="content">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="box">
                                    <div className="box-header">
                                        <h3 className="box-title">Items Data Table</h3>
                                        <button onClick={()=>this.setState({ additems:true,
                                            id:'',
                                            edititems:false})} className={'btn btn-success pull-right'} ><i className={'fa fa-add'}/> Add Item</button>
                                    </div>

                                    <div className="box-body">
                                        <table id="example2" className="table table-bordered table-hover">
                                            <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Brand</th>
                                                <th>Categories</th>
                                                <th>Price</th>
                                                <th>delete</th>
                                                <th>Edit</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            
                                            </tbody>
                                            <tfoot>
                                            <tr>
                                                <th>Rendering engine</th>
                                                <th>Browser</th>
                                                <th>Platform(s)</th>
                                                <th>Engine version</th>
                                                <th>CSS grade</th>
                                            </tr>
                                            </tfoot>
                                        </table>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </section>

                </div>
            </div>
        );
    }
}

export default Categories;