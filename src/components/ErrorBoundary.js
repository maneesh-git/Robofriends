import React from 'react';

class ErrorBoundary extends React.Component{

    constructor(){
        super();
        this.state = {
            hasError : false
        }
    }

    // This is just like the catch block of try catch in JavaScript
    componentDidCatch(error, info){
        this.setState({ hasError : true})
    }

    render(){
        if(this.state.hasError){
            return <h1>OOPS, something bad happened.That is not good.</h1>
        }
        return this.props.children
    }

}

export default ErrorBoundary;