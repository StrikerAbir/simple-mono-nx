// libs/shared-ui/src/lib/buttons/PrimaryButton.tsx
import React from 'react';

type PrimaryButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  onClick,
  children,
}) => (
  <button
    onClick={onClick}
    className="bg-blue-500 text-white px-4 py-2 rounded"
  >
    {children}
  </button>
);
