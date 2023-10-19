import { useEffect } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';


// компонент для тестирования ErrorBoundary
export const BugButton = () => {
  const [error, setError] = useState(false);
  const {t} = useTranslation('common')

  const onThrow = () => {
    setError(true);
  }

  useEffect(() => {
    if (error) {
      throw new Error('I crashed!');
    }
  }, [error]);

  return (
    <Button onClick={onThrow}>
      {t('Сгенерировать ошибку')}
    </Button>
  )
}