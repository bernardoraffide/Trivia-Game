import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../pages/GamePage.css';
import parse from 'html-react-parser';

class QuestionCard extends Component {
  render() {
    const { questions, controller } = this.props;
    console.log(controller);
    const { category, question } = questions[controller];
    return (
      <section className="question-section">
        <div data-testid="question-category" className="question-category">
          { category }
        </div>
        <div data-testid="question-text" className="question-text">
          { parse(question) }
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  questions: state.questionsReducer.questions,
});

QuestionCard.propTypes = {
  questions: PropTypes.shape({
    category: PropTypes.string,
    question: PropTypes.string,
  }),
  controller: PropTypes.number,
}.isRequired;

export default connect(mapStateToProps)(QuestionCard);
