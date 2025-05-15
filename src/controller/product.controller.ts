import { Router, Request, Response } from "express";
import { Product } from "../model/product";

const productList: Array<Product> = [
    {
        id: 1,
        name: "Brombeere",
        price: 2.49
    },
    {
        id: 2,
        name: "Apfel",
        price: 0.99
    }
];

const getAll = (req: Request, res: Response) => {
    res.status(200).send(productList);
};

export default {getAll};