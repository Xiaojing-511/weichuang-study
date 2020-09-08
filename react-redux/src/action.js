export const add = ()=>{
    console.log("action-add");
    return {
        type: 'COUNT_ADD'
    }
}

export const minus = ()=>{
    console.log("action-minus");

    return {
        type: 'COUNT_MINUS'
    }
}

export const addStr = (str)=>{
    return {
        type: 'ADD_STR',
        str
    }
}