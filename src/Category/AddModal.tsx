import * as React from 'react';
// import { connect } from 'react-redux';
// import { addCategory } from '.Store';

type AddModalProps = {
    closeCallback: () => void
}

export default class AddModal extends React.Component<AddModalProps> {
    constructor(props: AddModalProps) {
        super(props);
    }
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         category: ''
    //     }
    //     this.doChange = this.doChange.bind(this);
    //     this.doAction = this.doAction.bind(this);
    // }
    // doChange(e) {
    //     this.setState({
    //         category: e.target.value
    //     });
    // }
    // doAction(e) {
    //     e.preventDefault();
    //     let action = addCategory(this.state.message);
    //     this.props.dispatch(action);
    //     this.setState({
    //         category: ''
    //     });
    // }

    render() {
        return (
            <div>
                <p onClick={this.props.closeCallback}>カテゴリー追加</p>
            </div>
        )
    }
}