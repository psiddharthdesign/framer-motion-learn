import React, { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { motion, AnimatePresence, Reorder } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, transition: { type: "spring" } },
  visible: (custom) => ({
    opacity: 1,
    transition: { delay: custom }
  })
};

function List({ items, removeItem, reOrderList }) {
  return (
    <>
      <Reorder.Group
        axis="y"
        values={items}
        onReorder={reOrderList}
        className="ul-portal"
        style={{ display: "flex", flexDirection: "column", flex: 2 }}
      >
        <AnimatePresence mode={"popLayout"}>
          {items.map((item, index) => (
            <Reorder.Item
              value={item}
              className="list-row"
              key={item.id}
              layoutId={item.id}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              custom={(index + 1) * 0.2}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1.1 }}
            >
              <div>{item.text}</div>
              <div className="icons">
                <RiCloseCircleLine
                  onClick={() => removeItem(item.id)}
                  className="delete-icon"
                />
              </div>
            </Reorder.Item>
          ))}
        </AnimatePresence>
      </Reorder.Group>
    </>
  );
}

export default List;
