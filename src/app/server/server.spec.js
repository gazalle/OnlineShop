import {addNewTask, updateNewTask} from './server'

(async function myFunc(){
    await addNewTask({
        name:"New Taskkk",
        id:"1298"
    });
    await updateNewTask({
        id:"1298",
        name:"New Taskkk UPDATED"      
    });
})();
