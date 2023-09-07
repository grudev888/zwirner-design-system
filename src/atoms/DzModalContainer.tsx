import React, {
  MouseEventHandler,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Close } from '../svgIcons';

interface DzModalContainerProps {
  children: ReactNode;
  isOpen: boolean;
  onClose?: () => void;
}

const styles: any = {
  container: `
    bg-neutral-100
    fixed
    z-[999]
    w-screen
    h-screen
    top-0
    left-0
    px-[1.25rem]
    flex
    items-center
    justify-center
  `,
  closeIcon: `
    absolute
    right-[1.25rem]
    top-[1.25rem]
    cursor-pointer
  `,
  contentContainer: `
    relative
  `,
};

export const DzModalContainer = ({
  children,
  isOpen,
  onClose,
}: DzModalContainerProps) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);
  const containerRef = useRef<HTMLDivElement>(null);
  const onClickClose = () => {
    setIsModalOpen(false);
    onClose?.();
  };
  const onClickContainer = event => {
    if (event.target === containerRef.current) {
      onClickClose();
    }
  };

  useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);

  return isModalOpen ? (
    <div
      className={styles.container}
      onClick={onClickContainer}
      ref={containerRef}
    >
      <div className={styles.contentContainer}>
        <Close onClick={onClickClose} className={styles.closeIcon} />
        {children}
      </div>
    </div>
  ) : null;
};

export default DzModalContainer;
