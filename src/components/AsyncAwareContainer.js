import React, { Component } from "react";
import { Spinner, Modal } from 'react-bootstrap';

class AsyncAwareContainer extends Component {
  render() {
    var loading = this.props.loading !== undefined && this.props.loading !== null;
    var message = 'Loading';
    if (typeof this.props.loading === 'string' && this.props.loading.trim().length > 0)
      message = this.props.loading;

    return (
      <div>
        {
          loading ? 
            (
              <Modal show={loading} onHide={()=>{}} >
                <Modal.Body>
                  <Spinner animation="border" variant="primary" />
                  &nbsp;  &nbsp;  &nbsp; {message}
                </Modal.Body>
              </Modal>
            ) :
            React.createElement('div', null, this.props.children)
        }
      </div>
    );
  }
}

export default AsyncAwareContainer;