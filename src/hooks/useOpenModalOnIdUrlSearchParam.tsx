import { useEffect } from 'react';
import { getUrlSearchQuery } from 'utils/getUrlSearchQuery';

export const useOpenModalOnIdUrlSearchParam = (setIsModalOpen: (isOpen: boolean) => void) => {
  useEffect(() => {
    const [id] = getUrlSearchQuery(['id']);

    if (id) {
      setIsModalOpen(true);
    }
  }, [setIsModalOpen]);
};
