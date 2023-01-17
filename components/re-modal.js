import React from 'react';
import './re-modal.scss';
import PropTypes from "prop-types";

/**
 * Component definition
 */

/**
 @function

 @param {Object} props - The properties of the Re modal component
 @param {ReactNode} props.children - The content to be rendered within the modal body
 @param {string|ReactNode} props.title - The title of the modal. Can be a string or a ReactNode.
 @param {boolean} props.state - The state of the modal, whether it is opened or closed
 @param {Function} props.closeHandler - The function to handle the closing of the modal
 @returns {ReactNode} - Returns a modal component with a header containing the provided title (if provided), and a body containing the provided children
 */
const ReModal = ({children, title, state, closeHandler}) => {
    let headerContent = null;

    /**
     @function
     @param {string|ReactNode} content - The content to be formatted as a header. Can be a string or a ReactNode.
     @returns {JSX.Element} - Returns a formatted header, either a string wrapped in a paragraph element or the original ReactNode.
     */
    const formatHeaderContent = (content) => {
        if (typeof content === 'string') {
            return <p>{content}</p>
        } else {
            return content;
        }
    }

    if (title) {
        headerContent = formatHeaderContent(title);
    }

    return (
        <div className={`re-modal${state ? ' --opened' : ''}`} >
            <div className="re-modal__overlay"></div>
            <div className="re-modal__wrapper">
                <button className="re-modal__close" onClick={closeHandler}>
                    X
                </button>
                {
                    title &&
                    <div className={"re-modal__header"}>
                        {headerContent}
                    </div>
                }
                <div className="re-modal__body">
                    {children}
                </div>
            </div>
        </div>
    );
};

/**
 * Set props types
 */

ReModal.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    state: PropTypes.bool.isRequired,
    closeHandler: PropTypes.func.isRequired
}

/**
 * Init and export
 */
export default ReModal;
