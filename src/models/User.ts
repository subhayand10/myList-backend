import { Schema, model, Document } from "mongoose";

interface IUser extends Document {
  id: string;
  username: string;
  preferences: {
    favoriteGenres: string[];
    dislikedGenres: string[];
  };
  watchHistory: Array<{
    contentId: string;
    watchedOn: Date;
    rating?: number;
  }>;
  myList: string[]; 
}

const userSchema = new Schema<IUser>({
  id: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  preferences: {
    favoriteGenres: { type: [String], required: true },
    dislikedGenres: { type: [String], required: true },
  },
  watchHistory: [
    {
      contentId: { type: String, required: true },
      watchedOn: { type: Date, required: true },
      rating: { type: Number },
    },
  ],
  myList: [{ type: String }],
});

const User = model<IUser>("User", userSchema);
export default User;
