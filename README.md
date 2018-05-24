# RealTime Chat Application

## Overview:
This is a chat application that allows multiple users to communicate in real time,
in a chat room style forum. Users may come in, choose their username, and begin
exchanging messages across the message board.

## Technologies:
This is a NodeJS application which utilizes express, and socket.io modules for
the server layer. The socket.io module provides server-side, and client-side
components with similar APIs. In particular, it allows event handling functionality
to not only the server, but also the client. This allows clients to listen for, and
handle events that are emitted from the server itself. This allows the chat room
to be updated in real time, as a new message is posted to the forum as the server
sends an event to each of it's clients when a new message has been created and saved
in the database. The database is handled using the mongoose module, and MongoDB.
