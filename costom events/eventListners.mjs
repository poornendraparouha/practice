import { UserEvents } from "./userEvents.mjs";

const userEvents = new UserEvents();

function saveTODataBase(){
    console.log('post is saved to database');
}
function sendNotification(){
    console.log('notification is sent');
}
function usdateTimeLine(){
    console.log('timeline is updated');
}

userEvents.addListener("postCreated", saveTODataBase);
userEvents.addListener("postCreated", sendNotification);
userEvents.addListener("postCreated", usdateTimeLine);

userEvents.createPost("this is my first post");
