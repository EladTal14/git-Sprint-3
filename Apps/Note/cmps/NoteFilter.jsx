export class NoteFilter extends React.Component {

    state = {
        name: '',
    }

    handelChange = ({ target }) => {
        this.setState({ [target.name]: target.value }, () => { this.props.onSetFilter(this.state) })
        // const callback = () => {
        //     this.props.onSetFilter(this.state);
        // };
        // const value = ev.target.type === 'number' ? +ev.target.value : ev.target.value;
        // const field = ev.target.name;
        // this.setState({ [field]: value }, callback)

    }

    render() {
        return (
            <section className="note-filter">
                <input type="text" name="name"
                    value={this.state.name}
                    placeholder="Search note"
                    onChange={this.handelChange} />
            </section>
        )
    }
}