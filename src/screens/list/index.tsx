import React, { useCallback } from 'react'
import { LoanListTemplate } from '../../../packages/templates/src/loan/list/view'
import { LoanEntity } from '../../../packages/core/src/modules/loan/domain/entities/'
import { useLoanListController } from '../../../packages/core/src/modules/loan/presenter/list/controller'
import { useNavigation, useRoute } from '@react-navigation/native'
import { NAVIGATOR_CONSTANTS } from '../../constants'
import { ThemeBase } from '../../../packages/theme/src/themes'
import { ILoanListNavigationRoute } from './interfaces'
import { Text } from 'react-native'
import { useSelector } from 'react-redux'
import { IGlobalState } from '../../../packages/interfaces'

export const LoanListScreen = () => {
  const theme = useSelector((state:IGlobalState) => state.theme.value)

  const route = useRoute<ILoanListNavigationRoute>();
  const navigation = useNavigation<any>();
  const navigateToDetail = useCallback(
      (item:LoanEntity) => {
        navigation.navigate(NAVIGATOR_CONSTANTS.DETAIL_SCREEN_NAME, {data: item});
    },[]
  )
  const navigateToCreate = useCallback(
      () => {
          navigation.navigate(NAVIGATOR_CONSTANTS.CREATE_SCREEN_NAME);
    },[]
  )
  const {data,error,loading} = useLoanListController();
  return (
    <LoanListTemplate 
      theme={theme} 
      listData={data} 
      error={error}
      loading={loading}
      callBack={navigateToDetail}
      navigateToCreate={navigateToCreate}
      />
  )
}