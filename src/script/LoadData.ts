import mongoose from "mongoose";
import User from "../models/User";

const users = [
  {
    id: "user001",
    username: "john_doe",
    preferences: {
      favoriteGenres: ["Action", "Comedy"],
      dislikedGenres: ["Horror"],
    },
    watchHistory: [
      {
        contentId: "movie001",
        watchedOn: new Date("2023-05-01T00:00:00Z"),
        rating: 4,
      },
      {
        contentId: "tvshow001",
        watchedOn: new Date("2023-05-10T00:00:00Z"),
        rating: 5,
      },
    ],
    myList: ["movie002", "tvshow002"],
  },
  {
    id: "user002",
    username: "jane_smith",
    preferences: {
      favoriteGenres: ["Drama", "Romance"],
      dislikedGenres: ["SciFi"],
    },
    watchHistory: [
      {
        contentId: "movie003",
        watchedOn: new Date("2023-04-15T00:00:00Z"),
      },
      {
        contentId: "tvshow003",
        watchedOn: new Date("2023-05-05T00:00:00Z"),
        rating: 3,
      },
    ],
    myList: ["movie004", "tvshow004"],
  },
  {
    id: "user003",
    username: "alice_wonder",
    preferences: {
      favoriteGenres: ["Fantasy", "Action"],
      dislikedGenres: ["Drama"],
    },
    watchHistory: [
      {
        contentId: "movie005",
        watchedOn: new Date("2023-03-20T00:00:00Z"),
        rating: 5,
      },
      {
        contentId: "tvshow005",
        watchedOn: new Date("2023-04-25T00:00:00Z"),
        rating: 4,
      },
    ],
    myList: ["movie006", "tvshow006"],
  },
  {
    id: "user004",
    username: "bob_builder",
    preferences: {
      favoriteGenres: ["SciFi", "Horror"],
      dislikedGenres: ["Romance"],
    },
    watchHistory: [
      {
        contentId: "movie007",
        watchedOn: new Date("2023-02-10T00:00:00Z"),
        rating: 2,
      },
      {
        contentId: "tvshow007",
        watchedOn: new Date("2023-03-30T00:00:00Z"),
        rating: 3,
      },
    ],
    myList: ["movie008", "tvshow008"],
  },
  {
    id: "user005",
    username: "charlie_chap",
    preferences: {
      favoriteGenres: ["Comedy", "Fantasy"],
      dislikedGenres: ["Action"],
    },
    watchHistory: [
      {
        contentId: "movie009",
        watchedOn: new Date("2023-01-05T00:00:00Z"),
        rating: 5,
      },
      {
        contentId: "tvshow009",
        watchedOn: new Date("2023-02-15T00:00:00Z"),
        rating: 4,
      },
    ],
    myList: ["movie010", "tvshow010"],
  },
];

const loadData = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://subhayansd10:SUBHAYAN2001@cluster0.pg28axs.mongodb.net/myListDB?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Connected to MongoDB myListDB");

    await User.deleteMany({});
    console.log("Cleared existing data");

    await User.insertMany(users);
    console.log("Dummy data loaded successfully");

    await mongoose.connection.close();
    console.log("Connection closed");
  } catch (error) {
    console.error("Error loading data:", error);
    process.exit(1);
  }
};

loadData();
