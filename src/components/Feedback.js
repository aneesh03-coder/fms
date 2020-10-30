    import React from 'react';
    import "../components/Feedback.css";
import FeedbackSubmissionForm from "../components/FeedbackSubmissionForm";

function Feedback() {
    return (
        <div className="feedback__management__system">
            <div className="feedback__header">
                <h1>Feedback Management System</h1>
                <h3>Please Rate your course</h3>
            </div>
            <div className="feedback__submission_form">
                <FeedbackSubmissionForm />
            </div>
        </div>
    )
}

export default Feedback
