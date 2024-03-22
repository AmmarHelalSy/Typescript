type User = {
    id: number;
    name: string;
} | {
    id: number;
    name: string;
}


function getUser(id:number | string) : User {
    if(typeof id == 'number'){
        return {id, name: `User ${id}`};
    }
    else{
        return {id, name: `User ${id}`};
    }
}
