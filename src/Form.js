import React, { Component, Children } from 'react';
import Field from './Field';

export default class Form extends Component {
    constructor(props){
        const {store} = props
        super(props)
        this.state = {
            store: props.store
        }
        Object.keys(store).map(key => {
            this.state[`onField${key}Change`] = (newVal) => {
                this.state.store[key] = newVal
                this.setState({
                    store: this.state.store
                });
            }
        })
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.store !== this.props.store) {
            this.setState({
                store: nextProps.store
            });
        }
    }

    handleSubmit(e){
        e.preventDefault()
        this.props.onSubmit(this.state.store)
        return false
    }
    render() {
        const {children} = this.props
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                {Children.map(children, item => {
                    if (item.type !== Field) {
                        return item
                    }
                    return <Field {...item.props} formState={this.state}/>
                })}
            </form>
        );
    }
}

Form.propTypes = {
    onSubmit: React.PropTypes.func.isRequired,
    store: React.PropTypes.object.isRequired,
}