import type { State } from '@/store/entries/auth/types'
import { storePersist } from '@/store/utility/store-persist-utility.module'

const preset: State = storePersist.restoreEntry('auth') || {
  jwt: null,
  status: 'unset',
}

export { preset }
