export const ACTIVE_INDEX = 'ACTIVE_INDEX';


export const activeIndex = (index)=>{
    return {
        type:ACTIVE_INDEX,
        index
    }
}