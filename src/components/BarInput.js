import React from 'react'
import {connect} from 'react-redux'
import { addBar } from '../actions/addBar'

// please move the form into it's own component! 

class BarInput extends React.Component {
    

    state = {
        name: this.props.bar.name,
        details: "",
        lat: this.props.bar.geometry.location.lat,
        lng: this.props.bar.geometry.location.lng,
        place_id: this.props.bar.place_id,
        address: this.props.bar.vicinity,
        website: "",
        phone: 0,
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false,
        sunday: false,
        start: "",
        end: "",
        verified: ""
    }

    handleChange = (event) => {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        this.setState({
           ...this.state,
           [event.target.name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addBar(this.state)
        this.props.handleClose()
        this.setState({
            name: "",
            details: "",
            phone: 0,
            website: "",
            monday: false,
            tuesday: false,
            wednesday: false,
            thursday: false,
            friday: false,
            saturday: false,
            sunday: false,
            start: undefined,
            end: undefined
        })
    }




// this logic is crazy, please fix
    render(){

                
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h2>{this.state.name}</h2>
                    <div className="mb-3">
                        <label for="website">Website:</label>
                        <input type="text" className="form-control" id="website" value={this.state.website} name="website" onChange={this.handleChange} />
                    </div>
                    <div >
                        <label for="phone">Phone Number</label>
                        <input type="integer" className="form-control" id="phone" placeholder="phone" value={this.state.phone} name="phone" onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Start Time:</label>
                        <input type="time" value={this.state.start} className="form-control" name="start" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label>End Time:</label>
                        <input type="time" value={this.state.end} className="form-control" name="end" onChange={this.handleChange}/>
                    </div>
                    <div class="container">
                        <h5 className="mt-2">Days of the week:</h5>
                            <div class="form-check">
                                <label className="form-check-label">Monday</label>
                                <input className="form-check-input" type="checkbox" name="monday" checked={this.state.monday} onChange={this.handleChange} />
                            </div>
                            <div class="form-check">
                                <label className="form-check-label">Tuesday</label>
                                <input className="form-check-input" type="checkbox" name="tuesday" checked={this.state.tuesday} onChange={this.handleChange}/>
                            </div>  
                            <div class="form-check">
                                <label className="form-check-label">Wednesday</label>
                                <input className="form-check-input" type="checkbox" name="wednesday" checked={this.state.wednesday} onChange={this.handleChange}/>
                            </div>  
                            <div class="form-check">     
                                <label className="form-check-label">Thursday</label>
                                <input className="form-check-input" type="checkbox" name="thursday" checked={this.state.thursday} onChange={this.handleChange}/>
                            </div>  
                            <div class="form-check">    
                                <label className="form-check-label">Friday</label><input className="form-check-input" type="checkbox" name="friday" checked={this.state.friday} onChange={this.handleChange}/>
                            </div>
                            <div class="form-check">    
                                <label className="form-check-label">Saturday</label>
                                <input className="form-check-input" type="checkbox" name="saturday" checked={this.state.saturday} onChange={this.handleChange}/>
                            </div>
                            <div class="form-check">    
                                <label className="form-check-label">Sunday</label>
                                <input className="form-check-input" type="checkbox" name="sunday" checked={this.state.sunday} onChange={this.handleChange}/>
                            </div>
                       </div>
             
                    <div>
                        <label for="details" className="h5 mt-2">Happy Hour Deals:</label>
                        <textarea value={this.state.details} className="form-control" name="details" onChange={this.handleChange}></textarea>     
                    </div>
                    <input className="btn btn-primary my-3" type="submit"/>
                </form>
                <button onClick={() => this.props.handleClose()} className="btn btn-secondary">Close</button>
            </div>
        )
    }
}



export default connect(null, {addBar})(BarInput);