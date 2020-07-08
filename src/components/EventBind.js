import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:'Hello'
        }
         {/*Third approach better approach*/}
        //this.msgHandler = this.msgHandler.bind(this)
    }

    // Fourth Approach class property with arrow function. Also better 
    msgHandler =()=>{
        this.setState({
             message:'Hi you just clicked'
         })
    }
    
    // msgHandler(){
    //     this.setState({
    //         message:'Hi you just clicked'
    //     })
    // }
    
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
             {/*First approach performance implication. Fails in large application and nested application */}
             {/* <button onClick={this.msgHandler.bind(this)}>Click</button>  */}
             {/*Second approach fail in nested application */}
             {/* <button onClick={()=> this.msgHandler()}>Click Me</button> //function with parenthisis */}
                <button onClick={this.msgHandler}>Click Me</button>
            </div>
        )
    }
}

export default EventBind
