import React from 'react';

import { useTranslation } from 'react-i18next';

export const Page404 = () => {
  const { t } = useTranslation();

  return <h1>{t('404')}</h1>;
};
