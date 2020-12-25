import { eventBusService } from '../services/eventBusService.js'

export class UserMsg extends React.Component {
  state = {
    msg: '',
    isShown: false
  }

  componentDidMount() {
    this.unsubscribe = eventBusService.on('showMsg', (msg) => {
      this.setState({ msg, isShown: true }, () => setTimeout(
        () => { this.setState({ isShown: false }) }
        , 4000))
    });
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    const { msg, isShown } = this.state
    return (
      <section>
        {isShown && <div className={`user-msg animate__animated animate__bounceIn`}> {msg}</div>}
      </section>
    )
  }
}
