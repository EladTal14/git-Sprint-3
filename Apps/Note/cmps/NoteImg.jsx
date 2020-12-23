
export class NoteImg extends React.Component {
  
  state = {
    color: 'lightpink',
    // txt: ''
  }

  // add get note by id
  // setTxt = () =>{
  //   this.setState({
  //     txt: this.props.info.txt
  //   })
  // }

  render() {
    const {color} = this.state
    const {url, title} = this.props.info

    return (
      <div className="img-note note-card" style={{backgroundColor:color}}>
        <img src={url} alt=""/>
        <h3>{title}</h3>
      </div>
    )
  }
}
