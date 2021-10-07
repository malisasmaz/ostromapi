import { createConnection } from "typeorm";
import Student from "../entity/student";
export const connection = createConnection({
    type: "mongodb",
    url: "mongodb+srv://mongomali:mongomali@cluster0.usaht.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    entities: [
        Student     
    ],
    synchronize: true,
    logging: false
});