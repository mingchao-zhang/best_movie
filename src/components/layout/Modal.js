import React, { Component } from 'react';
import './Modal.scss'

class Modal extends Component {
    hide_modal() {
        var modal = document.getElementsByClassName("modal")[0];
        modal.style.display = "none";
    }
    
    modal_click_outside(evt) {
        var modal = document.getElementsByClassName("modal")[0];
        if (evt.target === modal) {
            modal.style.display = "none";
        }
    }

    render() {
    return (
        <div className="modal" onClick={this.modal_click_outside}>
            <div className="modal_box">
                <div className="modal_header">
                    <div className="arrow" id="arrow_left" onClick={this.props.modalArrowLeftClick.bind(this)}>
                        <i className="fas fa-arrow-left" id="_arrow_left"></i>
                    </div>
                    <div className="modal_button" onClick={this.hide_modal}>
                        <i className="fas fa-window-close"></i>
                    </div>
                    <div className="arrow" id="arrow_right" onClick={this.props.modalArrowRightClick.bind(this)}>
                        <i className="fas fa-arrow-right"></i>
                    </div>
                </div>
                <div className="modal_content">
                    <div className="modal_image_container" >
                        <img src="" alt="" id="_modal_image"/>
                    </div>

                    <div className="modal_text">
                        <div className="modal_title" id="_modal_title">
                        </div>
                        <div className="modal_rank" id="_modal_rank">
                        </div>
                        <div className="modal_description" id="_modal_description">
                        </div>
                    </div> 
                </div>
                <div className="flexDummy"></div>
            </div>
        </div>
    )
    }
}

export default Modal;
