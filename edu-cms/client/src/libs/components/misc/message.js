import React from 'react'
import PropTypes from 'prop-types'

const Message = ({ msg }) => {
    return (
        <div id="alertClsBtn" class="alert alert-info alert-dismissible fade show" role="alert">
            <strong>{msg}</strong>
            <button
                onClick={() => {
                    document.getElementById("alertClsBtn").remove();
                }}
                type="button" 
                class="btn-close" 
                data-bs-dismiss="alert" 
                aria-label="Close"
            >
            </button>
        </div>
    )
}

Message.propTypes = {
    msg: PropTypes.string.isRequired
}

export default Message
