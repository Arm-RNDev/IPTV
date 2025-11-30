import * as Keychain from 'react-native-keychain';

export async function saveSecureItem(key, value) {
  try {
    await Keychain.setGenericPassword(key, value, {
      accessible: Keychain.ACCESSIBLE.WHEN_UNLOCKED,
      service: key,  
    });
    console.log(`Saved [${key}] securely`);
  } catch (error) {
    console.error(`Error saving [${key}]`, error);
  }
}

export async function getSecureItem(key) {
  try {
    const credentials = await Keychain.getGenericPassword({ service: key });
    if (credentials) {
      return credentials.password;  
    }
    return null;
  } catch (error) {
    console.error(`Error retrieving [${key}]`, error);
    return null;
  }
}

export async function deleteSecureItem(key) {
  try {
    await Keychain.resetGenericPassword({ service: key });
    console.log(`Deleted [${key}]`);
  } catch (error) {
    console.error(`Error deleting [${key}]`, error);
  }
}
