// const express = require("express");

// import express from "express";
const app = require("express")();

app.get("/", (req, res) => {
  res.send("hello express");
});

app.listen(8080, () => {
  console.log("Server on~");
});
