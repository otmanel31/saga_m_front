import React from 'react'

import {connect} from 'react-redux'

import {sendReq} from './action'

import {createFragment} from 'react-addons-create-fragment'

class EventPage extends React.Component{
    componentDidMount = () => {
        this.search()
    }

    search = () => {
            // dispatch proprité de react fournit dans this.props
            // this.props contient élement
            const {dispatch} = this.props
            dispatch(sendReq())
    }
    render(){
        // injecte contenu du store 
        const {results} = this.props
        console.log(this.props)
        console.log('my props ',results)
        const types = results[0]
        console.log('mes type',types)
       
        return(
            <div className='menupage'>
                <h2>EventPage</h2>
                <form id='myForm' encType='multipart/form-data'>
                    <label>List events</label>
                    <p>{types}</p>
                    <select>
                       {/* {results.map((o)=>{
                            o.type.map((type) => {
                                <option>{type}</option>
                            })
                        })}*/}
                    </select>
                </form>
            </div>
        )
    }
}

export default connect(
    state => ({
        results: state.result,
    })
)(EventPage)