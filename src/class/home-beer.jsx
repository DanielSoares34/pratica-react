import axios from 'axios'
import {Component} from 'react'

class HomeBeer extends Component {

    constructor(props){
        super(props);

        this.state = {listBeers: [] };
    }

    componentDidMount() {
        axios.get('https://api.punkapi.com/v2/beers?page=2&per_page=80')
        .then((data)=>{
        const beers = data.data;
        this.setState({ listBeers:beers})
    });


}
render () {
    return (
    <div>
        {this.state.listBeers.map((beer) =>{
            return (<div>
                <img src={beer.image_url} />{''}
                <div>
                <span>{beer.name}</span>;
                </div>
                </div>
            );
        })}
        </div>);
}
}

export default HomeBeer