import React from "react";
import AskModal from "../common/AskModal";

const AskRemoveModal = ({ visible, onConfirm, onCancel }) => {
  return (
    <AskModal
      visible={visible}
      onConfirm={onConfirm}
      onCancel={onCancel}
      title="포스트삭제"
      description="포스트를 삭제하시겠습니까?"
      confirmText="삭제"
    ></AskModal>
  );
};

export default AskRemoveModal;
