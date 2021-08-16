import { Component } from "react";

class RepoList extends Component{
    constructor(props){
        super(props);
        this.state = {
            items: [],
    dataLoaded:false
        };
    }
    componentDidMount() {
        this.props.prm()
            .then(response => response.json())
                .then(result =>{ 
                    this.setState({
                            items: result.items
                        });
                    }).catch((error) => {
                        console.error('Error:', error);
                      });                
    }
    render() {
        
        this.state.dataLoaded = this.state.items.length!=0;
        if(!this.state.dataLoaded) {
            return (<div>Loading....</div>);
        }
        else {
        return(
            <ul>
                {
                    this.state.items.map(function (obj, idx) {
                        return <li key={idx}> name: {obj.name} : description {obj.description}</li>
                    })
                }
            </ul>
            );
        }
    }
}
export default RepoList ;