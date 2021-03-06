import { Request, Response } from "express";
import { connection } from "../connection/connection";
import Student from "../entity/student";

class Controller {
    constructor() { }
    public getAllStudents(req: Request, res: Response) {
        connection
            .then(async connection => {
                try {
                    const students: Student[] = await connection.manager.find(Student);
                    res.json({ error: null, data: students });
                } catch (error) {
                    console.error("Error ", error);
                    res.json({ error: error.message, data: null });
                }
            })
            .catch(error => {
                console.error("Error ", error);
                res.json({ error: error.message, data: null });
            });
    } public addStudent(req: Request, res: Response) {
        connection
            .then(async connection => {
                let requestStudent = req.body;
                let student = new Student();
                student.firstName = requestStudent.firstName;
                student.lastName = requestStudent.lastName;
                student.dateOfBirth = requestStudent.dateOfBirth;
                student.courseName = requestStudent.courseName;
                student.hours = requestStudent.hours;
                student.price = requestStudent.price;
                try {
                    await connection.manager.save(student);
                    res.json({ error: null, data: { message: "Successfully Saved." } })
                } catch (error) {
                    console.error("Error ", error);
                    res.json({ error: error.message, data: null });
                }
            })
            .catch(error => {
                console.error("Error ", error);
                res.json({ error: error.message, data: null });
            });
    } public updateStudent(req: Request, res: Response) {
        connection
            .then(async connection => {
                try {
                    let student = await connection.manager.findOne(Student, req.params.studentId);
                    let requestStudent = req.body;
                    student.firstName = requestStudent.firstName;
                    student.lastName = requestStudent.lastName;
                    student.dateOfBirth = requestStudent.dateOfBirth;
                    student.courseName = requestStudent.courseName;
                    student.hours = requestStudent.hours;
                    student.price = requestStudent.price;
                    await connection.manager.save(student);
                } catch (error) {
                    console.error("Error ", error);
                    res.json({ error: error.message, data: null });
                }
                res.json({ error: null, data: { message: "Successfully Updated." } })
            })
            .catch(error => {
                console.error("Error ", error);
                res.json({ error: error.message, data: null });
            });
    } public getStudentById(req: Request, res: Response) {
        connection
            .then(async connection => {
                try {
                    let student = await connection.manager.findOne(Student, req.params.studentId);
                    res.json(student)
                } catch (error) {
                    console.error("Error ", error);
                    res.json({ error: error.message, data: null });
                }
            })
            .catch(error => {
                console.error("Error ", error);
                res.json({ error: error.message, data: null });
            });
    } public deleteStudent(req: Request, res: Response) {
        connection
            .then(async connection => {
                try {
                    let student = await connection.manager.findOne(Student, req.params.studentId);
                    await connection.manager.remove(student);
                    res.json({ error: null, data: { message: "Successfully Removed." } })
                } catch (error) {
                    console.error("Error ", error);
                    res.json({ error: error.message, data: null });
                }
            })
            .catch(error => {
                console.error("Error ", error);
                res.json({ error: error.message, data: null });
            });
    }
} export { Controller }