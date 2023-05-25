import React from 'react';
import { ThemeBase } from '@poc/theme';
import { LoanDetailTemplate } from '@poc/templates';
import { useLoanDetailController } from '@poc/core';
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
