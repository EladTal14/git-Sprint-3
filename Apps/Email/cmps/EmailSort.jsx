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
          <span>Sort By: </span>
          <select name="sort" id="" value={this.state.sortBy.sort} onChange={this.handleChange}>
            <option value="date ↑">Date ↑</option>
            <option value="date ↓">Date ↓</option>
            <option value="title ↑">Title ↑</option>
            <option value="title ↓">Title ↓</option>
          </select>
        </label>
      </section>
    )
  }
}