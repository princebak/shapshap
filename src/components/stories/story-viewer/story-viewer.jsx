"use client";

import Modal from "@mui/material/Modal";
import Stories from "react-insta-stories"; 
// STYLED COMPONENTS

import { ModalWrapper } from "./styles";

// ==============================================================
export default function StoryViewer({
  open,
  handleClose,
  stories,
  currentIndex
}) {
  return <Modal open={open} onClose={handleClose}>
      <ModalWrapper>
        <Stories stories={stories} currentIndex={currentIndex} onAllStoriesEnd={handleClose} progressStyles={{
        height: 3,
        borderRadius: 10
      }} progressWrapperStyles={{
        height: 3,
        borderRadius: 10,
        background: "#373F50"
      }} />
      </ModalWrapper>
    </Modal>;
}