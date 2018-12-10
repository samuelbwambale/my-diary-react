import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { fetchAllEntries } from '../../actions/entryActions';
import SingleEntry from './SingleEntry';

export class EntriesList extends Component {
  componentDidMount() {
    const { fetchAllEntries } = this.props;
    fetchAllEntries();
  }

  render() {
    const { entriesPayload } = this.props;
    const entries = entriesPayload;
    return Array.isArray(entries) ? (
      <div>
        {entries.map(entry => (
          <SingleEntry key={entry.id} entry={entry} />
        ))}
      </div>
    ) : (
      <div>You have no entries in your diary. Please add an entry</div>
    );
  }
}

const mapStateToProps = state => ({
  entriesPayload: state.entry.entriesPayload,
});

const matchDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchAllEntries,
    },
    dispatch,
  );

EntriesList.propTypes = {
  fetchAllEntries: PropTypes.func.isRequired,
  entriesPayload: PropTypes.array.isRequired,
};

export default connect(
  mapStateToProps,
  matchDispatchToProps,
)(EntriesList);
