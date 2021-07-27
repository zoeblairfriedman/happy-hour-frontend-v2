import React from 'react'
import Map from '../components/Map';
import {fetchBarsBackend} from '../actions/fetchBarsBackend'
import {connect} from 'react-redux'

class MapContainer extends React.Component {

    componentDidMount(){
        this.props.fetchBarsBackend()
    }
    

    render (){

        return (

            <div>
           <Map bars={this.props.bars}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        bars: state.bars,
        selectedBar: state.selectedBar
    }
}



export default connect(mapStateToProps, {fetchBarsBackend})(MapContainer);