import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class NewMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel} Add Movie</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Add New Movie Here</ModalHeader>
          <ModalBody>
              <label for="title">Title</label>
              <input type="text" placeholder="Title... " name="title" onChange={event =>{ this.setState({ title: event.target.value})}}></input><br />
              <label for="title">Image</label>
              <input type="text" placeholder="Image Link..." name="img" onChange={event =>{ this.setState({ img: event.target.value})}}></input><br />
              <label for="title">Rating</label>
              <input type="Number" placeholder="rating " name="rate" min="1" max="5" onChange={event =>{ this.setState({ rate: event.target.value
              })}}></input><br />

          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.props.addMovie(this.state)}>AddMovie</Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default NewMovie;