import React from 'react';
import { LoanDetailTemplate } from '../../../packages/templates/src/loan/detail/view';
import { useLoanDetailController } from '../../../packages/core/src/modules/loan/presenter/detail/controller';
import { useRoute } from '@react-navigation/native';
import { ILoanDetailNavigationRoute } from './interfaces';
import { ThemeBase } from '../../../packages/theme';

export const LoanDetailScreen = () => {
  const route = useRoute<ILoanDetailNavigationRoute>();
  
  const {loading,error,data} = useLoanDetailController(route?.params?.data);
  return (
    <LoanDetailTemplate 
      theme={route?.params?.theme ?? ThemeBase.Midway}
      loading={loading}
      error={error}
      data={data}
    />
  );
};
