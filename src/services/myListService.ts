import User from "../models/User";

export const addItemToList = async (userId: string, itemId: string) => {
  const user = await User.findOne({ id: userId });
  if (!user) throw new Error("User not found");
  if (!user.myList.includes(itemId)) {
    user.myList.push(itemId);
    await user.save();
  }
  return user.myList;
};

export const removeItemFromList = async (userId: string, itemId: string) => {
  const user = await User.findOne({ id: userId });
  if (!user) throw new Error("User not found");
  user.myList = user.myList.filter((id) => id !== itemId);
  await user.save();
  return user.myList;
};

export const listMyItems = async (
  userId: string,
  page: number,
  limit: number
) => {
  const user = await User.findOne({ id: userId });
  if (!user) throw new Error("User not found");
  const start = (page - 1) * limit;
  const end = start + limit;
  return user.myList.slice(start, end);
};
