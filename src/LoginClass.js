import React, { Component } from 'react';

export default class LoginClass extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            name: '',
            address: '',
            address2: '',
            city: '',
            province: 'not selected',
            postalCode: '',
            buttonSubmitClick: false
        }
        this.province = ["Alberta", "British Columbia",
                         "Manitoba", "New Brunswick",
                         "Newfoundland and Labrador", 
                         "Northwest Territories", "Nova Scotia",
                         "Nunavut","Ontario", "Prince Edward Island",
                         "Quebec", "Saskatchewan", "Yukon"]
    }

    onValueChanged = (event) => {
        this.setState({ ...this.state, [event.target.name]: event.target.value })
    }

    onSubmitForm = (event) => {
        event.preventDefault()
        console.log("Form Submitted : " + JSON.stringify(this.state))
    }

    render() {
        return (
            <>
                <form onSubmit={(e) => this.onSubmitForm(e)} class="border border-primary">
                        <div class="mb-3">
                            <label for="email">Email</label>
                            <input
                                    class="form-control"
                                    id='email'
                                    name='email'
                                    type="text"
                                    onChange={(e) => this.onValueChanged(e)}
                                    placeholder="Enter Email" />
                        </div>
                        <div class="mb-3">
                            <label for="name">Name</label>
                        <input
                                    class="form-control"
                                    id='name'
                                    name='name'
                                    type="text"
                                    onChange={(e) => this.onValueChanged(e)}
                                    placeholder="Full Name" />
                        </div>
                        <div class="mb-3">
                            <label for='address1'>Address</label>
                            <input
                                id='address1'
                                class="form-control"
                                name='address'
                                type="text"
                                onChange={(e) => this.onValueChanged(e)}
                                placeholder="1234 Main St" />
                        </div>
                        <div>
                            <label for='address2'>Address 2</label>
                            <input
                                class="form-control"
                                id='address2'
                                name='address2'
                                type="text"
                                onChange={(e) => this.onValueChanged(e)}
                                placeholder="Apartment, Studio, or Floor" />
                        </div>
                            <label for='city'>City</label>
                            <input
                                class="form-control"
                                id='city'
                                name='city'
                                type="text"
                                onChange={(e) => this.onValueChanged(e)} />
                                <label for='province'>Province</label>
                                <select id='province' class="form-select" name='province' onChange={(e) => this.onValueChanged(e)}>
                                {
                                    this.province.map((province) => (
                                        <option key={province} value={province}>{province}</option>
                                    ))
                                }
                            </select>
                            <label for='postalcode'>Postal Code</label>
                            <input
                                class="form-control"
                                id='postalcode'
                                name='postalCode'
                                type="text"
                                onChange={(e) => this.onValueChanged(e)} />
                            
                            <div class="center">
                            <label>
                                <input type="checkbox" />
                                Agree Terms & Condition?
                            </label>
                            <button class="btn btn-primary" name='btnSubmit' onClick={ () => this.setState({buttonSubmitClick: true}) }> Submit </button>
                            </div>
                </form>
                {this.state.buttonSubmitClick ?<>
                <p>Email : {this.state.email}</p>
                <p>Full Name : {this.state.name}</p>
                <p>Address : {this.state.address}, {this.state.address2}</p>
                <p>City : {this.state.city}</p>
                <p>Province : {this.state.province}</p>
                <p>Postal Code : {this.state.postalCode}</p>
                </>
                : null}
            </>
        )
    }

}