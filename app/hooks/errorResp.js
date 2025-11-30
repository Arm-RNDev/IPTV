import Toast from 'react-native-toast-message';

export function errorResp(response) {
  const user = response?.user_info;

  if (user?.auth === 0) {
    Toast.show({
      type: 'error',
      text1: 'Access denied',
    });
    return { success: true, ...response };
  }

  if (user?.status === 'Expired') {
    Toast.show({
      type: 'error',
      text1: 'Your subscription has expired',
    });

    return { success: false };
  }

  if (user?.active_cons >= user?.max_connections) {
    Toast.show({
      type: 'error',
      text1: 'Too many connections. Disconnect another device.',
    });

    return { success: false };
  }

  return {
    success: true,
    ...response,
  };
}
