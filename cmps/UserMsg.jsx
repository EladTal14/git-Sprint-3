import {eventBusService} from '../services/eventBusService.js'

export class UserMsg extends React.Component {
  state = {
    msg: '',
    isShown: false
  }

  componentDidMount() {
    this.unsubscribe = eventBusService.on('showMsg', (msg) => {
      this.setState({ msg, isShown: true }, () => setTimeout(
        () => { this.setState({ isShown: false }) }
        , 3000))
    });
  }
  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { msg, isShown } = this.state
    return (
      <section>
        {isShown && <div className="user-msg">
          {msg}
          <button onClick={() => { this.setState({ isShown: false }) }} className="new-btn">X</button>
        </div>}
      </section>
    )
  }
}
