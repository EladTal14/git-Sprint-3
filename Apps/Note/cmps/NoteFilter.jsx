export class NoteFilter extends React.Component {

    state = {
        name: '',
        type: '',
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
            <section className="note-filter-box">
                <input type="text" name="name" className="filter-note-input"
                    value={this.state.name}
                    placeholder="Search notes"
                    autoComplete="off"
                    onChange={this.handelChange} />
                <select value={this.state.value} onChange={this.handelChange} name="type" className="select-note">
                    <option value="">All</option>
                    <option value="NoteText">Text</option>
                    <option value="NoteImg">Image</option>
                    <option value="NoteVideo">Video</option>
                    <option value="NoteTodos">Todos</option>
                </select>
            </section>
        )
    }
}