import { classNames } from "shared/lib/classNames/classNames";
import { useEffect, useState } from "react";
import { Button } from "shared/ui";

interface BugButtonProps {
  className?: string;
}

/**
 * @componetnt for testing  ErrorBoudary
 * @returns PageError
 */

export const BugButton = ({ className }: BugButtonProps) => {
  const [error, setError] = useState(false);

  const onThrow = () => setError(true);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return <Button onClick={onThrow}>Throw error</Button>;
};
