import {Entity, BaseEntity, Column, ObjectID, ObjectIdColumn} from "typeorm";

@Entity()
export class Student extends BaseEntity {
    @ObjectIdColumn()
    id: ObjectID;
    
    @Column()
    firstName: string;

    @Column()
    lastName: string;
    
    @Column()
    dateOfBirth: Date;
    
    @Column()
    courseName: string;
    
    @Column()
    hours: string;
    
    @Column("double")
    price: number;
} export default Student;