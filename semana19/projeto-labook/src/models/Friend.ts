export type MakeFriend = {
  reqFriend_id: string;
  resFriend_id: string;
};

export type UndoFriend = {
  reqFriend_id: string;
  resFriend_id: string;
};

export type FriendDTO = {
  resFriend_id: string;
  token: string;
};

export type UnfriendDTO = {
  resFriend_id: string;
  token: string;
};
