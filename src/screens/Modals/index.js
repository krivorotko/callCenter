import React from 'react';
import {modalTypes} from './modalTypes';
import ShiftChangeModal from "./components/ShiftChangeModal";

// Utils

// Match modal type with specific component.
const MODALS_MAP = {
    [modalTypes.SHIFT_CHANGE]: ShiftChangeModal
};

// Utils end.

const getActiveModal = ({modalType, modalProps}) => {
    const ModalComponent = MODALS_MAP[modalType];
    if (!ModalComponent) {
        throw new Error('Unsupported modal type');
    }
    return <ModalComponent {...modalProps} modalType={modalType}/>;
};

const ModalsContainer = ({route}) => {
    // To be explicit
    const modalParams = route.params;

    return getActiveModal(modalParams);
};

export default ModalsContainer;
