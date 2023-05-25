import React, { useCallback } from 'react'
import { LoanCreateTemplate } from '@poc/templates'
import { ThemeBase } from '@poc/theme'
import { useLoanCreateController } from '@poc/core'
import { useNavigation } from '@react-navigation/native'
import { IGlobalState } from '@poc/interfaces'

export const LoanCreateScreen = () => {
  const navigation = useNavigation();
  const {data,error,loading,onChange,onSubmit} = useLoanCreateController(navigation.goBack);
  return (
    <LoanCreateTemplate
      error={error}
      theme={ThemeBase.Midway}
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
      onCancel={navigation.goBack}
      isLoading={loading}
    />
  )
}
