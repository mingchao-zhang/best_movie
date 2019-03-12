import React, { Component } from 'react';
import './Modal.scss'

class Modal extends Component {
    hide_modal() {
        var modal = document.getElementsByClassName("modal")[0];
        modal.style.display = "none";
    }

    render() {
    return (
        <div className="modal">
            <div className="modal_box">
                <div className="modal_header">
                    <div className="arrow" id="arrow_left">
                        <i className="fas fa-arrow-left"></i>
                    </div>
                    <div className="modal_button" onClick={this.hide_modal}>
                        <i className="fas fa-window-close"></i>
                    </div>
                    <div className="arrow" id="arrow_right">
                        <i className="fas fa-arrow-right"></i>
                    </div>
                </div>
                <div className="modal_content">
                    <div className="modal_image_container"></div>
                    <div className="modal_text">
                        <div className="modal_title">
                        </div>
                        <div className="modal_description">
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
    }
}

export default Modal;
