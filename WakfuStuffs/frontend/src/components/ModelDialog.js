import React, {Component, Fragment} from 'react';
import './ModalDialog.css';

class ModelDialog extends Component{
    constructor(props){
        super(props)
        this.state = ({focusableElementsArray: [
          '[href]',
          'button:not([disabled])',
          'input:not([disabled])',
          'select:not([disabled])',
          'textarea:not([disabled])',
          '[tabindex]:not([tabindex="-1"])',
        ]})
    }
    open = (dialog) =>{
        const focusableElements = dialog.querySelectorAll(this.state.focusableElementsArray);
        const firstFocusableElement = focusableElements[0];
        dialog.setAttribute('aria-hidden', false)

        if (!firstFocusableElement) {
            return;
        }

        window.setTimeout(() => {
            firstFocusableElement.focus();
        }, 100);
    }

    close = (dialog, trigger) =>{
        dialog.setAttribute('aria-hidden', true)
        trigger.focus()
    }

    componentDidMount() {
        const keyCodes = {
            enter: 13,
            escape: 27,
        };
        const triggers = document.querySelectorAll('[aria-haspopup="dialog"]')

        triggers.forEach((trigger) =>{
            const dialog = document.getElementById(trigger.getAttribute('aria-controls'))
            const dismissTriggers = dialog.querySelectorAll('[data-dismiss="dialog"]')

            //open dialog
            trigger.addEventListener('click', (event) =>{
                event.preventDefault()
                this.open(dialog)
            })

            //close dialog
            dismissTriggers.forEach((dismissTrigger) =>{
                const dismissDialog = document.getElementById(dismissTrigger.dataset.dismiss)
                dismissTrigger.addEventListener('click', (event) =>{
                    event.preventDefault()
                    this.close(dismissDialog, trigger)
                })

                dismissTrigger.addEventListener('keydown', (event) =>{
                    if(event.which === keyCodes.escape){
                        event.preventDefault()
                        this.close(dialog, trigger)
                    }
                })
            })

            window.addEventListener('click', (event) =>{
                if(event.target === dialog){
                    this.close(dialog, trigger)
                }
            })
        })

    }

    render() {
        return(
            <Fragment>
            <div
                id="dialog"
                role="dialog"
                aria-labelledby="dialog-title"
                aria-describedby="dialog-desc"
                aria-modal="true"
                aria-hidden="true"
                tabIndex="-1"
                className="c-dialog"
            >
                <div role="document" className="c-dialog__box">
                    <button
                      type="button"
                      aria-label="Fermer"
                      title="Fermer cette fenêtre modale"
                      data-dismiss="dialog">X
                    </button><br/>
                    {this.props.children}
                </div>
            </div>
            </Fragment>
        )
    }
}

export default ModelDialog