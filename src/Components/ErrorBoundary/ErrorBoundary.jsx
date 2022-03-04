import React, { Component } from 'react'
import './ErrorBoundary.css'

export default class ErrorBoundary extends Component {
    constructor(props){
        super(props);
        this.state = {
            hasError :  false
        }
    }

    static getDerivedStateFromError(error) {   
        return { hasError: true };  
    }

    componentDidCatch(error,info){
        console.log(error)
    }

    render() {
        if(this.state.hasError){
            return (
                <div className='ErrorImageOverlay'>
                  <div className='ErrorImageContainer'></div>
                  <h2 className='ErrorImageText'>Sorry !! Something is Wrong...</h2>
                </div> 
                );
        }
        return this.props.children
    }
}
