// Components==============
import { motion } from "framer-motion";
import { useHover } from "hooks-lib";
import styled from "styled-components";
import useIsDropdown from "./useIsDropdown";
// =========================

const ItemWrapper = styled.li`
  margin-left: ${({ theme: { spacing }, itemSpacing }) => spacing[itemSpacing]};
  cursor: pointer;
  position: ${({ isDropdown }) => !isDropdown && "relative"};
`;

const Bar = styled(motion.div)`
  position: absolute;
  bottom: ${({ isDropdown }) => (isDropdown ? "-1px" : "-1.3em")};
  left: -10%;
  width: 120%;
  height: 3px;
  background: ${({ theme: { primary } }) => primary[3]};
  z-index: 150;
  pointer-events: none;
`;

export default function Item({ children, hoverEffect, itemSpacing }) {
  const [hover, watch, setHover] = useHover();
  const [ref, isDropdown] = useIsDropdown();

  return (
    <ItemWrapper
      {...watch}
      ref={ref}
      isDropdown={isDropdown}
      itemSpacing={itemSpacing}
      onClick={(e) => {
        const className = e.target.className;
        const blackList = [
          "DropdownMenu__Wrapper",
          "SubMenu__Wrapper",
          "Mixins__Container",
          "DropdownButton__Wrapper",
          "hoverPointer",
          "DropdownMenu__MenuWrapper",
        ];
        if (blackList.find((cl) => className.includes(cl))) return;
        setHover(false);
      }}
    >
      {hoverEffect === "bar" && (
        <Bar
          animate={hover ? { scale: 1 } : { scale: 0 }}
          initial={{ scale: 0 }}
          isDropdown={isDropdown}
        />
      )}
      {children}
    </ItemWrapper>
  );
}
