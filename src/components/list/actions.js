import {TOGGLE_ALL} from '../../action-types'

// 切换所有的todo的选中状态
export const toggleAllAction = checked => ({
    type: TOGGLE_ALL,
    payload: checked
});
