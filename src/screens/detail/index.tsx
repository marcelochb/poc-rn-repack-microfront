import React from 'react';
import { LoanDetailTemplate } from '../../../packages/templates/src/loan/detail/view';
import { useLoanDetailController } from '../../../packages/core/src/modules/loan/presenter/detail/controller';
import { useRoute } from '@react-navigation/native';
import { ILoanDetailNavigationRoute } from './interfaces';
import { ThemeBase } from '../../../packages/theme';
import { useSelector } from 'react-redux';
import { IGlobalState } from '../../../packages/interfaces';

export const LoanDetailScreen = () => {
  const route = useRoute<ILoanDetailNavigationRoute>();
  const theme = useSelector((state:IGlobalState) => state.theme.value)
  
  const {loading,error,data} = useLoanDetailController(route?.params?.data);
  return (
    <LoanDetailTemplate 
      theme={theme}
      loading={loading}
      error={error}
      data={data}
    />
  );
};
