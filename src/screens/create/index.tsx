import React, { useCallback } from 'react'
import { LoanCreateTemplate } from '../../../packages/templates/src/loan/create/view'
import { useLoanCreateController } from '../../../packages/core/src/modules/loan/presenter/create/controller'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ILoanCreateNavigationRoute } from './interfaces'
import { ThemeBase } from '../../../packages/theme'

export const LoanCreateScreen = () => {
  const route = useRoute<ILoanCreateNavigationRoute>();
  const navigation = useNavigation<any>();
  const goBack = useCallback(
    () => {
      navigation.goBack();
    },[]
  )
  const {data,error,loading,onChange,onSubmit} = useLoanCreateController(goBack);
  return (
    <LoanCreateTemplate
      error={error}
      theme={route?.params?.theme ?? ThemeBase.Midway}
      nameLabel='Nome'
      nameValue={data.name}
      nameChangeText={onChange('name')}
      typeLabel='Tipo'
      typeValue={data.type}
      typeChangeText={onChange('type')}
      amountLabel='Valor'
      amountValue={data.amount}
      amountChangeText={onChange('amount')}
      submitButtonLabel='Salvar'
      onSubmit={onSubmit}
      cancelButtonLabel='Agora não'
      onCancel={goBack}
      isLoading={loading}
    />
  )
}
