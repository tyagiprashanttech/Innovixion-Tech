import { createPool } from 'mysql'
import React from 'react'

const {
  createPool
}=require('mysql');

const pool=createPool({
  host:"localhost",
  user:"root",
  password:"root",
  connectionLimit:10
})


export default Database