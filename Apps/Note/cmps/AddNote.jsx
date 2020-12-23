
export class AddNote extends React.Component {

  state = {
    note: '',
    inputProps: {
      inputValue: '',
      inputName: '',
      inputPlaceholder: 'What\'s on your mind...'
    }
  }

  onSaveNote = () =>{
    console.log(this.state.note);
  }

  render() {
    const { inputValue, inputName, inputPlaceholder } = this.state.inputProps
    return (
    //   <form onSubmit={this.onSaveNote}>

    //     <input value={this.state.pet.name} ref={this.refInput}
    //       placeholder="Name" type="text" name="name"
    //       onChange={this.onInputChange} />

    //     <button>A</button>
    //     <button type="submit">Add</button>
    //   </form>
    // )
    <h1>add </h1>)
  }
}
