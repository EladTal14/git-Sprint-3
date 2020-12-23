export class NoteVideo extends React.Component {

  state = {
    color: 'lightyellow',
    // txt: ''
  }

  // add get note by id
  // setTxt = () =>{
  //   this.setState({
  //     txt: this.props.info.txt
  //   })
  // }

  render() {
    const { color } = this.state
    const { url, title} = this.props.info

    return (
      <div className="video-note note-card" style={{ backgroundColor: color }}>
        <iframe width="260" height="230"
          src={ url }>
        </iframe>
        <h3>{title}</h3>
      </div>
    )
  }
}
