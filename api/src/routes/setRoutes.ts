import Router from "express";
import { createUserSet, deleteUserSet, getSet, getSets, getUserSets } from "../controllers/sets";

export const setRoutes = Router()

setRoutes.get('/', getSets)
setRoutes.get('/:id', getSet)
setRoutes.get('/usersets/:user', getUserSets)
setRoutes.post('/usersets', createUserSet)
setRoutes.delete('/usersets/:id', deleteUserSet)