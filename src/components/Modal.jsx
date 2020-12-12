import React from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from "framer-motion";

const backDropVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
}

const modalVariants = {
  hidden: {
    y: '-100vh',
    opacity: 0
  },
  visible: {
    y: '200px',
    opacity: 1,
    transition: {
      delay: 0.5
    }
  }
}

const Modal = (props) => {
  const { showModal } = props;

  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div className="backdrop" variants={backDropVariants} initial="hidden" animate="visible" exit="hidden">
          <motion.div className="modal" variants={modalVariants}>
            <p>Want to make another pizza?</p>

            <Link to="/">
              <button>Sure!</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
};

export default Modal;
