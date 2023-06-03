import React, { useCallback } from 'react'
import { LoanCreateTemplate } from '../../../packages/templates/src/loan/create/view'
import { ThemeBase } from '../../../packages/theme/src/themes'
import { useLoanCreateController } from '../../../packages/core/src/modules/loan/presenter/create/controller'
import { IRepackComponent } from '../../../packages/interfaces'
import { useNavigation } from '@react-navigation/native'

export const LoanCreateScreen: React.FC<IRepackComponent> = ({theme = ThemeBase.Midway, callBack}) => {
  const navigation = useNavigation<any>();
  const goBack = useCallback(
    () => {
      if (callBack) callBack();
      else navigation.goBack();
    },[]
  )
  const {data,error,loading,onChange,onSubmit} = useLoanCreateController(callBack);
  return (
    <LoanCreateTemplate
      error={error}
      theme={theme}
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
