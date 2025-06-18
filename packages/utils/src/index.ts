import { isEmpty } from 'lodash-es'


export function isEmptyObj(obj: object) {
  return isEmpty(obj)
}