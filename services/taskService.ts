import api from "./config/api"


export const getAllTask = async ()=>{
    const res = await api.get("/task")
    return res.data
}

export const addTask = async (task:any)=>{
   const res =await api.post("/task", task)
   return res.data
}