export class NoteTxt extends React.Component {
  
  state = {
    color: 'lightgreen',
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
    const {txt} = this.props.info

    return (
      <div className="txt-note note-card" style={{backgroundColor:color}}>
        <h3>{txt}</h3>
      </div>
    )
  }
}
