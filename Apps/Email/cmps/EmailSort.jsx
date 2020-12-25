import { emailService } from '../services/emailService.js'
export class EmailSort extends React.Component {
  state = {
    sortBy: {
      sort: 'date ↑'
    },

  }
  ComponentDidMount() {
    this.setState({ sortBy: { sort } })
  }
  handleChange = (ev) => {
    const callback = () => {
      this.props.setSort(this.state.sortBy, () => emailService.sortBy(sortBy.sort));

    };
    const sortBy = { ...this.state.sortBy }
    sortBy[ev.target.name] = ev.target.value

    this.setState({ sortBy }, callback);
  };

  render() {

    return (
      <section className="sortBy">
        <label htmlFor="" >
<<<<<<< HEAD
          <span>Sort By: </span>
          <select name="sort" id="" value={this.state.sortBy.sort} onChange={this.handleChange}>
            <option value="date ↑">Date ↑</option>
            <option value="date ↓">Date ↓</option>
            <option value="title ↑">Title ↑</option>
            <option value="title ↓">Title ↓</option>
=======
          <select name="option" id="" value={this.state.sortBy.option} onChange={this.handleChange} className="sortBy-option">
            <option value="dateUp">Date ↑</option>
            <option value="dateDown">Date ↓</option>
            <option value="titleUp">Title ↑</option>
            <option value="titleDown">Title ↓</option>
>>>>>>> 22a0d5306a6f31119956d59545f74223db4e1518
          </select>
        </label>
      </section>
    )
  }
}