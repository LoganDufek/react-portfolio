import React from 'react';

function Modal({ currentProject }) {

    const { title, name, github, description } = currentProject;

    return (
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">{title}</h3>

                <p>
                    {description}
                </p>

            </div>
        </div>
    );
}

export default Modal;