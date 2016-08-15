import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import {
  Button,
  Content,
  Form,
  Field,
  Icon,
  Header,
  Modal,
}
  from 'semantic-react';
import { InputRating } from './form-elements/InputRating';
import { ReviewText } from './form-elements/ReviewText';

export class Review extends Component {
  constructor() {
    super();
    this.state = {
      active: false,
    };
  }

  handleOpen() {
    this.setState({
      active: true,
    });
  }

  handleClose() {
    this.setState({
      active: false,
    });
  }

  handleSubmit() {
    const rating = this.rating.getValue();
    const text = this.review_text.getValue();
    Meteor.call('createReview', this.props.contractor, {
      rating,
      text,
    });
    this.handleClose();
  }

  render() {
    return (
      <div>
        <Button
          onClick={() => this.handleOpen()}
          inverted
          color="red"
        >
          <Icon name="write square" /> Write a Review
        </Button>
        <Modal onRequestClose={() => this.handleClose()} active={this.state.active}>
          <Icon name="close" onClick={() => this.handleClose()} />
          <Header>New Review</Header>
          <Content>
            <Form>
              <InputRating ref={ref => this.rating = ref} />
              <Field>
                <label>Review text</label>
                <ReviewText ref={ref => this.review_text = ref} />
              </Field>
              <Button onClick={(e) => (e.preventDefault(), this.handleSubmit())}>Create</Button>
            </Form>
          </Content>
        </Modal>
      </div>
    );
  }
}
