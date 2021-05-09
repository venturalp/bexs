export const removeCardMask = (value = '') => value.replace(/\*| |/gim, '')
export const removeDateMask = (value = '') => value.replace(/\_| |\/|/gim, '')
export const removeNumberMask = (value = '') => value.replace(/\_| |/gim, '')
