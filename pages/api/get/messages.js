import { NextApiRequest, NextApiResponse } from "next"
/**
 * 
 * @param {NextApiRequest} req 
 * @param {NextApiResponse} res 
 */
async function handler(req, res) {
  res.json({ message: 'Hello Everyone!' })
}