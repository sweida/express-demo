import express from "express";
const router = express.Router();

import { comments } from "../data/person";


const userRouter = router.get("/", function(req, res) {
  res.render("first", {
    comments: comments
  });
});

export default userRouter
