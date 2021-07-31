import React from 'react'
import {connect} from 'react-redux'
import { editBar } from '../actions/editBar'
import Row from 'react-bootstrap/Row';


class BarEdit extends React.Component {
    
    state = {
        name: this.props.bar.name,
        details: this.props.bar.details,
        phone: this.props.bar.phone,
        days: this.props.bar.dateArray,
        website: this.props.bar.website,
        monday: this.props.bar.monday,
        tuesday: this.props.bar.tuesday,
        wednesday: this.props.bar.wednesday,
        thursday: this.props.bar.thursday,
        friday: this.props.bar.friday,
        saturday: this.props.bar.saturday,
        sunday: this.props.bar.sunday,
        start: this.props.bar.militaryStart,
        end: this.props.bar.militaryEnd,
        verified: this.props.bar.verified,
        id: this.props.bar.id
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
        this.props.editBar(this.state)
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


    verifyBar = () => {
        this.setState({
         ...this.state,
         verified: new Date()
     })
    }


    render(){

        let button;
        if (this.state.verified !== ""){
            button = <button id="verify-button" className="verified" onClick={(e) => this.verifyBar(e)}>RE-VERIFY</button>
        } else { 
            button = <button id="verify-button" className="unverified" onClick={(e) => this.verifyBar(e)}>UNVERIFIED</button>
        }
                
        return (
            <div>
                Update:
                <form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                    <input type="text" placeholder="website" className="form-control" value={this.state.website} name="website" onChange={this.handleChange} />
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
                 
                        <button onClick={() => this.verifyBar()} className="btn btn-warning">Verify</button>
                        <input className="btn btn-primary" type="submit"/>
                 
                    </form>
                <button onClick={() => this.props.handleClose()} className="btn btn-secondary mt-2">Close</button>
            </div>
        )
    }
}



export default connect(null, {editBar})(BarEdit);