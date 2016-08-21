import React, { PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { browserHistory } from 'react-router';

export class BookMarkList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contractors: this.props.contractors
    };
  }

  handleRemoveBookmark(id, index) {
    const { contractors } = this.state;
    if (confirm("Are you sure you wan't to remove this bookmark?")) {
      this.setState({
        contractors: [
          ...contractors.slice(0, index),
          ...contractors.slice(index + 1)
        ]
      });
      Meteor.call('removeContractorToBookmark', id, (err) => {
        if (err) {
          console.log(err.reason);
        } else {
          console.log('Successfully removed bookmark');
        }
      });
    }
  }
  render() {
    const { contractors } = this.state;
    if (contractors.length === 0) {
      return <h3 style={{ textAlign: 'center' }}>No bookmark yet!</h3>;
    }
    return (
      <div>
        <h2 style={{ textAlign: 'center' }}>My Bookmarked</h2>
        <div className="ui link items divided">
          {contractors.map((contractor, i) => (
            <div className="item" key={i}>
              <div className="ui tiny image">
                <img src="http://semantic-ui.com/images/wireframe/image.png" alt={contractor.name} />
              </div>
              <div
                className="content"
                onClick={() => browserHistory.push(`/contractors/profile/${contractor.name}`)}
              >
                <div className="header">{contractor.name}</div>
                <div className="meta">
                  <span>$1200</span>
                  <span>1 Month</span>
                </div>
                <div className="description">
                  <p></p>
                </div>
              </div>
              <div className="extra">
                <div
                  onClick={() => this.handleRemoveBookmark(contractor._id, i)}
                  className="circular ui right floated vertical animated button red inverted"
                >
                  <div className="visible content">
                    <i className="trash outline icon" />
                  </div>
                  <div className="hidden content">
                    <i className="trash icon" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

BookMarkList.propTypes = {
  contractors: PropTypes.array
};
