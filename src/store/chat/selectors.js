//TODO: разделить поиск чатов и сообщение чатов
export const getIsFetchingChatSelector = state => state.chats.isFetching;
export const getMemberListSelector = state => state.chats.items;
export const getUserChat = state => state.chats.userChat;
