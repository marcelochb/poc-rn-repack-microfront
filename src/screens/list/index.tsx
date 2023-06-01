import React, { useCallback } from 'react'
import { LoanListTemplate } from '../../../packages/templates/src/loan/list/view'
import { LoanEntity } from '../../../packages/core/src/modules/loan/domain/entities/'
import { useLoanListController } from '../../../packages/core/src/modules/loan/presenter/list/controller'
import { useNavigation } from '@react-navigation/native'
import { NAVIGATOR_CONSTANTS } from '../../constants'
import { ThemeBase } from '../../../packages/theme/src/themes'
import { IRepackComponent } from '../../../packages/interfaces';

export const LoanListScreen: React.FC<IRepackComponent> = ({theme=ThemeBase.Midway, callBack}) => {
  const navigation = useNavigation<any>();
  const navigateToDetail = useCallback(
      (item:LoanEntity) => {
      navigation.navigate(NAVIGATOR_CONSTANTS.DETAIL_SCREEN_NAME, {id: item.id});
    },[]
  )
  const navigateToCreate = useCallback(
      () => {
      if (callBack != null) callBack?.call(this);
      else navigation.navigate(NAVIGATOR_CONSTANTS.CREATE_SCREEN_NAME);
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