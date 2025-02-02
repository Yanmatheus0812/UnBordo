import { useState } from 'react';

export const useDisclose = (defaultState?: boolean) => {
  const [isOpen, setIsOpen] = useState(defaultState ?? false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);
  const onToggle = () => setIsOpen(!isOpen);

  return {
    isOpen,
    onOpen,
    onClose,
    onToggle,
  };
};
