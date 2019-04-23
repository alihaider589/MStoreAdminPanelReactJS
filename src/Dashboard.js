import React, {Component} from 'react';
import Header from "./component/Header";
import Menu from "./component/Menu";
import Dashbord from "./component/dashbord";
import Items from "./component/Items";
import Footer from "./component/footer";
import Categories from './component/cat';
import UserForm from './component/UserDetails'

class Dashboard extends Component {
    constructor(props){
        super(props);
        
        this.changePage1 = this.changePage1.bind(this);
        this.changePage2 = this.changePage2.bind(this);
        this.changePage3 = this.changePage3.bind(this);
        this.changePaged = this.changePaged.bind(this);
        this.changePage5 = this.changePage5.bind(this);
        this.state={
            page1:true,
            page2:false,
            page3:false,
            page4:false,
            page5:false
        }

    }
    changePage1(){
        this.setState({
            page1:false,
            page2:true,
            page3:false,
            page4:false
        })
    }
    changePage2(){
        this.setState({
            page1:false,
            page2:false,
            page3:true,
            page4:false
        })
    }
    changePaged(){
        this.setState({
            page1:true,
            page2:false,
            page3:false,
            page4:false
        })
    }
    changePage3(){
        this.setState({
            page1:false,
            page2:false,
            page3:false,
            page4:true
        })
    }
    changePage5(){
        this.setState({
            page1:false,
            page2:false,
            page3:false,
            page4:false,
            page5:true
        })
    }
    render() {
        return (
            <div>
                <Header   />
                <Menu changePage1={this.changePage1} changePage5={this.changePage5}  changePage2={this.changePage2} changePage3={this.changePage3}   changePaged={this.changePaged}    />
                {this.state.page1 ? <Dashbord/>: ""}
                {this.state.page2 ? <UserForm/>:""}
                {this.state.page3 ? <Items/>: ""}
                {this.state.page5 ? <Categories/> : ""}
                <Footer/>
            </div>
        );
    }
}

export default Dashboard;