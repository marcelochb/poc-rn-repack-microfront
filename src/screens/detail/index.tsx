import React from 'react';
import { ThemeBase } from '../../../packages/theme/src/themes';
import { LoanDetailTemplate } from '../../../packages/templates/src/loan/detail/view';
import { useLoanDetailController } from '../../../packages/core/src/modules/loan/presenter/detail/controller';
import { IRepackComponent } from '../../../packages/interfaces';
import { LoanEntity } from '../../../packages/core';
import { useRoute } from '@react-navigation/native';
import { ILoanDetailNavigationRoute } from './interfaces';

export const LoanDetailScreen: React.FC<IRepackComponent<LoanEntity>> = ({data: repackData, theme = ThemeBase.Midway}) => {
  const {params} = useRoute<ILoanDetailNavigationRoute>()
  const {loading,error,data} = useLoanDetailController(repackData ?? params.data);
  return (
    <LoanDetailTemplate 
      theme={theme}
      loading={loading}
      error={error}
      data={data}
    />
  );
};
