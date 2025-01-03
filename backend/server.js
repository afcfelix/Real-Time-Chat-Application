import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from './routes/userRoutes.js';
import chatRoutes from './routes/chatRoutes.js';
import messageRoutes from './routes/messageRoutes.js'
import { notFound, errorHandler } from "./middlewares/error.js";
import { Server } from 'socket.io';

dotenv.config()

const app = express();
app.use(express.json()); // to accept json data

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Database Connected");
    })
    .catch((err) => {
        console.log(err);
    });

app.get('/', (req, res) => {
    res.send("Api is running")
})

app.use(`/api/user`, userRoutes);
app.use(`/api/chat`, chatRoutes);
app.use(`/api/message`, messageRoutes);
app.use(notFound);
app.use(errorHandler);



const PORT = process.env.PORT || 4000;

const server = app.listen(PORT, console.log(`Server listening on PORT ${PORT}`));

const io = new Server(server, {
    pingTimeout: 60000,
    cors: {
        origin: "http://localhost:3000",
    }
})

io.on("connection", (socket) => {
    //console.log("connected to socket.io");

    socket.on("setup", (userData) => {
        socket.join(userData._id);
        socket.emit("connnected")
    })

    socket.on("join chat", (room) => {
        socket.join(room);
        console.log(`User joined room : ${room}`)
    })

    socket.on("new message", (newMessageRecieved) => {
        var chat = newMessageRecieved.chat;

        if (!chat.users) return console.log("chat.users not defined");

        chat.users.forEach(user => {
            if (user._id == newMessageRecieved.sender._id) return;

            socket.in(user._id).emit("message recieved", newMessageRecieved)
        })
    })

    socket.on("typing", (room) => socket.in(room).emit("typing"));
    socket.on("stop typing", (room) => socket.in(room).emit("stop typing"));

    socket.off("setup", () => {
        console.log("User Disconnected");
        socket.leave(userData._id);
    })
})