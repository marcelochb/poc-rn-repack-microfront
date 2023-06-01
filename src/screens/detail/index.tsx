import React from 'react';
import { ThemeBase } from '../../../packages/theme/src/themes';
import { LoanDetailTemplate } from '../../../packages/templates/src/loan/detail/view';
import { useLoanDetailController } from '../../../packages/core/src/modules/loan/presenter/detail/controller';
import { IGlobalState } from '@poc/interfaces';

export const LoanDetailScreen = () => {
  const {loading,error,data} = useLoanDetailController();
  return (
    <LoanDetailTemplate 
      theme={ThemeBase.Midway}
      loading={loading}
      error={error}
      data={data}
    />
  );
};
