import { makeVar } from '@apollo/client';

export const userSettingsVar = makeVar({
  username: 'Max',
  orgsLoaded: 0,
});
