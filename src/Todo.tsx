import React from 'react';

interface TodoProps {
    name: string;

}
interface TodoState {
    done: boolean;
}

class Todo extends React.Component<TodoProps, TodoState> {

    constructor(props: TodoProps) {
        super(props);
        this.state = {
            done: false,
        }
    }
    componentDidMount() {
      console.log("le composant a été monté !")
  }
    // changeDoneState() {
    //     this.setState({ done: true });
    // }

    render() {
        const buttonChange = <button onClick= {(event) => this.setState({ done: true})}>Fait !</button>

        if (this.state.done) {
            return <li style={{ textDecoration: "line-through" }}>{this.props.name}</li>
            {buttonChange}
        } else {
            return <div>
                <li>{this.props.name}</li> 
                {buttonChange}
            </div>
        }
        
    }
}

export default Todo;