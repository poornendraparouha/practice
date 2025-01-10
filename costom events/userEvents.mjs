import * as  Events  from 'events';

export class UserEvents extends Events.EventEmitter {
    // constructor() {
    //     super();
    // }
    createPost(content){
        console.log('post is created');
        this.emit("postCreated");
    }
}
